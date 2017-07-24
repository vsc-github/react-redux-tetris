export const INITIALIZE_GRID = "INITIALIZE_GRID";

export function initializeGridAction(dimensions) {
    return {
        type: INITIALIZE_GRID,
        dimensions
    };
}