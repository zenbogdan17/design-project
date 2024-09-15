import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "./firebaseConfig";

export const fetchImages = async (sliderHolder) => {
  try {
    const folderRef = ref(storage, sliderHolder);
    const result = await listAll(folderRef);

    const imageArray = await Promise.all(
      result.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return {
          name: itemRef.name.split(".")[0],
          url: url,
        };
      })
    );

    return imageArray;
  } catch (error) {
    console.error("Помилка при отриманні файлів: ", error);
  }
};
