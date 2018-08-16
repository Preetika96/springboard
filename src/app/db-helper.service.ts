/*import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class DbHelperService implements OnInit {

  userCol: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.userCol = this.afs.collection('users');
    this.users = this.userCol.valueChanges();
  }

  registerUser(contact, email, empCode, gender, name, password, role){
    this.afs.collection('users').add({'contact' : contact,
     'email': email, 'empCode':empCode, 'gender': gender,'name':name,'password':password,'role':role});
  }
}
*/