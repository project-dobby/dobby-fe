import React, {Component} from 'react';
import {connect} from "react-redux";
import {State as TempState, getTemp} from "src/ducks/temp";

type States = {};

type Props = {
    temp: TempState,
    getTemp: typeof getTemp;
};

class Temp extends Component<Props, States> {

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<States>, snapshot?: any): void {
        this.props.getTemp();
    }

    render() {
        return <div>{this.props.temp.title}</div>;
    }

}

export default connect(
    (store: Store) => ({
        temp: store.temp
    }),
    {
        getTemp
    }
)(Temp);