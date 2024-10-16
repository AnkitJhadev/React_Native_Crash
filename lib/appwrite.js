import { Platform } from "react-native";
import { Client } from 'react-native-appwrite';


export const config = {

    endpoint:"https://cloud.appwrite.io/v1",
    Platform:'com.jsm.aora',
    projectId:'670f35ea00038f33e431',
    databaseId:'670f3815000d1fee1cd6',
    userCollectionId:'670f38650027023fe862',
    videoCollectionId:'670f38c4003aae4008d5',
    storageId:'670f3e63003dacd76f72'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.Platform) // Your application ID or bundle ID.
;