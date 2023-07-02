const EventsReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_EVENT_START":
            return {
                events : null,
                isFetching : false,
                error : false
            };

        case "CREATE_EVENT_SUCCESS":
            return {
                events : null,
                isFetching : false,
                error : false
            };

        case "CREATE_EVENT_FAILURE":
            return {
                events : null,
                isFetching : false,
                error : false
            };
    
        default:
            return state;
    }
}

export default EventsReducer;