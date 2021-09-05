import React from 'react';
import './collection-items.styles.scss';

const CollectionItems = ({name,img,price}) => {
    console.log(price)
    return(
        <div className = "collection-items">
            <div className ="img" style ={{
                backgroundImage: `url(${img})`
            }}/>
            {Number.isInteger(price)? 
             <div className ="collection-footer">
             <span className ="name">{name}</span>
             <span className ="price">${price}</span>
         </div>:
          <div className ="collection-footer">
          <span className ="name">{name}</span>
          <span className ="price">{price}</span>
      </div>    
        }
           
        </div>
    )
}

export default CollectionItems