import { Injectable } from '@angular/core';
import { ToolbarComponent } from 'src/app/toolbar/toolbar.component';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  isOpen = false;

  constructor() { }

  toggle() {
    this.isOpen = !this.isOpen;
  }
  
}
