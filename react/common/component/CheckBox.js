import react from 'react';

class CheckBox extends React.Component {
    constructor() {
        super();
        this.state={
            optionList: []
        }
    }

    componentDidMount() {
        this.setState({optionList: this.props.options})
    }

    toggle(index) {
        let optionList = this.state.optionList;
        optionList[index].selected = !optionList[index].selected;
        this.setState({
            optionList: optionList
        })
    }

    render() {
        var box = this.state.optionList.map((option, index) => {
            return <div key={index} className={option.selected?'active':''} onClick={this.toggle.bind(this, index)}>
                {option.name}
            </div>
        });

        return (
            <div className='check-box'>
                <input name='' type='hidden'/>
                { box }
            </div>

        )
    }
}

export default CheckBox;
