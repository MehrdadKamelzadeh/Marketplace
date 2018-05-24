import React, { Component } from 'react';
import { connect } from 'react-redux';
import itemsList from '../reducers/items_reducer';
import AddItemForm from '../components/addItemForm';
import { bindActionCreators } from 'redux';
import { deleteCurrentItem, selectCurrentItem } from '../actions/index';

class ItemsList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <AddItemForm />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td>Id</td>
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
                                <tr key={item.id}
                                    onClick={
                                        () => this.props.selectCurrentItem( this.props.items.filter(a => a.id == item.id)[0])} >
                                    <td>{item.id}</td>
                                    <td>{item.itemNumber}</td>
                                    <td>{item.variantNumber}</td>
                                    <td>{item.basePrice}</td>
                                    <td>{item.discountPrice}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.dateFrom.toString()}</td>
                                    <td>{item.dateTo.toString()}</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm"
                                            onClick={() => { this.props.deleteCurrentItem(item.id) }}>Delete</button>
                                    </td>
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteCurrentItem, selectCurrentItem }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);

