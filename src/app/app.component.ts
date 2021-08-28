import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(
    private elementRef: ElementRef
  ) {}
  
  ngOnInit() {

  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#f4f4f4';
    this.elementRef.nativeElement.ownerDocument.body.style.fontFamily = 'Kanit';
  }

}
