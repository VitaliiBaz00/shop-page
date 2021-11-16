import React from "react";
import Button from "../Button/Button";
import './ProductCard.scss';
import {OutLineStar,FillStar} from '../Icons'

const ProductCard = ({name, image, price, article, color, openCard, addToFavourite, isFavourite}) =>{
    return (
        <div className='product-card'>
            <div className='product-card__img-wrapper'>
                <img src={image} className='product-card__img'/>
            </div>
            <Button onClick={addToFavourite}>{isFavourite ? <FillStar/> : <OutLineStar/>}</Button>
            <p className="product-card__name">{name}</p>
            <p className='product-card__color'>{color}</p>
            <p className='product-card__price'>{price}</p>
            <Button onClick={openCard} className='product-card__btn'>Add to cart</Button>

        </div>
    )

}


export default ProductCard