import React, { Component } from "react";
import List from "../../Components/Common/Empty/List";
import BlogList from "../../Components/Home/BlogList/BlogList";
import Header from "../../Components/Home/Header/Header";
import SearchBar from "../../Components/Home/Search/SearchBar";
import client from '../../contentfull'

class Home2 extends Component {
  state = {
    blogs: [],
  };

  componentDidMount() {
    client
      .getEntries({
        content_type: "spaceStories",
      })
      .then((response) => {
        console.log(response);
        this.setState({
          blogs: response.items,
        });
      })
      .catch(console.error);
  }

//   handleSearchBar = (e) => {
//     e.preventDefault();
//     handleSearchResults();
//   };

//   handleSearchResults = () => {
//     const allBlogs = blogs;
//     const filteredBlogs = allBlogs.filter((blog) =>
//       blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
//     );
//     setBlogs(filteredBlogs);
//   };

//   handleClearSearch = () => {
//     setBlogs(blogs);
//     setSearchKey("");
//   };

  // handleClearSearch = () => {
  //    setBlogs(blogs);
  //    setSearchKey('');
  //  };

  render() {
    return (
      <div>
     <Header/>
     <h2 style={{fontFamily: 'Aquire', color: 'black', fontSize: '20px', margin: '2rem'}}>Featured Stories</h2>

         {/* {this.state.blogs.length === 0 ? <List /> : <BlogList blogs={this.state.blogs} />} */}
              { <BlogList blogs={this.state.blogs} />} 

      </div>
    );
  }
}
export default Home2;
