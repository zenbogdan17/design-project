import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZwdLLL3duMh9Wmjwc7z6QgqOeItAJ3zU",
  authDomain: "design-project-908db.firebaseapp.com",
  projectId: "design-project-908db",
  storageBucket: "design-project-908db.appspot.com",
  messagingSenderId: "165526453217",
  appId: "1:165526453217:web:4a904b86a680d8f77c70a0",
  measurementId: "G-DKJ6WB6WZF",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
