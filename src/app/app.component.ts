import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDxUC_FJ5DGN7CXAIzTgHAs7h-2wuFMtqk",
  authDomain: "ionic-eng.firebaseapp.com",
  databaseURL: "https://ionic-eng.firebaseio.com",
  projectId: "ionic-eng",
  storageBucket: "ionic-eng.appspot.com",
  messagingSenderId: "925698098893",
  appId: "1:925698098893:web:3e9a36d79baec23a"
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
