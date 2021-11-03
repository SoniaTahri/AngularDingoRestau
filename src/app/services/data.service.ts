import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { getMaxListeners } from 'process';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  admins =  [
    {  id:  1,  firstName:  'manar', lastName: 'dahmou', email: 'manar@gmail.com', pwd: 5555555, cpwd: 55555555555555,phone:'125455', role:'admin' },
    {  id:  2,  firstName:  'sonia', lastName: 'tahri', email: 'sonia@gmail.com', pwd: 5555555, cpwd: 5555555,phone:'23585414', role:'admin' },
    {  id:  3,  firstName:  'sana', lastName: 'tahri', email: 'saba@gmail.com', pwd: 5555555, cpwd: 5555555,phone:'23585414', role:'admin' },
    {  id:  4,  firstName:  'loujain', lastName: 'chebbi', email: 'loujain@gmail.com', pwd: 5555555, cpwd: 5555555,phone:'23585414', role:'admin' }
   ];

   return {admins};

  }
}