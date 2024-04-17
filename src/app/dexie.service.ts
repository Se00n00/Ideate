import { Injectable } from '@angular/core';
import Dexie, {Table} from 'dexie';
// @Injectable({
//   providedIn: 'root'
// })

export interface IdeaList{
  id?:number;
  title:string;
  description:string;
  links:{name: string, href:string}[];
}

export interface Appdetail{
  id?:number;
  introduction:boolean;
}

export interface Idea{
  id?:number;
  files:{name:string, source:string}[];
}


export class DexieService extends Dexie{
  IdeaList!: Table<IdeaList, number>;
  Idea!: Table<Idea, number>;
  Appdetails!: Table<Appdetail, number>;

  constructor() { 
    super('ngdexieliveQuery');
    this.version(3).stores({
      IdeaList: '++id',
      Idea: '++id',
      Appdetails: '++id',
    });
    this.on('populate',() => this.populate());
  }
  async populate(){
    
  }

}

export const db= new DexieService();

