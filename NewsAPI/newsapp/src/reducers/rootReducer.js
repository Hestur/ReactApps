const initState = {
    posts: [
        {id: '1', title: 'First title', body: 'Her kommer der noget tekst'},
        {id: '2', title: 'Second title', body: 'Her kommer der noget tekst'},
        {id: '3', title: 'Third title', body: 'Her kommer der noget tekst'}
    ]
}

const rootReducer = (state = initState, action) =>{
    if (action.type ==='DELETE_POST'){
        let newPost = state.posts.filter(post => {
            return action.id !== post.id
        });
        return{
            ...state, 
            posts: newPost
        }
    }
    return state;
}

export default rootReducer;