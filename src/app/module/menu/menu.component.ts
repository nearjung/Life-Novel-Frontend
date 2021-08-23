import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public user: any = localStorage.getItem('userInfo');
  public category: any = "novel";
  public menu: any = [];
  constructor(
    private modalService: NgbModal
    , private router: Router
  ) { 
    this.subMenu();
  }

  ngOnInit(): void {
    console.log(this.user);
  }

  onPage(page: string, query: string) {
    if (!page) {
      this.router.navigate(['']);
    } else {
      this.router.navigate([page], { queryParams: { page: query } });
    }
  }

  subMenu(category: string = "novel") {
    if (category === "novel") {
      this.menu = [
        { link: "onPage('', '')", label: 'หน้าแรก' },
        { link: "onPage('', 'newspecial')", label: 'ใหม่มาแรง' },
        { link: "onPage('', 'poppular')", label: 'เรื่องฮิต' },
        { link: "onPage('', 'new')", label: 'มาใหม่' },
        { link: "onPage('', 'update')", label: 'อัพเดท' },
        { link: "onPage('', 'end')", label: 'จบแล้ว' },
        { link: "onPage('', 'read')", label: 'อ่านล่าสุด' },
      ]
    } else if (category === "novelChat") {
      this.menu = [];
    } else if (category === "forum") {
      this.menu = [];
    } else if (category === "write") {
      this.menu = [];
    } else if (category === "check") {
      this.menu = [];
    }
  }

  onOpenLogin() {
    var option: NgbModalOptions = {
      size: 'lg',
      windowClass: 'app-login',
      centered: true,
      backdrop: 'static'
    }
    const activeModal = this.modalService.open(LoginComponent, option);
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
