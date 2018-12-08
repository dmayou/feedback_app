const feedbackSubmission = (state = {}, action) => {
    switch (action.type) {
        case 'NEW_INPUT':
            console.log('payload:', action.payload);
            return ({...state, [action.payload.key]: action.payload.value});
        case 'RESET_INPUT':
            return {};
        default:
            return state;
    }
}

export default feedbackSubmission;