import image from '../../Images/css.png'
import imageAvatar from '../../Images/avatar.png'

const ADD_STORY = "ADD_STORY";
 const REMOVE_STORY = "REMOVE_STORY";
 const READ_STORY = "READ_STORY";



const initialState = {
   stories : [
      {
         id: 1,
         title: '7 CSS tools you should be using ',
         category: 'development',
         subCategory: ['frontend', 'ui/ux', 'design'],
         description:
           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
         authorName: 'John Doe',
         authorAvatar: imageAvatar,
         createdAt: 'June 03, 2021',
         cover: image,
       },
       {
         id: 2,
         title: 'Milan Places That Highlight The City',
         category: 'travel',
         subCategory: ['vacation', 'holidays', 'sight seeing'],
         description:
           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
         authorName: 'John Doe',
         authorAvatar: imageAvatar,
         createdAt: 'June 03, 2021',
         cover: image,
       },
       {
         id: 3,
         title: 'Online Shopping – An Alternative to Shopping in the Mall',
         category: 'shopping',
         subCategory: ['e-commerce store', 'clothing', 'shopping store'],
         description:
           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
         authorName: 'John Doe',
         authorAvatar: imageAvatar,
         createdAt: 'June 03, 2021',
         cover: image,
       },
   ],
};

const Reducer = (state=initialState, action) =>{
   switch(action.type){
      case ADD_STORY:
         return{...state.stories, stories: [...state.stories, action.payload]};

      case REMOVE_STORY:
         const newStory = state.stories.filter((story) => {
            return story.id !== action.payload;
         });
         return {...state, stories: newStory }
         
         case READ_STORY:
            return{...state, stories: action.payload};
         
         default:
            return state
      };
}

export default Reducer;