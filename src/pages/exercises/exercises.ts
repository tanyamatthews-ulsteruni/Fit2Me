import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html',
})
export class ExercisesPage {

	users: any;
	exercises: any; 

	constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
		this.getUsers();
		this.getExercises();
	}

	getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  	}

  	getExercises(){
  		this.restProvider.getExercises()
    .then(data => {
      this.exercises = data.results;
      //console.log(this.exercises);
    });
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisesPage');
  }

}
