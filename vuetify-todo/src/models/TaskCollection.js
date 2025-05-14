import { db } from '../firebase/firebase.js'; // make sure this exports your Firestore instance
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';

import Task from './Task';

const TASKS_COLLECTION = 'Tasks';

export default {
  async getAll() {
    const snapshot = await getDocs(collection(db, TASKS_COLLECTION));
    return snapshot.docs.map(docSnap => new Task({
      ...docSnap.data(),
      id: docSnap.id
    }));
  },

  async addTask(task) {
    if (!(task instanceof Task)) throw new Error('Expected a Task instance');
    const docRef = await addDoc(collection(db, TASKS_COLLECTION), task.toFirestore());
    return docRef.id;
  },

  async updateTask(task) {
    if (!task.id) throw new Error('Task must have an id to update');
    await updateDoc(doc(db, TASKS_COLLECTION, task.id), task.toFirestore());
  },

  async deleteTask(taskId) {
    await deleteDoc(doc(db, TASKS_COLLECTION, taskId));
  }
};
