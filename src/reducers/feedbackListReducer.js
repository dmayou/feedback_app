const feedbackList = (state = [], action) => {
    switch (action.type) {
        case 'STORE_FB_LIST':
            return action.payload;
        default:
            return state;
    }
}

export default feedbackList;