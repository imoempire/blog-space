import React from 'react';
import BlogItem from './Blog/BlogItem';
import './styles.css'

const BlogList = ({blogs}) => {
  console.log(blogs);
   return (
      <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
   );
}

export default BlogList;
