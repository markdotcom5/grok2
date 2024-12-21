// lib/authHelpers.js

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export const signup = async (email, password, additionalInfo) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store additional user information in MongoDB
    const userDoc = {
      uid: user.uid,
      email: user.email,
      createdAt: new Date(),
      ...additionalInfo, // Include additional information here
    };
    await addDoc(collection(db, 'users'), userDoc);

    return user;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
