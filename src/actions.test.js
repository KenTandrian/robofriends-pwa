import * as actions from './actions';
import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

describe('setSearchField', () => {
    it('should create an action to searchRobots', () => {
        const text = 'wooo';
        const expectedAction = { 
            type: CHANGE_SEARCHFIELD, 
            payload: text 
        };
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });
});

describe('requestRobots', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    // console.log('action', action);

    const expectedAction = { 
        type: REQUEST_ROBOTS_PENDING
    };
    it('handles requesting robots API', () => {
        expect(action[0]).toEqual(expectedAction);
    });
});