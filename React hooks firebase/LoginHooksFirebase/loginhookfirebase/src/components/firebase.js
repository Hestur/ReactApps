 import app from 'firebase/app'
 import 'firebase/auth'
 import 'firebase/firebase-firestore';
 
 
 // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyBSQuPt4c6PuIBT3cr4JbaeBGs3K4j1x-Y",
    authDomain: "reacthooklogin.firebaseapp.com",
    databaseURL: "https://reacthooklogin.firebaseio.com",
    projectId: "reacthooklogin",
    storageBucket: "",
    messagingSenderId: "464812607111",
    appId: "1:464812607111:web:409a015b4feae617269a22"
  };

  
  class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
    }
    

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	addQuote(quote) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.db.doc(`users_/${this.auth.currentUser.uid}`).set({
			quote
		})
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	async getCurrentUserQuote() {
		const quote = await this.db.doc(`users_/${this.auth.currentUser.uid}`).get()
		return quote.get('quote')
	}
}


export default new Firebase()