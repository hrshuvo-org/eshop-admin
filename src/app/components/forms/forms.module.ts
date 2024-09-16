import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { AdvancedFormsComponent } from './advanced-forms/advanced-forms.component';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormElementSizesComponent } from './form-element-sizes/form-element-sizes.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardsComponent } from './form-wizards/form-wizards.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { AdvancedFormService } from './advanced-forms/advanced-form.service';
import { MatStepperModule } from '@angular/material/stepper';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxSliderModule } from 'ngx-slider-v2';
import { InputMaskModule } from '@ngneat/input-mask';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { NgxEditorModule } from "ngx-editor";

@NgModule({
  declarations: [
    FormElementsComponent,
    AdvancedFormsComponent,
    FormLayoutsComponent,
    FormElementSizesComponent,
    FormValidationComponent,
    FormWizardsComponent,
    FormEditorComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule, ReactiveFormsModule,
    InputMaskModule.forRoot({ inputSelector: 'input', isAsync: true }),
    ColorPickerModule,
    NgbModule,
    NgSelectModule,
    MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatIconModule, MatStepperModule,
    NgxSliderModule,
    NgxMatIntlTelInputComponent,
    NgxDaterangepickerMd.forRoot(),
    NgxMaterialTimepickerModule,
    NgxDropzoneModule,
    ToastrModule,
    AngularEditorModule,
    NgxEditorModule
  ],
  providers:[
    AdvancedFormService,
    ToastrService
  ]
})
export class FormModule { }
