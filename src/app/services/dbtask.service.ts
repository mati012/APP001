import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbtaskService {


  db: SQLiteObject = null;
  constructor() { }
  setDatabase(db: SQLiteObject){
  if(this.db === null){
   this.db=db;
  }
  }
}
