//where the actual state is going to and where we check our actions
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initalState = {
    items: [],
    loading: false
}

export default function(state = initalState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload, //comes from the action
                loading: false
            }

        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }

        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }

        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}