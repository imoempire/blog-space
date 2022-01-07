import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import List from "../../Components/Common/Empty/List";
import BlogList from "../../Components/Home/BlogList/BlogList";
import Header from "../../Components/Home/Header/Header";
import SearchBar from "../../Components/Home/Search/SearchBar";
import { readStory } from "../../FirebaseState/Reducer/Actions";


function Home({stories, readStory}){
  console.log(stories);
  const blog = stories;
  console.log(blog);
  const [blogs, setBlogs] = useState(blog);
  const [searchKey, setSearchKey] = useState("");

  const handleSearchBar = (e) => {
   e.preventDefault();
   handleSearchResults();
 };

  const handleSearchResults = () => {
   const allBlogs = blog;
   const filteredBlogs = allBlogs.filter((blog) =>
     blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
   );
   setBlogs(filteredBlogs);
 };

 const handleClearSearch = () => {
   setBlogs(blog);
   setSearchKey('');
 };

  useEffect(() => {
    readStory()
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
            {blogs.length ? <List /> : <BlogList blogs={blog} />}
            {/* { <BlogList blogs={blog} />} */}
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

