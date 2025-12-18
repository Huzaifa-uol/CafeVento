import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy
} from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION_NAME = "items";

// Create
export const createItem = async (itemData) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...itemData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating item:", error);
    throw error;
  }
};

// Read All
export const getAllItems = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

// Read Single
export const getItemById = async (id) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      throw new Error("Item not found");
    }
  } catch (error) {
    console.error("Error fetching item:", error);
    throw error;
  }
};

// Update
export const updateItem = async (id, itemData) => {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...itemData,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
};

// Delete
export const deleteItem = async (id) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};
