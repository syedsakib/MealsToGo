import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import * as firebase from "firebase";

//FONTS:
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

//CONTEXT:
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

//NAVIGATION:
import { Navigation } from "./src/infrastructure/navigation";

//FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBOMNfcys7j13ZzqXZ_6eaxCDxhK9RUoks",
  authDomain: "mealstogo-e5a0a.firebaseapp.com",
  projectId: "mealstogo-e5a0a",
  storageBucket: "mealstogo-e5a0a.appspot.com",
  messagingSenderId: "487476704405",
  appId: "1:487476704405:web:dce94c1ecdb600e8a2179c",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  //fonts
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
