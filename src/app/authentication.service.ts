import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  authState,
  signOut,
} from '@angular/fire/auth';
import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  User,
} from '@firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user?: User | null;
  constructor(private auth: Auth) {}

  logInGoogle() {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(this.auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;

        this.user = result.user;

        // ...
        return user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  logOut() {
    return signOut(this.auth)
      .then(() => {
        this.user = null;
        console.log('from service');
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
