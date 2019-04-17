import React, {Component, ReactElement} from 'react';
import {connect} from 'react-redux';
import {State as TempState, getTemp, setTemp} from 'src/ducks/temp';

type States = {}

type Props = {
    temp: TempState;
    getTemp: typeof getTemp;
    setTemp: typeof setTemp;
}

class App extends Component<Props, States> {
    componentDidMount(): void {
        this.props.getTemp();
    }

    handleClick = (/*e: React.MouseEvent*/) => {
        this.props.setTemp('Changed!');
    };

    render(): ReactElement {
        const {temp} = this.props;

        return <>
            <h1>{temp.title}</h1>
            <button onClick={this.handleClick}>change title</button>
        </>;
    }
}

export default connect(
    (store: Store): Store => ({
        temp: store.temp,
    }),
    {
        getTemp,
        setTemp
    },
)(App);
