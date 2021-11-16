import React, {useState} from "react";
import FavouriteCard from "../FavouriteCard/FavouriteCard";
import './FavouriteList.scss'
import {useSelector, useDispatch} from "react-redux";
import operation from "../../redux/features/favourites/operation";

const FavouriteList = () => {

    const favourites = useSelector(({favourites})=>favourites)
    const dispatch = useDispatch()



    const removeFavourite = (key) => () => {
        dispatch(operation.deleteItemFromFavourites(key))
    }


    return (
        <div className='favourite-list'>
            {favourites.map(({id, name, image, color, price}) => <FavouriteCard key={id}
                removeFavourite={removeFavourite(id)} image={image} color={color} name={name} price={price}/>)}
        </div>
    )
}

export default FavouriteList