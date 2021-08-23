import { Component, ElementRef, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import Swiper from 'swiper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public page: any;
  public swiperConfig: any = {
    spaceBetween: 3,
    pagination: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: true,
    breakpoints: {
      600: {
        slidesPerView: 'auto',
      },
      900: {
        slidesPerView: 3,
      }
    }
  }

  constructor(private elementRef: ElementRef
    , private routerActive: ActivatedRoute
    , private router: Router
  ) {
    this.routerActive.queryParams.subscribe(params => {
      this.page = params['page'];
    });

  }

  ngOnInit(): void {
    // this.router.navigate(['pages/IPDIndex'], { queryParams: { hn: data.hn, roomno: data.roomno, visitId: data.visitId, doctorcode: data.doctorcode } });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f4f4f4';
    this.elementRef.nativeElement.ownerDocument.body.style.fontFamily = 'Kanit';
  }

}
