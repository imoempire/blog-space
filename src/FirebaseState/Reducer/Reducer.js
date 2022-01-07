import image from '../../Images/css.png'
import imageAvatar from '../../Images/avatar.png'

const ADD_STORY = "ADD_STORY";
 const REMOVE_STORY = "REMOVE_STORY";
 const READ_STORY = "READ_STORY";



const initialState = {
   stories : [
     
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