

import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { trigger, state, style, transition, query, animate, keyframes, stagger } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [

    // menu animation
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

    // list animation
    trigger('listAnimation', [
      transition('* => *' , [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('4000ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0 , transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: .5 , transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1 , transform: 'translateY(0)', offset: 1 }),
          ]))
        ]), {optional: true }),

        query(':leave', stagger('4000ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 1 , transform: 'translateY(0px)', offset: 0 }),
            style({ opacity: .5 , transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0 , transform: 'translateY(-75px)', offset: 1 }),
          ]))
        ]), {optional: true }),
      ])
    ])
  ]
})
export class AnimationComponent {
  menuState: any  = 'out';
  items = [];
  constructor() {
    this.items = ['i am daliya', 'i am seeniya', 'i am viji'];
  }
  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  addItem() {
    this.items.push('i am vincy');
  }

  removeItem() {
    this.items.pop();
  }
}