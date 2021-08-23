import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../../module/menu/menu.module';
import { ColorSketchModule } from 'ngx-color/sketch';
import { BottomModule } from '../../module/bottom/bottom.module';
import { LoginComponent } from '../../module/login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MenuModule,
    ColorSketchModule,
    BottomModule
  ],
  entryComponents: [LoginComponent],
  exports: [LoginComponent]
})
export class BookCategoryModule { }
