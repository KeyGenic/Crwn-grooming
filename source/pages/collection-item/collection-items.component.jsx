import React from 'react';
import './collection-items.styles.scss';
import CustomBtn from '../../components/custom-btn/custom-btn.components';
import { connect } from 'react-redux';
import { addItems } from '../../Redux/cart-reducer/cart.actions';

const CollectionItems = ({items,addItems}) => {
    const {name,img,price} = items
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
           <CustomBtn child = "Add to Cart" onClick = {() => addItems(items)} Isinverted />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItems: (items) => dispatch(addItems(items))
})



export default connect(null,mapDispatchToProps) (CollectionItems)