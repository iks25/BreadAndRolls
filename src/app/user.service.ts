import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: Firestore) {}

  async save() {
    console.log('zzz');

    let collectionRef = collection(this.firestore, 'users');
    let doc1 = doc(this.firestore, 'cities', 'c2');
    setDoc(doc1, { name: 'warszawa' })
      .then((r) => {
        console.log('r=>', r);
      })
      .catch((r) => {
        console.log(r);
      });

    // setDoc(doc(db, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });

    // addDoc(collectionRef, {
    //   first: 'Ada',
    //   last: 'Lovelace',
    //   born: 1815,
    // })
    //   .then((result) => {
    //     console.log('result', result);
    //   })
    //   .catch((e) => {
    //     console.log('error', e);
    //   });
  }

  async getData() {
    const docRef = doc(this.firestore, 'cities', 'c1');
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  }
}
