// lib/contentful.js
import { createClient } from 'contentful';

const client = createClient({
  space: '********',
  accessToken: '*********************',
});


export const getPosts = async () => {
  const entries = await client.getEntries({
    content_type: 'blogNext', // sesuaikan dengan Content Type yang Anda buat di Contentful
  });
console.log(entries);

  if (entries.items) {
    return entries.items;
  }

  return [];
};
export async function getAllPostIds() {
  const entries = await client.getEntries({
    content_type: 'blogNext',
  });

  return entries.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));
}

export async function getPostBySlug(slug) {
  const entries = await client.getEntries({
    content_type: 'blogNext',
    'fields.slug': slug,
  });

  if (entries.items.length > 0) {
    const { sys, fields } = entries.items[0];
    return {
      params: { slug: fields.slug },
      sys,
      fields: {
        title: fields.title,
        author: fields.author,
        date: fields.date,
        isi: fields.isi,
        media: fields.media,
      },
    };
  }

  return null;
}


