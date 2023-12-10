import Card from '@/components/Card';
import Layout from '@/components/Layout';
import { getPosts } from '@/lib/contentful';

import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const postsPerPage = 5;

function Blogs({ posts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0); // Changed from 1 to 0
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.fields.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
    setCurrentPage(0); // Reset to the first page when the search term changes
  }, [searchTerm, posts]);

  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * postsPerPage;
  const currentPosts = filteredPosts.slice(offset, offset + postsPerPage);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
    <div className="mx-auto my-16 overflow-hidden">
      <div className='flex justify-center'>
        <input
          className='input w-1/2 input-primary input-bordered'
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {currentPosts.map((post) => (
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
    <div className="mt-4 mb-6 flex flex-row justify-center">
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination flex space-x-2'}
      activeClassName={'btn btn btn-info'}
      pageClassName={'btn btn-primary'}
      previousClassName={'btn btn-primary'}
      nextClassName={'btn btn-primary'}
    />
  </div>
  </Layout>
  );
}

export default Blogs;

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
