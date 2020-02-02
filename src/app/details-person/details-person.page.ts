import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../models/person.model';
import { UtilsService } from '../services/utils.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-details-person',
  templateUrl: './details-person.page.html',
  styleUrls: ['./details-person.page.scss'],
})
export class DetailsPersonPage implements OnInit {

  id: number;
  isUpdate = false as boolean;
  person: Person;
  form: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private utilsService: UtilsService,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      this.id = Number(data.get('id'));
      this.person = this.utilsService.getPersonById(this.id);
      console.log('Found Person : ', this.person);
    });
  }

  onUpdate() {
    this.form = this.formBuilder.group({
      id: [this.person.id],
      fullname: [this.person.fullname, Validators.required],
      age: [this.person.age, [Validators.required, Validators.min(0)]],
      salary: [this.person.salary, [Validators.required, Validators.min(0)]],
      email: [this.person.email, Validators.email]
    });
    this.isUpdate = true;
  }

  async update() {
    this.utilsService.updatePerson(this.form.value);
    this.isUpdate = false;
    this.person = this.utilsService.getPersonById(this.id);
    const toast = await this.toastController.create({
      animated: true,
      duration: 3000,
      message: 'Person updated Successfully !',
      showCloseButton: true
    });
    toast.present();
  }

  async deletePerson() {
    this.utilsService.deletePerson(this.person.id);
    const toast = await this.toastController.create({
      animated: true,
      duration: 3000,
      message: 'Person deleted Successfully !',
      showCloseButton: true
    });
    toast.present();
    this.router.navigate(['/tabs/tab2']) ;
  }

}
