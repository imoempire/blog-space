import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './styles.css';
import { Link } from 'react-router-dom';
import List from '../../Components/Common/Empty/List';
import Chip from '../../Components/Common/Chip/Chip';
import {blogList} from '../../Config/data'
import { readStory } from '../../FirebaseState/Reducer/Actions';
import { connect } from 'react-redux';

const Blog = ({readStory, stories, id}) => {
  console.log(id);
  const blogLists = stories;
  console.log(blogLists);
  console.log(blogList);
  // const { id } = useParams();
  const [blogs, setBlog] = useState(null);
  
  useEffect(() => {
    readStory();
    let blogs = blogList.find((blog) => blog.id === parseInt(id));
    if (blogs) {
      console.log(blogs);
      setBlog(blogList);
    }
  }, []);
  
  return (
    <>
    <header className="home-header">
      <h2 style={{fontFamily: 'Aquire', color: 'black'}}>Space</h2>

    </header>
    <button className='blog-goBack'>
      <Link className='goback' to='/'>
         <span>Go Back</span>
      </Link>
    </button>
      {blogs ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blogs.createdAt}</p>
            <h1>{blogs.title}</h1>
            <div className='blog-subCategory'>
              {blogs.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blogs.cover} alt='cover' />
          <p className='blog-desc'>{blogs.description}</p>
        </div>
      ) : (
        <List />
      )}
    </>
  );
};

const mapStateToProps=(state)=>{
  return {
      stories: state.story.stories,
  }
}
const mapDispatchToProps={
  readStory: readStory
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
