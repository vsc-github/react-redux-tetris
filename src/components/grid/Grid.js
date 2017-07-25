import React from "react";
import PropTypes from "prop-types";

import "./grid.css";

const renderRow = (arr,size) => {
    return arr.map((ele, key) => <div className="block" key={key}
        style={{
            height: size+'vw',
            width: size+'vw',
            backgroundColor: ele === ' ' ? '#ccc' : ele
        }}
    >

    </div>)
}

const Grid = ( { currentGrid, dimensions  }) => {
    return <div className="grid-container" style={{
        height: dimensions.height+'vw',
        width: dimensions.width+'vw',
    }}>
        {
            currentGrid.map((row, key) => <div className="row" key={key}>
                {
                    renderRow(row,dimensions.blockSize)
                }
            </div>)
        }
    </div>
};

Grid.propTypes = {
    user: PropTypes.object
};

export default Grid;