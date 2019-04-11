import React, {Component, ReactElement} from 'react';
import {connect} from 'react-redux';
import {State as TempState, getTemp} from 'src/ducks/temp';

type States = {}

type Props = {
    temp: TempState;
    getTemp: typeof getTemp;
}

class App extends Component<Props, States> {
    public componentDidUpdate(): void {
        this.props.getTemp();
    }

    public render(): ReactElement {
        const {temp} = this.props;

        return <div>{temp.title}</div>;
    }
}

export default connect(
    (store: Store): Store => ({
        temp: store.temp,
    }),
    {
        getTemp,
    },
)(App);
