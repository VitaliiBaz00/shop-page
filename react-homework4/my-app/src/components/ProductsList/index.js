import React, {useEffect, useState} from 'react';
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import './ProductList.scss'
import {useDispatch, useSelector} from "react-redux";
import operationCart from "../../redux/features/cart/operation";
import operationFavourite from '../../redux/features/favourites/operation'
import operationGetProducts from '../../redux/features/products/operation'



const ProductList = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [currentCard, setCurrentCard] = useState({})
    const {favourites,products} = useSelector((store) => store)
    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(operationGetProducts.getProducts())
    },[])

    const toggleModal = (flag) => {
        setIsOpen(flag)
    }

    const addToCart = () => {
        dispatch(operationCart.addItemToCart(currentCard))
    }

    const addToFavourite = (item) => () => {
        const isExist = favourites.find(({id})=>id==item.id)
        if (isExist){
            dispatch(operationFavourite.deleteItemFromFavourites(item.id))
            return
        }
        dispatch(operationFavourite.addItemToFavourites(item))
    }



    return (
        <>
            <div className='product-list'>
                {products.map(item =>
                    (<React.Fragment key={item.id}>
                        <ProductCard
                            openCard={() => {
                                toggleModal(true)
                                setCurrentCard(item)
                            }}
                            isFavourite={favourites.find(({id}) => item.id == id)}
                            addToFavourite={addToFavourite(item)}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            article={item.article}
                            color={item.color}/>
                    </React.Fragment>)
                )}
            </div>
            <ProductModal addToCart={addToCart} isOpen={isOpen}
                          toggleModal={toggleModal}/>
        </>
    );

}

export default ProductList;