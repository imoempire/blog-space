import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../Common/Chip/Chip';
import './styles.css';
import image from '../../../../Images/space2.png'
import Avatar from '../../../../Images/avatar.png'
const BlogItem = ({blog}) => {

  const {title, description, subCategory, category, authorName, createdAt, id, cover, authorAvatar, story } = blog.fields
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover' src={cover.fields.file.url} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <img width='50px' src={authorAvatar.fields.file.url} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={{pathname:`/blog/${id}`, state: {
          title: {title},
          description: {description},
          category: {category},
          subCategory: {subCategory},
          authorName: {authorName},
          authorName: {authorName},
          authorAvatar: {authorAvatar},
          createdAt: {createdAt},
          cover: {cover},
          id: {id},
          story: {story},
        }}}>
          <h1>Read</h1>
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
