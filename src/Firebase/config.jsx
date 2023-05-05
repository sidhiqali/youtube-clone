import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCWrtZa9G8cOVk-5ne7tXUtlde0yGBa_yA',
  authDomain: 'clone-72b5e.firebaseapp.com',
  projectId: 'clone-72b5e',
  storageBucket: 'clone-72b5e.appspot.com',
  messagingSenderId: '123997289047',
  appId: '1:123997289047:web:b00b41f25d01e442330112',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
