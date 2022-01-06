import React, { Component } from 'react';
import { connect } from 'react-redux'

class MyCart extends Component {
    render() {
        const { inCart_phones, phones } = this.props;
     
        return (
            <div className="row mt-3">
                {inCart_phones?.length
                    ? inCart_phones.map(phone => (
                        <div key={phone} className="col-auto">
                            <div >
                                <div >
                                    <img
                                        src="./celular.jpg"
                                        style={{height: 300}}
                                    />
                                    <div>{phones[phone].brand}</div>
                                    <div>$ {phones[phone].price}</div>
                                    <div >
                                        {phones[phone].capacity}
                                    </div>
                                </div>
                                <div >
                                    <div>
                                        <button className="btn btn-primary">Buy</button>
                                        <button className="btn btn-danger">Decline</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    : (
                        <div >No Phone in your cart...</div>
                    )}

            </div>
        )
    }
}

function mapStateToProps({ phones }) {
    return {
        phones,
    }
}

export default connect(mapStateToProps)(MyCart);