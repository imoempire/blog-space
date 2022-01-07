import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../Common/Chip/Chip';
import './styles.css';
import image from '../../../../Images/space2.png'
import Avatar from '../../../../Images/avatar.png'
const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  console.log({title});
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={image} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img width='50px' src={Avatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          <h1>Read</h1>
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
