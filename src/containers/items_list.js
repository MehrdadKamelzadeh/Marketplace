import React, { Component } from 'react';
import { connect } from 'react-redux';
import itemsList from '../reducers/items_reducer';


class ItemsList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Item Number</td>
                            <td>Variant Number</td>
                            <td>Base Price</td>
                            <td>Discount Price</td>
                            <td>Quantity</td>
                            <td>From Date Discount</td>
                            <td>To Date Discount</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((item) => {
                            return (
                                <tr key={item.itemNumber + item.variantNumber}>
                                    <td>{item.itemNumber}</td>
                                    <td>{item.variantNumber}</td>
                                    <td>{item.basePrice}</td>
                                    <td>{item.discountPrice}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.fromDate}</td>
                                    <td>{item.toDate}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { items: state.itemsList }
}
export default connect(mapStateToProps)(ItemsList);

