import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getData(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  createData(type: any, collection: string) {
    return this.firestore.collection(collection).add(type);
  }
}
