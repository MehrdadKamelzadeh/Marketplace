import React, { Component } from 'react';

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
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default ItemsList;