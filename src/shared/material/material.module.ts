import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule
} from "@angular/material";
import { CommonModule } from '@angular/common';

const modules = [
  MatButtonModule,
  MatListModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule
];

@NgModule({
  imports: [CommonModule, ...modules],
  exports: modules
})
export class MaterialModule {}