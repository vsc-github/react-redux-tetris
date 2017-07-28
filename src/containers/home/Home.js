import React, {Component} from "react";
import {connect} from "react-redux";
import Grid from '../../components/grid/Grid';

import {initializeGridAction, addShapeToGrid, tickAction} from "../../actions/grid";

import "./home.css";

class Home extends Component {

    constructor() {
        super();

        this.addShape = this.addShape.bind(this);
        this.ticker = this.ticker.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;

        const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        const ratio = h / w;
        const width = 100 * ( ratio - ratio / 4);
        const blockWidth = width / 8;
        const blockWidthPx = (w / 100) * blockWidth;
        let height = 0, i;
        for (i = 0; height < h; i++) {
            height = blockWidthPx * i;
        }

        dispatch(initializeGridAction({
            stackCount: i - 2,
            blockSize: blockWidth,
            height: blockWidth * (i - 2),
            width: blockWidth * 8
        }));

       /* const timer = setInterval(this.ticker, 1000);
        this.setState({
            timer
        });*/
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    addShape() {
        const {dispatch} = this.props;
        dispatch(addShapeToGrid());
    }

    ticker() {
        const {dispatch} = this.props;
        dispatch(tickAction());
    }

    render() {
        const {current, dimensions} = this.props.grid;
        return (
            <div className="home">
                <Grid currentGrid={current} dimensions={dimensions}/>
                <button onClick={this.addShape}>Add shape!</button>
                <button onClick={this.ticker}>Tick!</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {users, grid} = state;
    return {
        users,
        grid
    };
};

export default connect(mapStateToProps)(Home);