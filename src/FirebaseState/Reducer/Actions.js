import client from '../../contentfull'

const ADD_STORY = "ADD_STORY";
 const REMOVE_STORY = "REMOVE_STORY";
 const READ_STORY = "READ_STORY";

export const addStory = (story)=>{
   story.id = Math.random().toString();
   return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('stories')
        .add(story).then((docs)=>{
            console.log(docs)
        });
    }
   // return {
   //    type: ADD_STORY,
   //    payload: story
   // }
}

export const removeStory = (storyId)=>{

   return(dispatch, state, {getFirestore})=>{
      getFirestore().collection('stories')
      .doc(storyId).delete().then(()=>{})
  }
   // return{
   //    type: REMOVE_STORY,
   //    payload: storyId
   // }
}

export const readStory = ()=>{
   return(dispatch, state, {getFirestore})=>{
      getFirestore()
      .collection('stories')
      .onSnapshot(
          (snapshot)=>{
              let stories = [];
              snapshot.forEach((doc)=>{
                 stories.push({...doc.data(), id:doc.id})
              });
              dispatch({
                  type: READ_STORY,
                  payload: stories
              })
          })
  }
}

export const getData = async()=>{
    try{
        let response = await client.getEntries(
            { content_type: "spaceStories" }
        );
        let stories = response
        console.log(stories);
    }catch(error){
        console.log(error);
    }
}