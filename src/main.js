import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import i18n from "./i18n";
// import { getDatabase } from "firebase/database";
// import { getDatabase, ref, onValue} from "firebase/database";
// import { getDatabase, ref, child, get } from "firebase/database";

createApp(App).use(i18n).use(store).use(router).mount("#app");

const firebaseConfig = {
  apiKey: "AIzaSyAFrDGrcdW7KffWpmntcYFAc-pjnbgz1eA",
  authDomain: "deneme9vue.firebaseapp.com",
  databaseURL:
    "https://deneme9vue-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "deneme9vue",
  storageBucket: "deneme9vue.appspot.com",
  messagingSenderId: "804601684856",
  appId: "1:804601684856:web:b7cb5a56fbfc02f4161e8d",
  measurementId: "G-FJZDTH3XGQ",
};

initializeApp(firebaseConfig);

// const database = getDatabase(app);

// const dbRef = ref(getDatabase());
// get(child(dbRef, `books/`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });

// export default {
//     sharedData: {
//       // Will sync the 'my-message' shared data on the server
//       booksList:
//     }
//   }
