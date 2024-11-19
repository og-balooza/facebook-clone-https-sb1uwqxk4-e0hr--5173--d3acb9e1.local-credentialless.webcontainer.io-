import { create } from 'zustand';
import { auth, db } from '../lib/firebase';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  User
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  signIn: async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  },
  signUp: async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      name,
      email,
      photoURL: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userCredential.user.uid}`,
      createdAt: new Date().toISOString(),
    });
  },
  signOut: async () => {
    await firebaseSignOut(auth);
    set({ user: null });
  },
  setUser: (user) => set({ user, loading: false }),
}));