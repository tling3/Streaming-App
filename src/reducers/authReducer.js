/* eslint-disable */
import * as TYPES from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TYPES.SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };
        case TYPES.SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
};