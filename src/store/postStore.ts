import { create } from 'zustand';
import { collection, addDoc, query, orderBy, onSnapshot, Timestamp, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

interface Post {
  id: string;
  content: string;
  imageUrl?: string;
  authorId: string;
  authorName: string;
  authorAvatar: string;
  timestamp: Timestamp;
  likes: number;
  comments: number;
  shares: number;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  createPost: (content: string, imageUrl?: string) => Promise<void>;
  setPosts: (posts: Post[]) => void;
  setLoading: (loading: boolean) => void;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  loading: true,
  createPost: async (content, imageUrl) => {
    const user = auth.currentUser;
    if (!user) return;

    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const userData = userDoc.data();

    await addDoc(collection(db, 'posts'), {
      content,
      imageUrl,
      authorId: user.uid,
      authorName: userData?.name || 'Anonymous',
      authorAvatar: userData?.photoURL || '',
      timestamp: Timestamp.now(),
      likes: 0,
      comments: 0,
      shares: 0,
    });
  },
  setPosts: (posts) => set({ posts }),
  setLoading: (loading) => set({ loading }),
}));