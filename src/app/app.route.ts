
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnimationComponent } from './animation/animation.component';
import { NoAnimationComponent } from './noanimation/noanimation.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'animation',
        component: AnimationComponent
    },
    {
        path: 'noanimation',
        component: NoAnimationComponent
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
