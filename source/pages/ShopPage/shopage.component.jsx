import React from 'react';
import CollectionsOverview from '../../components/collection-overview/collections-overview.component'
import { Route } from 'react-router-dom';
import CollectionsPage from '../category/collections';
import { fireStore,convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { shopAction } from '../../Redux/shop-reducer/shop.action';
import SpinnerTing from '../../components/with-spinner/spinner-components';

const CollectionOverViewSpinner = SpinnerTing(CollectionsOverview);
const CollectionPageOverView = SpinnerTing(CollectionsPage)

class ShopPage extends React.Component{

    state = {
        loading : true
    }

    Unsubscribe = null;

    componentDidMount(){
        const {collectionMap} = this.props
        const collectionRef = fireStore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const collMap = convertCollectionSnapshotToMap(snapshot)
            collectionMap(collMap)
            this.setState({loading:false})
        })
    }

    render(){
        const {match} = this.props
        const {loading} = this.state
    return(
        <div className ="collections-container">
           <Route exact path = {`${match.path}`} render ={ props => <CollectionOverViewSpinner isLoading = {loading} {...props}/>} />
           <Route path = {`${match.path}/:collectionsId`}  render ={ props => <CollectionPageOverView isLoading = {loading} {...props}/>}/>
        </div>
    )
    }
} 
     
const mapDispatch = (dispatch) => ({
    collectionMap : (collMap) => dispatch(shopAction(collMap))
})



export default connect(null,mapDispatch)(ShopPage)