// pages/index.js
import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import { getPosts } from '../lib/contentful';

export default function Home({ posts }) {
  console.log(posts);
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title="Pemoela">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <div className=" ">
          {posts.map((post) => (
            <div key={post.fields.slug}>
              <Card
                title={post.fields.title}
                date={post.fields.date}
                author={post.fields.author}
                isi={post.fields.isi}
                slug={post.fields.slug}
                imageUrl={post.fields.media 
                  ? `https:${post.fields.media[0].fields.file.url}`
                  : '/programming.jpg'}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const posts = await getPosts();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
