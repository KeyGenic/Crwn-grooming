import React from 'react';
import CollectionsOverview from '../../components/collection-overview/collections-overview.component'
import { Route } from 'react-router-dom';
import CollectionsPage from '../category/collections';

const ShopPage = ({match}) => {
        return(
            <div className ="collections-container">
               <Route exact path = {`${match.path}`} component = {CollectionsOverview} />
               <Route path = {`${match.path}/:collectionsId`} component = {CollectionsPage} />
            </div>
        )
}



export default ShopPage