import React from 'react';
import CollectionsOverview from '../../components/collection-overview/collections-overview.component'
import { Route } from 'react-router';
import CategoryPage from '../category/category.component';

const ShopPage = ({match}) => {
    console.log(match)
        return(
            <div className ="collections-container">
               <Route exact path = {`${match.path}`} component = {CollectionsOverview} />
               <Route path = {`${match.path}/:categoryId`} component = {CategoryPage} />
            </div>
            
        )
}

export default (ShopPage)