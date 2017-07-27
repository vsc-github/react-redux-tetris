import {
    INITIALIZE_GRID,
    ADD_SHAPE
} from "../actions/grid";

export function grid(state = {
    current : [],
    dimensions: {}
}, action) {
    switch (action.type) {
        case INITIALIZE_GRID:
            let filler = Array(8).fill('empty');
            let grid = Array(action.dimensions.stackCount).fill(filler);

            return Object.assign({}, state, {
                current: grid,
                dimensions: action.dimensions
            });

        case ADD_SHAPE:
            let oldGrid = state.current.slice(4);
            let newGrid = action.shapeArray.concat(oldGrid);
            return Object.assign({},state,{
                current: newGrid
            });

        default:
            return state;
    }
}