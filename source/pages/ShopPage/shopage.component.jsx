import React from 'react';
import shopData from './shopData';

 class ShopPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            collections: shopData
        }
    }

    render(){
        const {collections}= this.state
        return(
            <div>yooo</div>
        )
    }
}

export default ShopPage