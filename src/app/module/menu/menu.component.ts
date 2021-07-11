import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  onOpenLogin() {
    const activeModal = this.modalService.open(LoginComponent, { size: 'lg', windowClass: 'app-login' });
		activeModal.componentInstance.action = 'Open Modal';
		// activeModal.componentInstance.scheduleId = scheduleId;
		// activeModal.componentInstance.data = JSON.stringify(data);
		activeModal.result.then((result) => {
			if (result) {
      }
    })
  }

}
