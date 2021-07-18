import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public user: any = localStorage.getItem('userInfo');
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    console.log(this.user);

  }

  onOpenLogin() {
    const activeModal = this.modalService.open(LoginComponent, { size: 'lg', windowClass: 'app-login' });
    activeModal.componentInstance.action = 'Open Modal';
    activeModal.result.then((result) => {
      if (result) {
        this.user = result;
      }
    })
  }

  logout() {
    this.user = null;
  }

}
