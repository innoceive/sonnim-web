import React from 'react';

class Dimmer extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            active: false,
        }
    }

    toggleDimmer() {
        this.setState({
            active: !this.state.active
        })
    }

    showDimmer() {
        this.setState({active: true})
    }

    hideDimmer() {
        this.setState({active: false})
    }

    render() {
        return (
            <div id="dimmer" className={this.state.active?"active":""}></div>
        )
    }
}
export default Dimmer;
