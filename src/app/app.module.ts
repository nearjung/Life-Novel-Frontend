import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { SwiperModule } from 'swiper/angular';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigServerService } from './core/config-server.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './module/menu/menu.component';
import { BottomComponent } from './module/bottom/bottom.component';
import { LoginComponent } from './module/login/login.component';
import { CropImageComponent } from './module/login/crop-image/crop-image.component';
import { AuthInterceptor } from './authorization/auth.interceptor';
import { MainPageComponent } from './pages/main-page/main-page.component'
import { BookCategoryComponent } from './pages/book-category/book-category.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    BottomComponent,
    LoginComponent,
    MainPageComponent,
    BookCategoryComponent,
    CropImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    ImageCropperModule
  ],
  providers: [
    ConfigServerService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '754047462333-7as4ci2fauql6ai99jruqp2isv0ulu1h.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('352293546336696')
        }
      ]
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
