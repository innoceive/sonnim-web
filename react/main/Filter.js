/**
 * Created by swacle on 2017. 1. 3..
 */
import React from 'react';

class Filter extends React.Component {
    onClickAccordionButton(event) {
        var button = event.target;

        button.classList.toggle("active");
        console.log(button.classList);

        var content = button.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    }

    render(){
        var conditions = this.props.filter.conditions.map((condition, index) => {
            return (
                <div className="sn-condition-item">
                    <label>
                        <input className="sn-condition-checkbox" type="checkbox" value="" onClick="" >

                        </input>
                        <span className="sn-condition-title">
                            {condition.title}
                        </span>
                        <span className="sn-condition-count">
                            {index*10}
                        </span>
                    </label>
                </div>
            )
        });

        return (
            <li className="sn-filter-item">
                <button className="sn-filter-accordion" onClick={this.onClickAccordionButton.bind(this)}>
                    <b>{this.props.filter.title}</b>
                </button>
                <div className="sn-filter-content">
                    <fieldset>
                        {conditions}

                    </fieldset>
                </div>
            </li>
        )
    }
}

export default Filter;
