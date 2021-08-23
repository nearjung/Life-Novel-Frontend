import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../../module/menu/menu.module';
import { ColorSketchModule } from 'ngx-color/sketch';
import { BottomModule } from '../../module/bottom/bottom.module';
import { LoginComponent } from '../../module/login/login.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    MenuModule,
    ColorSketchModule,
    BottomModule
  ],
  entryComponents: [LoginComponent, HomeComponent],
  exports: [LoginComponent, HomeComponent]
})
export class MainModule { }
