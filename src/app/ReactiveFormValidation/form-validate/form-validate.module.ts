import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormValidateRoutingModule } from './form-validate-routing.module';
import { ValidateFormComponent } from './validate-form/validate-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ValidateFormComponent],
  imports: [
    CommonModule,
    FormValidateRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class FormValidateModule {}
