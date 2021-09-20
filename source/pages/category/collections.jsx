import React from 'react'
import './collections.styles.scss'
import CollectionItems from '../collection-item/collection-items.component'
import { connect } from 'react-redux';
import { getCollectionsId } from '../../Redux/shop-reducer/shop-selector';


const CollectionsPage = ({collection}) => {
    const {title,items} = collection
    return(
        <div className ="collections-page">
            <h2 className ="title">{title}</h2>
            <div className ="items-container">
                {
                    items.map(item => <CollectionItems key = {item.id} items = {item} />)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => ({
    collection: getCollectionsId(ownProps.match.params.collectionsId)(state)
})

export default connect(mapStateToProps) (CollectionsPage)
