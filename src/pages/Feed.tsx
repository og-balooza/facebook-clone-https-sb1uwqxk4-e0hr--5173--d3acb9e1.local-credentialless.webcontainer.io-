import React, { useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { usePostStore } from '../store/postStore';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';

export default function Feed() {
  const { posts, setPosts, setLoading } = usePostStore();

  useEffect(() => {
    const q = query(
      collection(db, 'posts'),
      orderBy('timestamp', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setPosts, setLoading]);

  return (
    <div>
      <CreatePost />
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}