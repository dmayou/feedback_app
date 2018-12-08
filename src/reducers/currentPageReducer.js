const currentPage = (state = 1, action) => {
    const MAX_PAGES = 4; // app has 4 revolving pages
    switch (action.type) {
        case 'NEXT_PAGE':
            return state < MAX_PAGES ? state + 1 : 1;
        default:
            return state;
    }
}

export default currentPage;