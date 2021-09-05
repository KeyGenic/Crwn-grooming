import React from 'react';
import shopData from './shopData';
import PrevCollection from '../prev-collections/prev-collections.component';

 class ShopPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            collections: shopData
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className ="collections-container">
                <h1 style = {{
                    fontSize : `50px`
                }}>Collections</h1>
             {collections.map(({id,...collections}) => {
                return(
                    <PrevCollection key = {id} {...collections} />
                )
            })}
            </div>
            
        )
        
    }
}

export default ShopPage