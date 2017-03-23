/**
 * Created by swacle on 2017. 1. 3..
 */
import React from 'react';

class FilterItem extends React.Component {
    onClickAccordionButton(event) {
        var button = event.target;

        if(button.tagName != "BUTTON") {
            button = button.parentElement;
        }

        button.classList.toggle("active");

        var content = button.nextElementSibling;
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }

    render(){
        var conditions = this.props.filter.conditions.map((condition, index) => {
            return (
                <div className="sn-condition-item" key={condition.id}>
                    <label htmlFor={"sn-condition-checkbox-" + index}>
                        <input className={"sn-condition-checkbox-" + index} type="checkbox" value="" onClick="" ></input>
                        <span className="sn-condition-title">{condition.title}</span>
                        <span className="sn-condition-count">{index*10}</span>
                    </label>
                </div>
            )
        });

        return (
            <li className="sn-filter-item">
                <button className="sn-filter-accordion active" onClick={this.onClickAccordionButton.bind(this)}>
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

export default FilterItem;
