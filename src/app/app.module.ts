import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Camera} from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactProvider } from '../providers/contact/contact';
import { GuardarPage } from '../pages/guardar/guardar';
import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { EditContactPage } from '../pages/edit-contact/edit-contact';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GuardarPage,
    EditContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GuardarPage,
    EditContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
    ContactProvider
  ]
})
export class AppModule {}
