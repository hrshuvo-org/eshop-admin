import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileUploader} from "ng2-file-upload";
import {environment} from "../../../environments/environment";
import {PhotoService} from "../../shared/services/photo.service";

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.scss']
})
export class PhotoEditorComponent implements OnInit {
  baseUrl: string = environment.apiUrl;
  @Input({required: true}) id: any;
  @Input({required: true}) addPhotoUrl!: string;
  @Input() loadPhotoUrl!: string;

  @Output() mainPhoto: EventEmitter<string> = new EventEmitter<string>(null!);

  photoList: any[] = [];

  uploader!: FileUploader;
  hasBaseDropZoneOver = false;

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {

    this.initializeUploader();
    this.loadPhotos();
  }

  fileOverBase(event: any) {
    this.hasBaseDropZoneOver = event;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + this.addPhotoUrl + '?id=' + this.id,
      // authToken: `Bearer ${this.user.token}`,
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024 // 10 MB
    });

    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    }

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const photo = JSON.parse(response);
        this.photoList.push(photo);
      }
    }
  }


  deletePhoto(photoId: number) {
    console.log(photoId);

  }

  setMainPhoto(photo: any) {

    this.photoService.setMainPhoto(this.id, photo.id).subscribe({
      next: () => {
        this.mainPhoto.emit(photo.url);

        this.photoList.forEach(p => {
          if (p.isMain) p.isMain = false;
          if (p.id === photo.id) p.isMain = true;
        });
      }
    });

  }

  private loadPhotos() {
    this.photoService.loadPhotos(this.loadPhotoUrl + '/' + this.id).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.photoList = res;
      }
    });
  }
}
