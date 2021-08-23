import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { LineLogin } from '@ionic-native/line-login/ngx';
import Swal from 'sweetalert2'

// Component
import { CropImageComponent } from './crop-image/crop-image.component';

// Model
import { PictureUpload } from './../../models/picture';
import { AccountRegister } from './../../models/account';

// Service
import { RegisterService } from '../../service/register.service';
import { AccountService } from '../../service/account.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [LineLogin]
})
export class LoginComponent implements OnInit {
  public page: any = 'login';
  public imageChangedEvent: any;
  public user = new SocialUser;
  public loggedIn: boolean = false;
  public base64Image: any;
  public accountField = new AccountRegister();
  public pictureField = new PictureUpload();

  constructor(
    private activeModal: NgbActiveModal,
    private socialAuthService: SocialAuthService,
    private accountService: AccountService,
    private lineLogin: LineLogin,
    private modalService: NgbModal,
    private registerService: RegisterService
  ) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      // Search 
      localStorage.setItem('userInfo', JSON.stringify(user));
      this.accountService.login(user).subscribe(result => {
        if (result.serviceResult.status == "Success") {
          localStorage.setItem('userInfo', result.serviceResult.value);
          this.closeModal(result.serviceResult.value);
        }
      }, err => {
        console.error(err);
      })
    });
  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }

  refreshToken(): void {
    this.socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.refreshAuthToken(FacebookLoginProvider.PROVIDER_ID);
  }

  lineLogedin() {
    this.lineLogin.initialize({ channel_id: "1656226925" });
    this.lineLogin.login()
      .then(result => console.log(result))
      .catch(error => console.log(error))
  }

  onOpenCrop() {
    var option: NgbModalOptions = {
      size: 'lg',
      windowClass: 'app-crop-image',
      centered: true,
      backdrop: 'static'
    }
    const activeModal = this.modalService.open(CropImageComponent, option);
    activeModal.componentInstance.action = 'Open Modal';
    activeModal.componentInstance.imageChangedEvent = this.imageChangedEvent;
    activeModal.result.then((result: any) => {
      if (result) {
        this.base64Image = result;
      }
    })
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.onOpenCrop();
  }

  register() {
    var passwordPattern = /[a-z0-9@A-Z]/g;
    if (!this.accountField.email || !this.accountField.password || !this.accountField.repassword
      || !this.accountField.firstName || !this.accountField.lastName) {
      Swal.fire('Error !', 'กรุณากรอกข้อมูลให้ครบทุกช่อง', 'error');
      return;
    } else if (this.accountField.password != this.accountField.repassword) {
      Swal.fire('Error !', 'กรุณากรอกยืนยันรหัสผ่านให้ตรงกัน', 'error');
      return;
    } else if (!this.accountField.password.match(passwordPattern)) {
      Swal.fire('Error !', 'รหัสผ่านหรืออีเมลต้องเป็นตัวอักษรภาษาอังกฤษ หรือตัวเลขเท่านั้น', 'error');
      return;
    }

    // Account
    this.accountField.active = 'Y';
    this.accountField.createBy = "System";
    this.accountField.createDate = new Date();
    this.accountField.updateBy = "System";
    this.accountField.updateDate = new Date();

    // Picture
    this.pictureField.formCode = "Avatar";
    this.pictureField.name = (+new Date()).toString() + ".png";
    this.pictureField.path = "Avatar";
    this.pictureField.base64 = this.base64Image;
    this.pictureField.active = 'Y';
    this.pictureField.createBy = "System";
    this.pictureField.createDate = new Date();
    this.pictureField.updateBy = "System";
    this.pictureField.updateDate = new Date();

    const submitData = {
      account: this.accountField,
      picture: this.pictureField
    };

    this.registerService.register(submitData).subscribe(result => {
      if (result.serviceResult.status == "Success") {
        Swal.fire('Success !', 'สมัครเสร็จสิ้น ! คุณสามารถเข้าสู่ระบบได้แล้ว', 'success').then(btn => {
          if (btn.isConfirmed) {
            this.closeModal();
          }
        })
      } else {
        Swal.fire('Error', result.serviceResult.text, 'error');
      }
    }, err => {
      console.error(err);
    })
  }

  loginWeb() {
    var loginSubmit = {
      email: this.accountField.email,
      password: this.accountField.password,
      url: environment.endPointWeb
    }
    this.accountService.loginWeb(loginSubmit).subscribe(result => {
      if (result.serviceResult.status == "Success") {
        Swal.fire('Success', 'เข้าสู่ระบบสำเร็จ', 'success').then(btn => {
          if (btn.isConfirmed) {
            this.closeModal(result.serviceResult.value);
          }
        })
      } else {
        Swal.fire('Error', result.serviceResult.text, 'error');
      }
    }, err => {
      console.error(err);
    })
  }

  closeModal(value: any = null) {
    this.activeModal.close(value);
  }

}
