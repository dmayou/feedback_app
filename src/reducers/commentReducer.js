const commentInput = (state='', action) => {
    switch (action.type) {
        case 'COMMENT_CHANGE':
            return action.payload;
        default:
            return state;
    }
}

export default commentInput;