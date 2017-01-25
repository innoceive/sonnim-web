/**
 * Created by swacle on 2017. 1. 3..
 */
/**
 * Created by home on 2017-01-01.
 */
import React from 'react';
import Filter from './Filter';
import axios from 'axios'

class FilterContainer extends React.Component {
    constructor(){
        super();
        this.state={
            filters: []
        }
    }

    setFilterList() {
        this.setState({
            filters: [{
                id: 0,
                title: "가격(1박당)",
                conditions: [{
                    id: 1,
                    title: "₩ 0 - ₩ 59,999"
                },{
                    id: 2,
                    title: "₩ 60,000 - ₩ 119,999"
                },{
                    id: 3,
                    title: "₩ 120,000 - ₩ 179,999"
                },{
                    id: 4,
                    title: "₩ 180,000 - ₩ 239,999"
                },{
                    id: 5,
                    title: "₩ 240,000 부터"
                }]
            },{
                id: 1,
                title: "가격(1박당)",
                conditions: [{
                    id: 11,
                    title: "₩ 0 - ₩ 59,999"
                },{
                    id: 12,
                    title: "₩ 60,000 - ₩ 119,999"
                },{
                    id: 13,
                    title: "₩ 120,000 - ₩ 179,999"
                },{
                    id: 14,
                    title: "₩ 180,000 - ₩ 239,999"
                },{
                    id: 15,
                    title: "₩ 240,000 부터"
                }]
            },{
                id: 2,
                title: "가격(1박당)",
                conditions: [{
                    id: 21,
                    title: "₩ 0 - ₩ 59,999"
                },{
                    id: 22,
                    title: "₩ 60,000 - ₩ 119,999"
                },{
                    id: 23,
                    title: "₩ 120,000 - ₩ 179,999"
                },{
                    id: 24,
                    title: "₩ 180,000 - ₩ 239,999"
                },{
                    id: 25,
                    title: "₩ 240,000 부터"
                }]
            },{
                id: 3,
                title: "가격(1박당)",
                conditions: [{
                    id: 31,
                    title: "₩ 0 - ₩ 59,999"
                },{
                    id: 32,
                    title: "₩ 60,000 - ₩ 119,999"
                },{
                    id: 33,
                    title: "₩ 120,000 - ₩ 179,999"
                },{
                    id: 34,
                    title: "₩ 180,000 - ₩ 239,999"
                },{
                    id: 35,
                    title: "₩ 240,000 부터"
                }]
            },{
                id: 4,
                title: "가격(1박당)",
                conditions: [{
                    id: 41,
                    title: "₩ 0 - ₩ 59,999"
                },{
                    id: 42,
                    title: "₩ 60,000 - ₩ 119,999"
                },{
                    id: 43,
                    title: "₩ 120,000 - ₩ 179,999"
                },{
                    id: 44,
                    title: "₩ 180,000 - ₩ 239,999"
                },{
                    id: 45,
                    title: "₩ 240,000 부터"
                }]
            }]
        });
    }

    componentDidMount(){
      this.setFilterList();
      // var _this = this;
      //
      // axios.get('http://beta.api.sonnim.kr/filter/list').then(function (response) {
      //     if(response.status == 200) {
      //         var data = response.data;
      //
      //         if(data.result == "success") {
      //             _this.setFilterList(data.data);
      //         }
      //     } else {
      //         console.log(response.status);
      //     }
      // }).catch(function (error) {
      //     console.log(error);
      // });
    }

    render() {
        var filters = this.state.filters.map((filter) => {
            return <Filter key={filter.id}
                           filter={filter} />
        });

        return (
            <div className="sn-filter-box">
                <h2 className="sn-filter-header">검색 필터</h2>
                <ul>
                    {filters}
                </ul>
            </div>
        )
    }
}
export default FilterContainer;
