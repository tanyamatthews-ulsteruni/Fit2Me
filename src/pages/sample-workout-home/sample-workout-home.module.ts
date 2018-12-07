import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleWorkoutHomePage } from './sample-workout-home';

@NgModule({
  declarations: [
    SampleWorkoutHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SampleWorkoutHomePage),
  ],
})
export class SampleWorkoutHomePageModule {}
