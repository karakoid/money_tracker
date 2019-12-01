import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './add-edit.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AddEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    AddEditComponent,
  ]
})
export class AddEditModule { }
