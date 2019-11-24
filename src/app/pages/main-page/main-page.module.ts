import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ListModule } from '../../components/list/list.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ListModule,
  ],
  exports: [
    MainPageComponent,
  ]
})
export class MainPageModule { }
