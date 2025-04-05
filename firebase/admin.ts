import { cert } from "firebase-admin/app";
import { getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

const initFirebaseAdmin = () => {
  const apps = getApps();

  if (!apps.length) {
    // Validate environment variables first
    if (!process.env.FIREBASE_PROJECT_ID || 
        !process.env.FIREBASE_CLIENT_EMAIL || 
        !process.env.FIREBASE_PRIVATE_KEY) {
      throw new Error(
        "Missing Firebase configuration. Please check your environment variables."
      );
    }

    try {
      initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        })
      });
    } catch (error) {
      console.error("Firebase Admin initialization error:", error);
      throw error;
    }
  }

  return {
    auth: getAuth(),
    db: getFirestore()
  };
};

export const { auth, db } = initFirebaseAdmin();