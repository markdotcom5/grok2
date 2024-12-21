import { auth } from "./firebaseConfig"; // Ensure firebaseConfig.js exports the Firebase Auth instance
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// Login Function
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in user:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Login failed:", error.message);
    throw new Error(error.message);
  }
}

// Sign-Up Function
export async function signup(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Account created for user:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Sign-up failed:", error.message);
    throw new Error(error.message);
  }
}

// Log Out Function
export async function logout() {
  try {
    await signOut(auth);
    console.log("User signed out.");
  } catch (error) {
    console.error("Log out failed:", error.message);
    throw new Error(error.message);
  }
}
