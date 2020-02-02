import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Person } from '../models/person.model';
import { ToastController } from '@ionic/angular';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  addPerson = this.formBuilder.group({
    fullname: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(0)]],
    salary: ['', [Validators.required, Validators.min(0)]],
    email: ['', Validators.email]
  });

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private utilService: UtilsService,

  ) { }

  async add() {
    console.log(this.addPerson.value);
    const person: Person = this.addPerson.value;
    this.utilService.addPerson(person);
    this.addPerson.reset();
    const toast = await this.toastController.create({
      animated: true,
      duration: 3000,
      message: 'Person Added Successfully !',
      showCloseButton: true
    });
    toast.present();
  }

}
