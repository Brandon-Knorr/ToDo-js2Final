import { db } from "../firebase/firebase.js";
import { collection, getDocs, doc, addDoc } from "firebase/firestore";
import Task from "@/models/Task";

const TASKS_COLLECTION = "Tasks";
export default {
  async getAll(userId) {
    if (!userId) throw new Error("User ID is required to fetch tasks.");

    // Reference the Tasks subcollection for the specific user
    const tasksCollectionRef = collection(db, `users/${userId}/Tasks`);

    const snapshot = await getDocs(tasksCollectionRef);
    return snapshot.docs.map(
      (docSnap) =>
        new Task({
          ...docSnap.data(),
          id: docSnap.id,
        })
    );
  },

  async addTask(userId, task) {
    if (!userId) throw new Error("User ID is required to add a task.");
    if (!(task instanceof Task)) throw new Error("Expected a Task instance");

    const tasksCollectionRef = collection(db, TASKS_COLLECTION);
    const docRef = await addDoc(tasksCollectionRef, {
      ...task.toFirestore(),
      userId, // Add userId to the task document
    });
    return docRef.id;
  },

  async updateTask(userId, task) {
    if (!userId) throw new Error("User ID is required to update a task.");
    if (!task.id) throw new Error("Task must have an ID to update.");

    const taskDocRef = doc(db, `users/${userId}/Tasks`, task.id);
    await updateDoc(taskDocRef, task.toFirestore());
  },

  async deleteTask(userId, taskId) {
    if (!userId) throw new Error("User ID is required to delete a task.");
    if (!taskId) throw new Error("Task ID is required to delete a task.");

    const taskDocRef = doc(db, `users/${userId}/Tasks`, taskId);
    await deleteDoc(taskDocRef);
  },
};
