import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadFileToStorage = async (file, folderName = "music") => {
  const storage = getStorage();
  const fileRef = ref(storage, `${folderName}/${file.name}`);
  
  // Téléchargez le fichier
  await uploadBytes(fileRef, file);

  // Obtenez l'URL du fichier téléchargé
  const downloadURL = await getDownloadURL(fileRef);
  return downloadURL; // Retourne l'URL du fichier
};

export default uploadFileToStorage
