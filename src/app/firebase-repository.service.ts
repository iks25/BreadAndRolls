import { User } from 'firebase/auth';
import { setDoc, doc, collection } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseRepositoryService {
  private USERS_COLLECTION = 'users';

  constructor(private db: Firestore) {}

  createUser(user: User) {
    let docRef = doc(this.db, this.USERS_COLLECTION, user.uid);
    setDoc(docRef, {
      name: user.displayName,
      email: user.email,
    }).catch((r) => {
      console.log(r);
    });
  }
}
