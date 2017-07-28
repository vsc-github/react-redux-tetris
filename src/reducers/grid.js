import {
    INITIALIZE_GRID,
    ADD_SHAPE,
    TICK_TOCK
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
            let oldGrid = cloneArray(state.current).slice(2);
            let newGrid = action.shapeArray.concat(oldGrid);
            return Object.assign({},state,{
                current: newGrid
            });

        case TICK_TOCK:
            let stateCopy = cloneArray(state.current);
            const width = stateCopy[0].length , height = stateCopy.length;
            let rightWays, up, dropper;

            for(rightWays = 0 ; rightWays < width ; rightWays++){
                for(up = height-1 ; up >= 0 ; up--){
                    if(stateCopy[up][rightWays].includes('empty') || stateCopy[up][rightWays].includes('float')){
                        break;
                    }
                }
                let previous = 'empty';
                for( dropper = 0 ; dropper <= up ; dropper++){
                    // add logic here to check if next block is solid
                    // or if its the end of the board!
                    let temp = stateCopy[dropper][rightWays];
                    stateCopy[dropper][rightWays] = previous;
                    previous = temp;
                }
            }

            return Object.assign({},state,{
                current: stateCopy
            });

        default:
            return state;
    }
}

function cloneArray(arr) {
    // Deep copy arrays. Going one level deep seems to be enough.
    var clone = [];
    for (let i=0; i<arr.length; i++) {
        clone.push( arr[i].slice(0) )
    }
    return clone;
}