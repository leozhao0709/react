import React from 'react';
import { Post } from '../types/Post';
import Link from 'next/link';
import styles from './page.module.scss';

export default async function Home() {
  const posts = (await (
    await fetch('https://jsonplaceholder.typicode.com/posts')
  ).json()) as Post[];

  return (
    <main className={styles.main}>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              {post.id}. {post.body}
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
