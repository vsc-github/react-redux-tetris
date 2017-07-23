import {
    INITIALIZE_GRID
} from "../actions/grid";

export function grid(state = {
    current : []
}, action) {
    switch (action.type) {
        case INITIALIZE_GRID:
            let filler = Array(10).fill('#ffffff');
            let grid = Array(10).fill(filler);

            return Object.assign({}, state, {
                current: grid
            });
        default:
            return state;
    }
}