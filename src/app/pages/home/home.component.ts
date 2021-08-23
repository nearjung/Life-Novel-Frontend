import { Component, ElementRef, OnInit } from '@angular/core';
import { ColorEvent } from 'ngx-color';
import Swiper from 'swiper';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../../module/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private elementRef: ElementRef
    , private router: Router
    ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
