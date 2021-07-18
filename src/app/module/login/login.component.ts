import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { AccountService } from '../../service/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public page = "login";

  public user = new SocialUser;
  public loggedIn: boolean = false;

  constructor(
    private activeModal: NgbActiveModal,
    private socialAuthService: SocialAuthService,
    private accountService: AccountService
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


  closeModal(value: any) {
    this.activeModal.close(value);
  }

}
