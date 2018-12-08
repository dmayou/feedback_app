const feedbackSubmission = (state = {}, action) => {
    switch (action.type) {
        case 'NEW_INPUT':
            console.log('payload:', action.payload);
            return ({...state, [action.payload.key]: action.payload.value});
        default:
            return state;
    }
}

export default feedbackSubmission;