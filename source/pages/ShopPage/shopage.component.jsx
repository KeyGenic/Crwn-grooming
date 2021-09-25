import React from 'react';
import CollectionsOverview from '../../components/collection-overview/collections-overview.component'
import { Route } from 'react-router-dom';
import CollectionsPage from '../category/collections';
import { fireStore,convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { shopAction } from '../../Redux/shop-reducer/shop.action';

class ShopPage extends React.Component{

    Unsubscribe = null;

    componentDidMount(){
        const {collectionMap} = this.props
        const collectionRef = fireStore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const collMap = convertCollectionSnapshotToMap(snapshot)
            collectionMap(collMap)
        })
    }

    render(){
        const {match} = this.props
    return(
        <div className ="collections-container">
           <Route exact path = {`${match.path}`} component = {CollectionsOverview} />
           <Route path = {`${match.path}/:collectionsId`} component = {CollectionsPage} />
        </div>
    )
    }
} 
     
const mapDispatch = (dispatch) => ({
    collectionMap : (collMap) => dispatch(shopAction(collMap))
})



export default connect(null,mapDispatch)(ShopPage)