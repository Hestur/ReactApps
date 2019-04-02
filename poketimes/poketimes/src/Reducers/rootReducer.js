
const initState = {
    posts: [
        {id: '1',title: 'Squirtle egg', body: 'lorem'},
        {id: '2',title: 'Charmander egg', body: 'lorem'},
        {id: '3',title: 'Pokeballs', body: 'lorem'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post =>{
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer