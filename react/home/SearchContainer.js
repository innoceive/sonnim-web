import react from 'react';
import SearchBox from './SearchBox'
import CheckBox from './../common/component/CheckBox'

class SearchContainer extends React.Component {
    render() {
        let genderTypes = [
            {name:"남성", code:"MALE", selected: false},
            {name:"여성", code:"FEMALE", selected: false}
        ]
        let roomTypes = [
            {name:"단독실", code:"WHOLE", selected: false},
            {name:"도미토리", code:"DORMITORY", selected: false}
        ]
        return (
            <div>
                <div id="search-bar">
                    <CheckBox options={genderTypes}/>
                    <CheckBox options={roomTypes} />
                    <SearchBox className="search-text" />
                </div>
            </div>
        )
    }
}

export default SearchContainer;
