import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss']
})
export class FormEditorComponent implements OnInit {
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.editor = new Editor();
  }


  //ngx-editor
  editor!: Editor;
  editor1!: Editor;
  html = '';

  //Angular Editor
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }
  OpenEditor(editormodal: any) {
    let modalRef = this.modalService.open(editormodal, { centered: true, size: 'lg' });
    this.editor1 = new Editor();
    modalRef.result.then(
        () => {
          this.editor1.destroy();
        },
        () => {
          this.editor1.destroy();
        }
    );
  }

}
