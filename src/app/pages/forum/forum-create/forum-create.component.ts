import { Component, ElementRef, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { ForumBoardModel } from '../../../models/forum_board';
import { ForumService } from 'src/app/service/forum.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-forum-create',
  templateUrl: './forum-create.component.html',
  styleUrls: ['./forum-create.component.scss']
})
export class ForumCreateComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  public user: any = JSON.parse(localStorage.getItem('userInfo') || '{}');
  public page: any;
  public catalogName: any;

  public forumBoard = new ForumBoardModel();
  public editorConfig: AngularEditorConfig = {
    editable: true,
    height: '250px'
  }

  constructor(private elementRef: ElementRef
    , private routerActive: ActivatedRoute
    , private router: Router
    , private forumService: ForumService
  ) {
    this.routerActive.queryParams.subscribe(params => {
      this.page = params['page'];
      this.forumBoard.forumId = params['forumId'];
    });

  }

  ngOnInit(): void {
    if (!this.user?.memberId) {
      Swal.fire('Warning !', 'กรุณาล็อกอิน', 'info');
      this.changePage('hottopic');
    }

    if (this.forumBoard.forumId) {
      this.getForum();
    }
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  changePage(page: string) {
    this.router.navigate(['forum'], { queryParams: { page: page } });
  }

  getForum() {
    this.forumService.getForumById(this.forumBoard.forumId).pipe(takeUntil(this.ngUnsubscribe)).subscribe(result => {
      if (result.serviceResult.status === "Success") {
        this.forumBoard = result.serviceResult.value;

        if (this.forumBoard.createBy !== this.user.memberId) {
          this.changePage('hottopic');
          return;
        }
      } else {
        Swal.fire('Error!', 'เกิดข้อผิดพลาด !', 'error');
      }
    }, err => {
      Swal.fire('Error!', 'เกิดข้อผิดพลาด !', 'error');
      console.error(err);
    })
  }

  save() {
    if (!this.user?.memberId) {
      Swal.fire('Warning !', 'กรุณาล็อกอิน', 'info');
      this.changePage('hottopic');
      return;
    }

    if (!this.forumBoard.rating || !this.forumBoard.title || !this.forumBoard.html || !this.forumBoard.forumCatalogId || !this.forumBoard.tag) {
      Swal.fire('Error!', 'กรุณากรอกข้อมูลให้ครบทุกช่อง', 'error');
    } else {
      this.forumBoard.active = 'Y';
      if (!this.forumBoard.createBy) {
        this.forumBoard.createBy = this.user.memberId;
        this.forumBoard.createDate = new Date();
      }
      this.forumBoard.updateBy = this.user.memberId;
      this.forumBoard.updateDate = new Date();

      this.forumService.saveForum(this.forumBoard).pipe(takeUntil(this.ngUnsubscribe)).subscribe(result => {
        if (result.serviceResult.status === "Success") {
          Swal.fire('Success !', 'บันทึกสำเร็จ', 'success');
        } else {
          Swal.fire('Error!', 'เกิดข้อผิดพลาด !', 'error');
        }
      }, err => {
        Swal.fire('Error!', 'เกิดข้อผิดพลาด !', 'error');
        console.error(err);
      });
    }
  }


}
