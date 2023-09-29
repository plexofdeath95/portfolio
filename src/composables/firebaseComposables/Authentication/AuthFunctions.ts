import {auth} from '@/firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import type { UserSchema } from '../Firestore/UserSchema/UserDataSchema';
import { createUser, getUser } from '../Firestore/UserSchema/UserOps';
// registerUser function
// This function takes in an email and password and creates a new user in Firebase Authentication.
// It returns a promise that resolves with the user object.

export const registerUser = async (email: string, password: string, userData:UserSchema) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await createUser(user.uid, userData);
        return userData;
    } catch (error:any) {
        throw new Error(error.message);
    }
};


//login a user
//This function takes in an email and password and signs in the user in Firebase Authentication.
//It returns a promise that resolves with the user object.

export const loginUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userData = await getUser(user.uid);
        return userData;
    } catch (error:any) {
        throw new Error(error.message);
    }
};

// logout a user
// This function signs out the user from Firebase Authentication.
// It returns a promise that resolves with the user object.

export const logoutUser = async () => {
    try {
        await auth.signOut();
    } catch (error:any) {
        throw new Error(error.message);
    }
};

// get current user
// This function returns the current user object from Firebase Authentication.
// It returns a promise that resolves with the user object.
// fetches their data from Firestore and returns the user object.

export const getCurrentUser = async () => {
    try {
        const user = auth.currentUser;
        if (user) {
            const userData = await getUser(user.uid);
            return userData;
        } else {
            throw new Error('No user is signed in');
        }
    } catch (error:any) {
        throw new Error(error.message);
    }
};