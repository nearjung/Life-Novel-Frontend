import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { AccountService } from '../../../service/account.service';
import { base64ToFile, Dimensions, ImageCroppedEvent, ImageTransform, LoadedImage } from 'ngx-image-cropper';


@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.component.html',
})
export class CropImageComponent implements OnInit {

  public croppedImage: any = '';
  public canvasRotation = 0;
  public rotation = 0;
  public scale = 1;
  public showCropper = false;
  public containWithinAspectRatio = false;
  public transform: ImageTransform = {};

  @Input() imageChangedEvent: any;

  constructor(
    private activeModal: NgbActiveModal,
    private accountService: AccountService,
  ) { }

  ngOnInit(): void {
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    // console.log(event, base64ToFile(this.croppedImage));
  }

  imageLoaded() {
    this.showCropper = true;
    // console.log('Image loaded');
  }

  cropperReady(sourceImageDimensions: Dimensions) {
    // console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
    // console.log('Load failed');
  }

  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }

  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }

  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH
    };
  }


  flipHorizontal() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH
    };
  }

  flipVertical() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV
    };
  }

  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

  zoomOut() {
    this.scale -= .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  zoomIn() {
    this.scale += .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  toggleContainWithinAspectRatio() {
    this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }

  updateRotation() {
    this.transform = {
      ...this.transform,
      rotate: this.rotation
    };
  }

  closeModal(value: any = null) {
    this.activeModal.close(value);
  }

}
