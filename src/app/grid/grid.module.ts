import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent } from './grid.component';

@NgModule({
  exports: [GridComponent],
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GridModule { }
