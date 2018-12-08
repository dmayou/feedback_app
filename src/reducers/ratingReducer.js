const ratingInput = (state=0, action) => {
    switch (action.type) {
        case 'RATING_CHANGE':
            return action.payload;
        default:
            return state;
    }
}

export default ratingInput;