import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  profileRoot = 'ProfilePage'
  goalsRoot = 'GoalsPage'
  exercisesRoot = 'ExercisesPage'
  workoutsRoot = 'WorkoutsPage'


  constructor(public navCtrl: NavController) {}

}
