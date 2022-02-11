import { initializeApp } from '@firebase/app';
import { getFirestore } from "@firebase/firestore"
import { getStorage, ref } from "@firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDI1dRfFhkaEj1p5_eAWqG-mYXxXoZ_gZU",
  authDomain: "eventos-2f446.firebaseapp.com",
  projectId: "eventos-2f446",
  storageBucket: "eventos-2f446.appspot.com",
  messagingSenderId: "3036048702",
  appId: "1:3036048702:web:c95fc6115e6eab7eac506f",
  measurementId: "G-FMP9PEB00D"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const storage = getStorage()

export default { storage: storage , db: getFirestore(), storageRef: (name) => ref(storage,'images/'+name)  };