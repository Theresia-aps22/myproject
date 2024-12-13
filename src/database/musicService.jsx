import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Collection des utilisateurs
const userCollection = collection(db, "users");

// Créer un utilisateur
export const addUser = async (user) => {
  try {
    const docRef = await addDoc(userCollection, user);
    return docRef.id;  // Retourne l'ID de l'utilisateur créé
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'utilisateur:", error);
  }
};

// Lire les informations d'un utilisateur
export const getUsers = async () => {
  try {
    const data = await getDocs(userCollection);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
  }
};

// Mettre à jour un utilisateur
export const updateUser = async (id, updatedUser) => {
  const userDoc = doc(db, "users", id);
  try {
    await updateDoc(userDoc, updatedUser);
    console.log("Utilisateur mis à jour avec succès");
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
  }
};

// Supprimer un utilisateur
export const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id);
  try {
    await deleteDoc(userDoc);
    console.log("Utilisateur supprimé avec succès");
  } catch (error) {
    console.error("Erreur lors de la suppression de l'utilisateur:", error);
  }
};

// Collection des musiques liées à un utilisateur
const musicCollection = collection(db, "music");

// Ajouter une musique pour un utilisateur
export const addMusicForUser = async (music, userId) => {
  try {
    const musicData = { ...music, userId };  // Ajoute l'ID utilisateur à la musique
    const docRef = await addDoc(musicCollection, musicData);
    return docRef.id;  // Retourne l'ID de la musique ajoutée
  } catch (error) {
    console.error("Erreur lors de l'ajout de la musique pour l'utilisateur:", error);
  }
};

// Lire les musiques d'un utilisateur spécifique
export const getMusicsForUser = async (userId) => {
  try {
    const data = await getDocs(musicCollection);
    return data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .filter((music) => music.userId === userId);  // Filtrer par userId
  } catch (error) {
    console.error("Erreur lors de la récupération des musiques de l'utilisateur:", error);
  }
};

// Mettre à jour une musique
export const updateMusic = async (id, updatedMusic) => {
  const musicDoc = doc(db, "music", id);
  try {
    await updateDoc(musicDoc, updatedMusic);
    console.log("Musique mise à jour avec succès");
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la musique:", error);
  }
};

// Supprimer une musique
export const deleteMusic = async (id) => {
  const musicDoc = doc(db, "music", id);
  try {
    await deleteDoc(musicDoc);
    console.log("Musique supprimée avec succès");
  } catch (error) {
    console.error("Erreur lors de la suppression de la musique:", error);
  }
};
