import { ForumBoardModel } from './../../../models/forum_board';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import Swiper from 'swiper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../../module/login/login.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from '../../../service/forum.service'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['./forum-detail.component.scss']
})
export class ForumDetailComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  public page: any;
  public catalogName: any;
  public forumList: any = [];
  public category: any = 1;
  public p: any = 1;
  public forumId: any;
  public forumInfo: any;
  @Input() catalog: any;

  constructor(private elementRef: ElementRef
    , private routerActive: ActivatedRoute
    , private router: Router
    , private forumService: ForumService
  ) {
    this.routerActive.queryParams.subscribe(params => {
      this.page = params['page'];
      if (this.page === "hottopic") {
        this.catalogName = "กระทู้มาแรง";
      } else if (this.page === "newtopic") {
        this.catalogName = "กระทู้มาใหม่";
      }

      this.forumId = params['forumId'];
    });
  }

  ngOnInit(): void {
    this.getForum();

    if (this.forumId) {
      this.getForumById();
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  changePage(page: string) {
    this.router.navigate(['forum'], { queryParams: { page: page } });
  }

  forumInformation(id: string) {
    this.forumId = id;
    this.getForumById();
    this.router.navigate(['forum'], { queryParams: { page: this.page, forumId: id } });
  }

  ngAfterViewInit() {
  }

  getForum() {
    this.forumService.getForum(this.category).pipe(takeUntil(this.ngUnsubscribe)).subscribe(result => {
      if (result.serviceResult.status === "Success") {
        this.forumList = result.serviceResult.value;
      }
    })
  }

  getForumById() {
    this.forumService.getForumById(this.forumId).pipe(takeUntil(this.ngUnsubscribe)).subscribe(result => {
      if (result.serviceResult.status === "Success") {
        this.forumInfo = result.serviceResult.value;
      } else {
        Swal.fire("Error", "เกิดข้อผิดพลาด !", "error");
      }
    }, err => {
      console.error(err);
      Swal.fire("Error", err, "error");
    })
  }

}
