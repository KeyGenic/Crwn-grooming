import React from 'react';
import PrevCollection from '../../pages/prev-collections/prev-collections.component'
import './collections-overview.styles.scss'
import { connect } from 'react-redux';
import { getShopData } from '../../Redux/shop-reducer/shop-selector';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({collections}) => {
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

const mapStateProps = createStructuredSelector({
    collections : getShopData
})
        

export default connect(mapStateProps)(CollectionsOverview)