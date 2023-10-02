import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import type { BlogsSchema } from "./BlogsSchema";
import { db } from "@/firebase/firebase";


export const createBlog = async (blog: BlogsSchema) => {
    try {
      const docRef = await addDoc(collection(db, 'blogs'), blog);
      const key = docRef.id;
      await updateDoc(doc(db, 'blogs', key), { id: key });
      console.log('Blog Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding blog document: ', error);
    }
};


export const readBlogs = async (): Promise<BlogsSchema[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const blogs: BlogsSchema[] = [];
      querySnapshot.forEach((doc) => {
        blogs.push(doc.data() as BlogsSchema);
      });
      return blogs;
    } catch (error) {
      console.error('Error reading blogs: ', error);
      throw error;
    }
};

export const readBlog = async (id: string): Promise<BlogsSchema> => {
  try {
      const blogRef = doc(db, 'blogs', id); // Here db should be your Firestore instance
      const blogSnap = await getDoc(blogRef);

      if (blogSnap.exists()) {
          return blogSnap.data() as BlogsSchema;
      } else {
          throw new Error(`No blog found with id: ${id}`);
      }
  } catch (error) {
      console.error(`Error reading blog with id ${id}: `, error);
      throw error; // rethrowing the error allows you to handle it in your component where this function is called
  }
};

export const updateBlog = async (id: string, updatedBlog: Partial<BlogsSchema>) => {
    try {
      const blogRef = doc(db, 'blogs', id);
      await updateDoc(blogRef, updatedBlog);
      console.log('Blog Document updated with ID: ', id);
    } catch (error) {
      console.error('Error updating blog document: ', error);
    }
};


export const deleteBlog = async (id: string) => {
    try {
      const blogRef = doc(db, 'blogs', id);
      await deleteDoc(blogRef);
      console.log('Blog Document deleted with ID: ', id);
    } catch (error) {
      console.error('Error deleting blog document: ', error);
    }
};
