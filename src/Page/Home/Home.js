import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import List from "../../Components/Common/Empty/List";
import BlogList from "../../Components/Home/BlogList/BlogList";
import Header from "../../Components/Home/Header/Header";
import SearchBar from "../../Components/Home/Search/SearchBar";
import {  readStory } from "../../FirebaseState/Reducer/Actions";
import client from '../../contentfull'

function Home(){
  // const blog = stories;
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState("");


  const getData = async()=>{
    client.getEntries({
      content_type: 'spaceStories',
    })
    .then((response)=>{
      setBlogs(response.items)
    })
    .catch(console.error)
  }

  const handleSearchBar = (e) => {
   e.preventDefault();
   handleSearchResults();
 };

  const handleSearchResults = () => {
   const allBlogs = blogs;
   const filteredBlogs = allBlogs.filter((blog) =>
     blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
   );
   setBlogs(filteredBlogs);
 };

 const handleClearSearch = () => {
   setBlogs(blogs);
   setSearchKey('');
 };



  useEffect(() => {
    getData();
  }, [])

  return( 
  <div>
     <Header/>
     

      <SearchBar 
         value={searchKey}
         clearSearch={handleClearSearch}
         formSubmit={handleSearchBar}
         handleSearchKey={(e)=>setSearchKey(e.target.value)} 
      />

            {/* Blog List & Empty View */}
            {blogs.length===0 ? <List /> : <BlogList blogs={blogs} />}
            {/* { <BlogList blogs={blogs} />} */}
  </div>);
};

const mapStateToProps=(state)=>{
  return {
      stories: state.story.stories,
  }
}
const mapDispatchToProps={
  readStory: readStory
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

