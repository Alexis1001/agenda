import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,AlertController } from 'ionic-angular';
import { ContactProvider, Contact } from '../../providers/contact/contact';
import {Camera, CameraOptions} from '@ionic-native/camera';
 
@IonicPage()
@Component({
  selector: 'page-edit-contact',
  templateUrl: 'edit-contact.html',
})
export class EditContactPage {
  model: Contact;
  key: string;
  public photos : any;
  public base64Image : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactProvider: ContactProvider, private toast: ToastController,private camera : Camera,alertCtrl : AlertController) {
    if (this.navParams.data.contact && this.navParams.data.key) {
      this.model = this.navParams.data.contact;
      this.key =  this.navParams.data.key;
    } else {
      this.model = new Contact();
    }
  }

  ngOnInit() {
    this.photos = [];
  }
  //takePhoto(){
   // console.log("Take Photo");
    //}

  deletePhoto(index) {
   console.log("Delete Photo");
  }

  takePhoto() {
    const options : CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
      }, (err) => {
        console.log(err);
      });
  }



 
  save() {
    this.saveContact()
      .then(() => {
        this.toast.create({ message: 'Contacto Guardado.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Error al guardar contacto', duration: 3000, position: 'botton' }).present();
      });
  }
 
  private saveContact() {
    if (this.key) {
      return this.contactProvider.update(this.key, this.model);
    } else {
      return this.contactProvider.insert(this.model);
    }
  }
}