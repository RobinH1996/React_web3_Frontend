import React from 'react';

class ErrorState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: 'none',
        }
    }

    componentWillReceiveProps = (props) => {
        this.setState({show: props.show});
    }

    render() {
        return (
            <div className="row" style={{ display: this.state.show, color: this.props.color, textAlign:"left"}}>
                {this.props.name}
            </div>                     
        );
    }
}

export default ErrorState;
