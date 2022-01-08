import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { readStory } from '../../FirebaseState/Reducer/Actions';
import './styles.css'

import image from '../../Images/space2.png'
import Avatar from '../../Images/avatar.png'

import client from '../../contentfull'

class Blog2 extends Component {
   constructor(props){
      console.log(props.location.state.story);
      super(props);
      this.state =  {
                  title: props.location.state.title.title,
                  category: props.location.state.category.category,
                  subCategory: props.location.state.subCategory.subCategory,
                  description: props.location.state.description.description,
                  authorName: props.location.state.authorName.authorName,
                  authorAvatar: props.location.state.authorAvatar.authorAvatar,
                  createdAt: props.location.state.createdAt.createdAt,
                  cover: props.location.state.cover.cover,
   
              };
    this.id = props.match.params.id;
   };

   componentDidMount() {
      client
        .getEntries({
          content_type: "spaceStories",
        })
        .then((response) => {
          console.log(response);
          this.props({
            blogs: response.items,
          });
        })
        .catch(console.error);
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
          <img className='image-cover' src={this.state.cover.fields.file.url} alt='cover' />
          <p className='blog-desc'>{this.state.description}</p>
        </div>
    </div>
      )
   }
}

// const  mapStateToProps = (state, ownProps) =>({
//    stories: state.story.stories.find(
//       (stories) => stories.id === ownProps.match.params.id,
//    ),
// });

// const mapDispatchToProps={
//   readStory: readStory
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Blog2);

export default Blog2;