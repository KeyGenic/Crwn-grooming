import React from 'react';
import './prev-collections.style.scss';
import CollectionItems from '../collection-item/collection-items.component';

const PrevCollection = ({title,items}) => {
    return (
        <div className = "prev-collections">
            <h1 className = "title">{title}</h1>
            <div className = "prev">
                {items.filter((items,index) => index<4).map((items) => {
                    return (
                        <CollectionItems key = {items.id} items = {items} />
                    )
                })}
            </div>
        </div>
    )
}

export default PrevCollection;