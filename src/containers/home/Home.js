import React, {Component} from "react";
import {connect} from "react-redux";
import Grid from '../../components/grid/Grid';

import { initializeGridAction } from "../../actions/grid";

import "./home.css";

class Home extends Component {

    constructor() {
        super();
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(initializeGridAction());
    }

    render() {
        return (
            <div className="home">
                <Grid currentGrid={this.props.grid.current}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { users, grid } = state;
    return {
        users,
        grid
    };
};

export default connect(mapStateToProps)(Home);