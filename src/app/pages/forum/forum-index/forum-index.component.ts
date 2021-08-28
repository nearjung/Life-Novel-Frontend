import { Component, ElementRef, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import Swiper from 'swiper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../../module/login/login.component';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-forum-index',
  templateUrl: './forum-index.component.html',
  styleUrls: ['./forum-index.component.scss']
})
export class ForumIndexComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  public page: any;
  public catalogName: any;
  public catalogParam: any;
  constructor(private elementRef: ElementRef
    , private routerActive: ActivatedRoute
  ) {
    this.routerActive.queryParams.subscribe(params => {
      this.page = params['page'];

    });
  }

  ngOnInit(): void {

  }


  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  
}
