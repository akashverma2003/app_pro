{/*EXPO_PUBLIC_APPWRITE_PROJECT_ID=68ce8b12003759c0a2e4
EXPO_PUBLIC_APPWRITE_PROJECT_NAME="Shelfie"
EXPO_PUBLIC_APPWRITE_ENDPOINT=https://nyc.cloud.appwrite.io/v1*/}

import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
    .stProject("68ce8b12003759c0a2e4")
    .setPlatform('dev.akashv.shelfie');

export const account = new Account(client);
export const avatars = new Avatars(client);