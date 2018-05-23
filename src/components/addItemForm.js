import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewItemAction } from '../actions/index';

class AddItemForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            itemNumber: '',
            variantNumber: '',
            basePrice: 0,
            discountPrice: 0,
            qty: 0,
            dateFrom: new Date(),
            dateTo: new Date()
        };
        this.onDateFromChange = this.onDateFromChange.bind(this);
        this.onDateToChange = this.onDateToChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onDateFromChange = function (date) {
        this.setState({ dateFrom: date });
    }
    onDateToChange = function (date) {
        this.setState({ dateTo: date });
    }
    onFormSubmit = function (event) {
        event.preventDefault();
        this.props.addNewItem(this.state)
    }
    onInputChange = function (event) {
        let prevState = this.state;
        this.setState({ ...prevState, [event.target.id]: event.target.value });
    }

    render() {
        return (
            <form className='row jumbotron' onSubmit={this.onFormSubmit} >
                <div className="form-group col-md-3">
                    <label>ID</label>
                    <input id="id" value={this.state.id} onChange={this.onInputChange} className="form-control" />
                </div>
                <div className="form-group col-md-3">
                    <label>Item Number</label>
                    <input id="itemNumber" value={this.state.itemNumber} onChange={this.onInputChange} className="form-control" />
                </div>
                <div className="form-group col-md-3">
                    <label>Variant Number</label>
                    <input id="variantNumber" value={this.state.variantNumber} onChange={this.onInputChange} className="form-control" />
                </div>
                <div className="form-group col-md-3">
                    <label>Base Price</label>
                    <input id="basePrice" value={this.state.basePrice} onChange={this.onInputChange} className="form-control" />
                </div>
                <div className="form-group col-md-3">
                    <label>Discount Price</label>
                    <input id="discountPrice" value={this.state.discountPrice} onChange={this.onInputChange} className="form-control" />
                </div>
                <div className="form-group col-md-3">
                    <label>Quantity</label>
                    <input id="qty" value={this.state.qty} onChange={this.onInputChange} className="form-control" />
                </div>
                <div className="form-group col-md-3">
                    <label>Discount From Date</label>
                    <DateTimePicker
                        onChange={this.onDateFromChange}
                        value={this.state.dateFrom}
                    />
                </div>
                <div className="form-group col-md-3">
                    <label>Discount To Date</label>
                    <DateTimePicker
                        onChange={this.onDateToChange}
                        value={this.state.dateTo}
                    />
                </div>

                <button type="submit" className="btn btn-success col-md-3">Save</button>

            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addNewItem: addNewItemAction }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddItemForm);