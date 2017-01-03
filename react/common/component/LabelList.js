/**
 * Created by home on 2017-01-01.
 */
import React from 'react';
import Label from './Label';

class LabelList extends React.Component {
    render() {
        var labels = this.props.labels.map((label) => {
            return <Label key={label.color}
                          label={label} />
        });

        return (
            <div className="label_list">
                <ul>
                    {labels}
                </ul>
            </div>
        )
    }
}
export default LabelList;