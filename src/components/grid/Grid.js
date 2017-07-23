import React from "react";
import PropTypes from "prop-types";

import "./grid.css";

const Grid = ( {currentGrid} ) => {
  return <div className="grid-container">
      {
        JSON.stringify(currentGrid)
      }
  </div>
};

Grid.propTypes = {
  user: PropTypes.object
};

export default Grid;