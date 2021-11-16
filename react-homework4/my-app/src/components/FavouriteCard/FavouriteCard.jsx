import React  from "react";
import Button from "../Button/Button";
import {FillStar } from "../Icons";


const FavouriteCard = ({name, image, price, color, openCard,removeFavourite}) => {

    return (
        <div className='product-card'>
            <div className='product-card__img-wrapper'>
                <img src={image} className='product-card__img'/>
            </div>
            <Button onClick={removeFavourite}> <FillStar/> </Button>
            <p className="product-card__name">{name}</p>
            <p className='product-card__color'>{color}</p>
            <p className='product-card__price'>{price}</p>
            <Button text='Buy' className='product-card__btn'/>
        </div>
    )
}
export default FavouriteCard