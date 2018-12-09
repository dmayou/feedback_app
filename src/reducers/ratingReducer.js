// Holds value of radio button input before
const ratingInput = (state=0, action) => {
    switch (action.type) {
        case 'RATING_CHANGE':
            return action.payload;
        case 'RATING_RESET':
            return 0;
        default:
            return state;
    }
}

export default ratingInput;