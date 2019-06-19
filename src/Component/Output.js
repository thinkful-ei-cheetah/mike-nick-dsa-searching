import React from 'react';

export default class Output extends React.Component {
    render() {
        const info = this.props.info;
        return <p>{info}</p>;
    }
}