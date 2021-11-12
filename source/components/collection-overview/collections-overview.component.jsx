import React from 'react';
import PrevCollection from '../../pages/prev-collections/prev-collections.component'
import './collections-overview.styles.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getCollectionOverview } from '../../Redux/shop-reducer/shop-selector';

const CollectionsOverview = ({collections}) => {
         return(
            <div className ="collections-container">
                <h1 style = {{
                    fontSize : `50px`
                }}>Collections</h1>
             {collections.map(({id,title,...Othercollections}) => {
                 console.log(title)
                return(
                    <PrevCollection key = {id} {...Othercollections} />
                )
            })}
            </div>
            
        )
}

const mapStateProps = createStructuredSelector({
    collections : getCollectionOverview
})
        

export default connect(mapStateProps)(CollectionsOverview)