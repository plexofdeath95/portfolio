import {db} from '@/firebase/firebase';
import { addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, collection } from 'firebase/firestore';
import type { ProjectSchema } from './ProjectSchemas';

export const createProject = async (project: ProjectSchema) => {
    try {
      const docRef = await addDoc(collection(db, 'projects'), project);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  export const getProject = async (id: string): Promise<ProjectSchema | null> => {
    try {
      const docRef = doc(db, 'projects', id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        // Document data may be retrieved with .data() or .get('<field>')
        return docSnap.data() as ProjectSchema;
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
        return null;
      }
    } catch (error) {
      console.error('Error getting document:', error);
      throw error; // or return null, based on your error handling strategy
    }
  };

export const readProjects = async (): Promise<ProjectSchema[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projects: ProjectSchema[] = [];
      querySnapshot.forEach((doc) => {
        projects.push(doc.data() as ProjectSchema);
      });
      return projects;
    } catch (error) {
      console.error('Error reading documents: ', error);
      throw error;
    }
};

export const updateProject = async (id: string, updatedProject: Partial<ProjectSchema>) => {
    try {
      const projectRef = doc(db, 'projects', id);
      await updateDoc(projectRef, updatedProject);
      console.log('Document updated with ID: ', id);
    } catch (error) {
      console.error('Error updating document: ', error);
    }
};

export const deleteProject = async (id: string) => {
    try {
      const projectRef = doc(db, 'projects', id);
      await deleteDoc(projectRef);
      console.log('Document deleted with ID: ', id);
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };