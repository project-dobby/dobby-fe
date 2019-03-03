import React, { Component } from 'react';
import { connect } from 'react-redux';
import { State as TempState, getTemp } from 'src/ducks/temp';

type States = {};

type Props = {
    temp: TempState;
    getTemp: typeof getTemp;
};

class Temp extends Component<Props, States> {
    public componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<States>): void {
        this.props.getTemp();
    }

    public render() {
        const { temp } = this.props;

        return <div>{temp.title}</div>;
    }
}

export default connect(
    (store: Store) => ({
        temp: store.temp,
    }),
    {
        getTemp,
    },
)(Temp);
