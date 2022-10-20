import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from '@ionic/angular/providers/nav-controller';
import { NavController } from '@ionic/angular'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  back() {
    let animation: AnimationOptions = {
      animated: true,
      animationDirection: "back"
    }
    this.navController.back(animation);
  }

}