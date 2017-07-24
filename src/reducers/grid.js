import {
    INITIALIZE_GRID
} from "../actions/grid";

export function grid(state = {
    current : [],
    dimensions: {}
}, action) {
    switch (action.type) {
        case INITIALIZE_GRID:
            let filler = Array(8).fill('#ffffff');
            let grid = Array(action.dimensions.stackCount).fill(filler);

            return Object.assign({}, state, {
                current: grid,
                dimensions: action.dimensions
            });
        default:
            return state;
    }
}