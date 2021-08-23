import { Component, ElementRef, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import Swiper from 'swiper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../module/login/login.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.scss']
})
export class BookCategoryComponent implements OnInit {
  public page: any;
  public catalogName: any;

  constructor(private elementRef: ElementRef
    , private routerActive: ActivatedRoute
  ) {
    this.routerActive.queryParams.subscribe(params => {
      this.page = params['page'];
      this.setCatalogName();
    });
  }

  ngOnInit(): void {
    
  }

  setCatalogName() {
    if (this.page === "newspecial") {
      this.catalogName = "ใหม่มาแรง";
    } else if (this.page === "poppular") {
      this.catalogName = "เรื่องฮิต";
    } else if (this.page === "new") {
      this.catalogName = "มาใหม่";
    } else if (this.page === "update") {
      this.catalogName = "อัพเดท";
    } else if (this.page === "end") {
      this.catalogName = "จบแล้ว";
    } else if (this.page === "read") {
      this.catalogName = "อ่านล่าสุด";
    }
  }

  ngAfterViewInit() {
  }

}
