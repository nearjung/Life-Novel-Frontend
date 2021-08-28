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
  public user: any = JSON.parse(localStorage.getItem('userInfo') || '{}');
  public category: any = "novel";
  public menu: any = [];
  constructor(
    private modalService: NgbModal
    , private router: Router
  ) {
    this.subMenu();
  }

  ngOnInit(): void {
  }

  onPage(page: string, query: string) {
    if (!page && !query) {
      this.router.navigate(['']);
    } else {
      this.router.navigate([page], { queryParams: { page: query } });
    }
  }

  subMenu(category: string = "novel") {
    this.category = category;
    if (category === "novel") {
      this.menu = [
        { active: false, page: "", query: "", label: 'หน้าแรก' },
        { active: false, page: "", query: "newspecial", label: 'ใหม่มาแรง' },
        { active: false, page: "", query: "poppular", label: 'เรื่องฮิต' },
        { active: false, page: "", query: "new", label: 'มาใหม่' },
        { active: false, page: "", query: "update", label: 'อัพเดท' },
        { active: false, page: "", query: "end", label: 'จบแล้ว' },
        { active: false, page: "", query: "read", label: 'อ่านล่าสุด' },
      ]
    } else if (category === "novelChat") {
      this.menu = [
        { active: false, page: "", query: "", label: 'หน้าแรก' },
        { active: false, page: "chat-novel", query: "newspecial", label: 'ใหม่มาแรง' },
        { active: false, page: "chat-novel", query: "poppular", label: 'เรื่องฮิต' },
        { active: false, page: "chat-novel", query: "new", label: 'มาใหม่' },
        { active: false, page: "chat-novel", query: "update", label: 'อัพเดท' },
        { active: false, page: "chat-novel", query: "end", label: 'จบแล้ว' },
        { active: false, page: "chat-novel", query: "read", label: 'อ่านล่าสุด' },
      ]
    } else if (category === "forum") {
      this.menu = [
        { active: false, page: "", query: "", label: 'หน้าแรก' },
        { active: false, page: "forum", query: "hottopic", label: 'กระทู้มาแรง' },
        { active: false, page: "forum", query: "newtopic", label: 'กระทู้มาใหม่' },
      ];
    } else if (category === "write") {
      this.menu = [
        { active: false, page: "", query: "", label: 'หน้าแรก' },
        { active: false, page: "write", query: "mystory", label: 'งานเขียนของฉัน' },
        { active: false, page: "write", query: "createstory", label: 'เพิ่มงานเขียนใหม่' },
      ];
    } else if (category === "check") {
      this.menu = [
        { active: false, page: "", query: "", label: 'หน้าแรก' },
        { active: false, page: "check", query: "mystory", label: 'ตรวจงานเขียนของฉัน' },
        { active: false, page: "check", query: "checkmsg", label: 'ตรวจสอบข้อความ' },
      ];
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
    localStorage.removeItem("userInfo");
  }

}
