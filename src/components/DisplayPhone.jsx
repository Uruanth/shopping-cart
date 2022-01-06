import React, { Component } from 'react';
import { connect } from 'react-redux';
import Phone from './Phone';

class DisplayPhone extends Component {
    render() {
        const { phones, displayPhones } = this.props
        return (
            <div className="row">
                {displayPhones
                    .map((phone) => (
                        <Phone
                            key={phone}
                            id={phone}
                            brand={phones[phone].brand}
                            price={phones[phone].price} />
                    ))}
            </div>
        )
    }
}

function mapStateToProps({ phones }) {
    return {
        phones,
    }
}


export default connect(mapStateToProps)(DisplayPhone);