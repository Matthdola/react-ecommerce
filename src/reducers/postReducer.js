import {FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [
        {
            id: 1,
            title: 'First Post',
            body: 'This is a the first post'
        },
        {
            id: 2,
            title: 'Second Post',
            body: 'This is a the second post'
        },
        {
            id: 3,
            title: 'Third Post',
            body: 'This is a the third post'
        },
        {
            id: 4,
            title: 'Fourth Post',
            body: 'This is a the fourth post'
        }
    ],
    item: {
        title: 'Fifth Post',
        body: 'This is a the fifth post'
    }
};

export default function postReducer(state = initialState, action) {
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            } ;

        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };

        default:
            return state;
    }
}