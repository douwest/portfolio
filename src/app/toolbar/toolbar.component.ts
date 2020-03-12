import { Component, OnInit } from '@angular/core';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AnimationService } from 'src/shared/services/animation.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  faBars = faBars;
  faSolidLogo = faHeartSolid;
  faOutlineLogo = faHeartOutline;
  isOpen = false;

  constructor(private animationService: AnimationService) { }

  ngOnInit() {
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.animationService.toggle();
  }

}
