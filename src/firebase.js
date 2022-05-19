import firebase  from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAWNsyer_wWDZUx9IEaGFjcZhnQVIVImro",
  authDomain: "my-utube-app-new.firebaseapp.com",
  projectId: "my-utube-app-new",
  storageBucket: "my-utube-app-new.appspot.com",
  messagingSenderId: "70968680553",
  appId: "1:70968680553:web:c8ad61d693561f3c3742f8"
};

 
  firebase.initializeApp(firebaseConfig)

export default firebase.auth()