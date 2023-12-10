// Import necessary components and libraries
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Define the Card component
function Card({ title, date, author, isi, slug, imageUrl }) {
  // Check if isi is defined and is a string
  const limitedIsi = typeof isi === 'string' ? isi.split(' ').slice(0, 40).join(' ') : '';

  return (
    <div className="max-w-4xl mx-auto my-4 overflow-hidden">
      <Link href={`/${slug}`}>
        <div className="md:p-4 p-8 flex items-center gap-6  md:gap-12">
          <div>
            <div className='flex items-center gap-4'>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <Image src="/author.jpg" alt='author' width={100} height={100} quality={100} />
                </div>
              </div>
              <p className="text-base font-bold mb-2 mt-2"> {author} </p>
            </div>
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            {/* Display the limited content */}
            <p className='text-justify text-xl hidden md:block'>{limitedIsi}</p>
            <p className='text-gray-400'>{date}</p>
          </div>
          <div className='flex content-end'>
            <div className="avatar">
              <div className="w-36 ">
                <Image src={imageUrl} alt='media' width={200} height={200} quality={100} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Export the Card component
export default Card;
