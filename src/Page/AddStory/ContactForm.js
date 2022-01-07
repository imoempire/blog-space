import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readStory, addStory } from '../../FirebaseState/Reducer/Actions'
import './styles.css'

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            stories : [
                {
                    title: '',
                    category: '',
                    subCategory: '',
                    description: '',
                    authorName: '',
                    authorAvatar: '',
                    createdAt: '',
                    cover: '',
                    slug: '',
                }
            ]
        }
        console.log(this.state);
    };
    handleChange=(e)=>{
        this.setState({ [e.target.name] : e.target.value })
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addContact(this.state);
        this.setState({
            title: '',
            category: '',
            subCategory: '',
            description: '',
            authorName: '',
            authorAvatar: '',
            createdAt: '',
            cover: '',
            slug: '',
        })
        console.log(this.state);
    }
    // componentDidMount(){
    //     this.props.getAllContacts()
    // }
    render() {
        return (
            <>
        <form className="Form" onSubmit={this.handleSubmit}>

        

         <div className="form-control">
         <input type="text" name="title" htmlFor="title"
         placeholder="Title" 
         onChange={this.handleChange} 
         value={this.state.title} 
         />
         </div>

         <div className="form-control">
         <input type="text" name="category" htmlFor="category"
         placeholder="category" 
         onChange={this.handleChange} 
         value={this.state.category} 
         />
         </div>

         <div className="form-control">
         <input type="text" name="subCategory" htmlFor="subCategory" 
         placeholder="subCategory" 
         onChange={this.handleChange} value={this.state.subCategory} 
         />
         </div>

         <div className="form-control">
         <input type="text" name="description" htmlFor="description" 
         placeholder="description" 
         onChange={this.handleChange} value={this.state.description} 
         />
         </div>

         <div className="form-control">
         <input type="text" name="authorName" htmlFor="authorName" 
         placeholder="authorName"  
         onChange={this.handleChange} value={this.state.authorName} 
         />
         </div>

         <div className="form-control">
         <input type="Date" name="createdAt" htmlFor="createdAt"
         placeholder="Date" 
         onChange={this.handleChange} 
         value={this.state.createdAt} 
         />
         </div>

         <div className="form-control">
         <input type="file" name="authorAvatar" htmlFor="authorAvatar" 
         placeholder="authorAvatar"  
         onChange={this.handleChange} value={this.state.authorAvatar} 
         />
         </div>
         
         <div className="form-control">
         <input type="file" name="cover" htmlFor="cover" 
         placeholder="Pick Image"  
         onChange={this.handleChange} value={this.state.cover} 
         />
         </div>

         <div className="form-control">
         <input type="number" name="slug" htmlFor="slug" 
         placeholder="slug"  
         onChange={this.handleChange} value={this.state.slug} 
         />
         </div>
         

         <div className="form-control">
            <button type="submit">Add To Stories</button>
         </div>
     </form>  
            </>
        );
    }
}


const mapDispatch={
    addContact: addStory,
    getAllContacts: readStory 
}

export default connect(null, mapDispatch)(ContactForm);
