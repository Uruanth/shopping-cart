import {
    RECEIVE_PHONES
} from '../actions/phones'


export const MOVE_INCART = 'MOVE_INCART'


export default function phones(state = {}, action) {
    switch (action.type) {
        case RECEIVE_PHONES:
            return {
                ...state,
                ...action.phones
            }

        case MOVE_INCART:
            const id = action.id;
            return {
                ...state,
                [id]: {
                    ...state[action.id],
                    inCart: 'true'
                }
            }

        default:
            return state
    }
}