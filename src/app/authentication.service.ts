import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  authState,
} from '@angular/fire/auth';
import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  User,
} from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  user?: User;
  constructor(private auth: Auth) {}

  logInGoogle(goodResult: Function, errorResult: Function) {
    const provider = new GoogleAuthProvider();

    signInWithPopup(this.auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        goodResult();
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        errorResult(error);
        // ...
      });
  }
}
