import React, { Component } from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { connect } from 'react-redux'

import ShoppingCart from './ShoppingCart'
import MyCart from './MyCart'
import DisplayPhone from './DisplayPhone'


class Container extends Component {
    render() {
        const { inCart_phones, outCart_phones } = this.props
        console.log(inCart_phones);
        console.log(outCart_phones);
        return (
            <div className="container">
                <div>
                    <h2>
                        <i></i>
                        <div>Phone Shope</div>
                    </h2>
                </div>
                <div className="container">
                <h1>My cart</h1>
                    <div className="container">                       
                        <MyCart inCart_phones={inCart_phones} />
                    </div>
                <div>
                    <DndProvider backend={ HTML5Backend } >
                        <div>
                            {outCart_phones.length > 0 ? <h3>Phone Brands</h3>: null}
                            
                        </div>
                        <div>
                            <div className="sinAgregadar">
                                <DisplayPhone displayPhones = {outCart_phones} />
                            </div>
                            <ShoppingCart inCart_phones={inCart_phones} />                            
                        </div>  
                    </DndProvider>                 
                </div>
                </div>            
            </div>   

        )
    }
}

function mapStateToProps({phones}){
    const inCart_phones = Object.keys(phones).filter((phone) => phones[phone].inCart == 'true')
    const outCart_phones = Object.keys(phones).filter((phone) => !inCart_phones.includes(phone))

    return{
        inCart_phones,
        outCart_phones,
    }
  }

export default connect(mapStateToProps)(Container)