import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../../module/menu/menu.module';
import { ColorSketchModule } from 'ngx-color/sketch';
import { BottomModule } from '../../module/bottom/bottom.module';
import { LoginComponent } from '../../module/login/login.component';
import { BookCategoryComponent } from '../book-category/book-category.component'

@NgModule({
  declarations: [LoginComponent, BookCategoryComponent],
  imports: [
    CommonModule,
    MenuModule,
    ColorSketchModule,
    BottomModule
  ],
  entryComponents: [LoginComponent, BookCategoryComponent],
  exports: [LoginComponent, BookCategoryComponent]
})
export class HomeModule { }
