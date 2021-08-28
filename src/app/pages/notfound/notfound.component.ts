import { Component, ElementRef, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import Swiper from 'swiper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotFoundComponent implements OnInit {
  public page: any;
  public catalogName: any;

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

}
