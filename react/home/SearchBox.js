import react from 'react';
import Tag from './Tag';

class SearchBox extends React.Component {
    constructor(){
        super();
        this.state={
            tagList: []
        }
    }

    onChange(event) {
        var string = event.target.value;
        if(string.slice(-1) == " "){
            var list = this.state.tagList;
            list.push(string.slice(0,-1));
            event.target.value = '';

            // TODO: list 참조
            this.setState({
                tagList: list
            })
        }
        // add tag
    }

    render() {
        var tags = this.state.tagList.map((tag) => {
            return <Tag key={tag}
                         name={tag} />
        });

        return (
            <div className="box">
                <div className="input-wrapper">
                    <ul>{ tags }</ul>
                    <input type="text" onChange={ this.onChange.bind(this) } />
                    <button>검색</button>
                </div>
            </div>
        )
    }
}

export default SearchBox;
