import {auth} from '@/firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification  } from 'firebase/auth';
import type { UserSchema } from '../Firestore/UserSchema/UserDataSchema';
import { createUser, getUser } from '../Firestore/UserSchema/UserOps';

export interface AuthUser {
    user?: UserSchema;
    error?: string;
}


// registerUser function
// This function takes in an email and password and creates a new user in Firebase Authentication.
// It returns a promise that resolves with the user object.

export const registerUser = async (email: string, password: string, userData:UserSchema): Promise<AuthUser> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await createUser(user.uid, userData);
        await sendEmailVerification(user);
        const authUser = { user:userData, error: undefined };
        return authUser;
    } catch (error:any) {

        const authUser = { user: undefined, error: error.message };
        return authUser;
    }
};


//login a user
//This function takes in an email and password and signs in the user in Firebase Authentication.
//It returns a promise that resolves with the user object.

export const loginUser = async (email: string, password: string): Promise<AuthUser> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userVerified = user.emailVerified
        if (!userVerified) {
            await logoutUser();
            const authUser = { user: undefined, error: 'User is not verified' };
            return authUser;
        }
        const userData = await getUser(user.uid);
        if(!userData)
        {
            return { user: undefined, error: 'User not found in database' };
        }
        localStorage.setItem('user', JSON.stringify(userData));
        return { user: userData, error: undefined };
    } catch (error:any) {
        const authUser = { user: undefined, error: error.message };
        return authUser;
    }
};

// logout a user
// This function signs out the user from Firebase Authentication.
// It returns a promise that resolves with the user object.

export const logoutUser = async () => {
    try {
        await auth.signOut();
        localStorage.removeItem('user');
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
            return null;
        }
    } catch (error:any) {
        return error.message;
    }
};