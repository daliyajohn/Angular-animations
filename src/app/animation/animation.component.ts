

import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AnimationComponent {
  menuState: any  = 'out';
  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}