import { db } from '@/firebase/firebase';
import {
  setDoc,
  doc,
  getDoc,
  collection,
  updateDoc,
  deleteDoc,
  getDocs,
} from 'firebase/firestore';
import type { UserSchema, UserType } from './UserDataSchema';

export const createUser = async (id: string, user: UserSchema) => {
  try {
    user.userUid = id;
    const userRef = doc(db, 'users', id);
    await setDoc(userRef, user);
    console.log('User created with ID: ', id);
  } catch (error) {
    console.error('Error adding user: ', error);
  }
};

export const getUser = async (id: string): Promise<UserSchema | null> => {
  try {
    const userRef = doc(db, 'users', id);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data() as UserSchema;
    } else {
      console.log('No such user!');
      return null;
    }
  } catch (error) {
    console.error('Error getting user:', error);
    throw error;
  }
};

export const readUsers = async (): Promise<UserSchema[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const users: UserSchema[] = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data() as UserSchema);
    });
    return users;
  } catch (error) {
    console.error('Error reading users: ', error);
    throw error;
  }
};

export const updateUser = async (id: string, updatedUser: Partial<UserSchema>) => {
  try {
    const userRef = doc(db, 'users', id);
    await updateDoc(userRef, updatedUser);
    console.log('User updated with ID: ', id);
  } catch (error) {
    console.error('Error updating user: ', error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const userRef = doc(db, 'users', id);
    await deleteDoc(userRef);
    console.log('User deleted with ID: ', id);
  } catch (error) {
    console.error('Error deleting user: ', error);
  }
};
