import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentContainerComponent } from './content-container.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ContentContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ContentContainerComponent,
  ]
})
export class ContentContainerModule { }
