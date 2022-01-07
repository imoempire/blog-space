import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { readStory } from '../../FirebaseState/Reducer/Actions';
import './styles.css'

import image from '../../Images/space2.png'
import Avatar from '../../Images/avatar.png'


class Blog2 extends Component {
   constructor(props){
      console.log(props);
      // console.log(props.stories.image);
      super(props);
      this.state =  {
                  title: props.stories.title,
                  category: props.stories.category,
                  subCategory: props.stories.subCategory,
                  description: props.stories.description,
                  authorName: props.stories.authorName,
                  authorAvatar: props.stories.authorAvatar,
                  createdAt: props.stories.createdAt,
                  cover: props.stories.cover,
                  slug: props.stories.slug,
              };
    this.id = props.match.params.id;
   };

   componentDidMount(){
    //  readStory();
   }

   handleGoBack = () => {
      this.props.history.push("/");
   };

   render() {
      return (
         <div className="Blog-Page">
    <header className="home-header">
      <h2 style={{fontFamily: 'Aquire', color: 'black'}}>Space</h2>
    </header>
    <button className='blog-goBack'>
      <Link className='goback' to='/'>
         <span>Go Back</span>
      </Link>
    </button>
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {this.state.createdAt}</p>
            <h1>{this.state.title}</h1>
            <div className='blog-subCategory'>
            <p className='chip'>{this.state.subCategory}</p>
            </div>
          </header>
          <img className='image-cover' src={image} alt='cover' />
          <p className='blog-desc'>{this.state.description}</p>
        </div>
    </div>
      )
   }
}

const  mapStateToProps = (state, ownProps) =>({
   stories: state.story.stories.find(
      (stories) => stories.id === ownProps.match.params.id,
   ),
});

const mapDispatchToProps={
  readStory: readStory
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog2);