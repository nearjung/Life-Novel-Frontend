import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [LoginComponent, MenuComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  entryComponents: [LoginComponent],
  exports: [LoginComponent, MenuComponent],
  bootstrap: [MenuComponent]
})
export class MenuModule { }
