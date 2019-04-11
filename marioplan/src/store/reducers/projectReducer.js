const initState = {
  projects: [
    { id: "1", title: "Help me find", content: "lol" },
    { id: "2", title: "Help me die", content: "juju" },
    { id: "3", title: "Help me end", content: "mofos" }
  ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
        console.log('created', action.project)
        return state;
        case 'CREATE_PROJECT_ERROR':
        console.log('create project error', action.error);
        return state;
        default:
        return state;
        }
    }

export default projectReducer;
