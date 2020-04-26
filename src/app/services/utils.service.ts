import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    private listPersons: Person[] =
        [
            {
                id: 0,
                fullname: 'Mohsen ssBen Foula',
                age: 56,
                email: 'mohsen@gmaiil.com',
                salary: 1000
            }
        ];

    addPerson(person: Person) {
        person.id = this.listPersons.length;
        this.listPersons.push(person);
    }

    getPersonList(): Person[] {
        return this.listPersons;
    }

    getPersonById(id: number) {
        return this.listPersons.find(element => element.id === id);
    }

    updatePerson(person: Person) {
        this.listPersons[this.listPersons.findIndex(element => element.id === person.id)] = person;
    }

    deletePerson(id: number) {
        this.listPersons.splice(this.listPersons.findIndex(element => element.id === id), 1);
    }

}
