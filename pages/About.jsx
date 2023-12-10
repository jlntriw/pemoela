// pages/about.js
import React from 'react';
import Layout from '@/components/Layout';

function About() {
  return (
    <Layout title="About Us">
      <div className="container mx-auto px-4 py-8 min-h-[100vh]">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl mb-4">
          Welcome to our website! We are a passionate team dedicated to providing valuable content and insights.
        </p>
        <p className="text-xl mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        {/* Add more content as needed */}
      </div>
    </Layout>
  );
}

export default About;
