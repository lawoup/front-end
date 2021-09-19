import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import type { UserCredential } from 'firebase/auth'
import { request } from '../lib/request';
import { RegisterTokenBody } from '../types/models';
import { auth } from '../lib/firebase';

export const signInWithGoogle = async(): Promise<UserCredential> => {
  const googleAuthProvider = new GoogleAuthProvider();
  const user = await signInWithPopup(auth, googleAuthProvider);
  console.log(user);
  return user;
}

export const registerToken = async(args: RegisterTokenBody): Promise<any> => {
  const data = request.post('/auth/register', args);
  return data;
}