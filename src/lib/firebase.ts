import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBkkFF0XhNZeWuDmOfEhsgdfX1VBG7WTas",
  authDomain: "facebook-clone-stackblitz.firebaseapp.com",
  projectId: "facebook-clone-stackblitz",
  storageBucket: "facebook-clone-stackblitz.appspot.com",
  messagingSenderId: "581326886241",
  appId: "1:581326886241:web:c50ae8c86c4b87b67ee334"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);