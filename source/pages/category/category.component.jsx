import React from 'react'
import './category.styles.scss'
import CollectionItems from '../collection-item/collection-items.component'


const CategoryPage = ({match}) => {
    console.log(match)
    return(
        <div className ="category">
            <h2>BEOBLE</h2>
        </div>
    )
}

export default CategoryPage
