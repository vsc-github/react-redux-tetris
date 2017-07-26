import { I , O } from '../constants/tetrominos';
export const INITIALIZE_GRID = "INITIALIZE_GRID";
export const ADD_SHAPE = "ADD_SHAPE";

export function initializeGridAction(dimensions) {
    return {
        type: INITIALIZE_GRID,
        dimensions
    };
}

export function addShapeToGrid() {
    return {
        type: ADD_SHAPE,
        shapeArray: O
    }
}