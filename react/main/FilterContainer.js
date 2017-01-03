/**
 * Created by swacle on 2017. 1. 3..
 */
/**
 * Created by home on 2017-01-01.
 */
import React from 'react';
import Filter from './Filter';

class FilterContainer extends React.Component {
    constructor(){
        super();
        this.state={
            filterList: []
        }
    }

    componentDidMount(){
        this.setState({
            filterList: [{
                title: "지역",
                code: "B1",
                conditionList: [{
                    value: "협재",
                    code: "A1"
                },{
                    value: "협재2",
                    code: "A2"
                },{
                    value: "협재3",
                    code: "A3"
                },{
                    value: "협재4",
                    code: "A4"
                },{
                    value: "협재5",
                    code: "A5"
                }]
            }]
        });
    }

    render() {
        var filters = this.state.filterList.map((filter) => {
            return <Filter key={filter.code}
                           filter={filter} />
        });

        return (
            <div className="sn_filter">
                <ul className="sn_filter" >
                    {filters}
                </ul>
            </div>
        )
    }
}
export default FilterContainer;