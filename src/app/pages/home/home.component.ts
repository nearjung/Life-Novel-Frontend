import { Component, ElementRef, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import Swiper from 'swiper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../module/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f4f4f4';
    this.elementRef.nativeElement.ownerDocument.body.style.fontFamily = 'Kanit';
  }

}
