// pages/[slug].jsx
import React from 'react';
import Layout from '@/components/Layout';
import { getPostBySlug, getAllPostIds } from '../lib/contentful';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export default function Post({ post }) {
  console.log(post);
  if (!post) {
    return <div>Loading...</div>;
  }

  const { title, date, author, isi, media } = post.fields;
  // // Assuming the image URL is available in media[0].fields.file.url
  // const imageUrl = media[0].fields.file.url;
  const  imageUrl=post.fields.media 
    ? `https:${post.fields.media[0].fields.file.url}`
    : '/programming.jpg'


  return (
    <Layout title={title}>
      <div className="container mx-auto p-4 md:px-36 md:my-12">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className='my-4'>
      <Image src={imageUrl} alt="Post Image" width={1200} height={400} />
      </div>
        <p className="text-base mb-2">{author} - {date}</p>
        <ReactMarkdown
          className='text-justify'
          components={{
            h1: ({ node, ...props }) => <h1 className="text-4xl font-bold my-2" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-3xl font-bold my-2" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-2xl font-bold my-1" {...props} />,
            p: ({ node, ...props }) => <p className="mb-4 text-xl" {...props} />,
            code: ({ node, ...props }) =>  <code className='text-xl  bg-slate-900 text-white p-1' {...props} />
            ,
          }}
        >
          {isi}
        </ReactMarkdown>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    const post = await getPostBySlug(slug);

    if (!post || !post.fields || !post.fields.media || !post.fields.media[0]?.fields?.file?.url) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      notFound: true,
    };
  }
}

