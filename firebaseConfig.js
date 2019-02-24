const firebaseConfig = () => ({
  apiKey: process.env.ASSIS_API_KEY,
  authDomain: process.env.ASSIS_AUTH_DOMAIN,
  databaseURL: process.env.ASSIS_DATABASE_URL,
  projectId: process.env.ASSIS_PROJECT_ID,
  storageBucket: process.env.ASSIS_STORAGE_BUCKET,
  messagingSenderId: process.env.ASSIS_MESSAGING_SENDER_ID
})

export default firebaseConfig