import React, {useEffect, useState} from "react";
import Button from "../Button/Button";
import Modal from "../Modal";
import './CartList.scss'
import {useSelector,useDispatch} from "react-redux";
import operation from "../../redux/features/cart/operation";


const CartList = () => {
    const [card, setCard] = useState({})
    const cart = useSelector(({cart})=>cart)
    const dispatch = useDispatch()
    useEffect(()=>{
        // dispatch(operation.setCart([1,2,3]))
    })




    const [isOpen, setIsOpen] = useState(false)

    const handleDelete = () => {
        setIsOpen(false)
        dispatch(operation.deleteItemFromCart(card))
    }

    const handleToggle = (flag) => () => {
        setIsOpen(flag)

    }

    const openModal = (id) => () => {
        setIsOpen(true)
        setCard(id)
    }


    return (
        <>
            <div className='cart-list'>{cart.map(({name, image, price, color}, id) => {
                return (
                    <div className='product-card' key={id}>
                        <Button onClick={openModal(id)} text='X' className='product-card__btn'/>
                        <div className='product-card__img-wrapper'>
                            <img src={image} className='product-card__img'/>
                        </div>
                        <p className="product-card__name">{name}</p>
                        <p className='product-card__color'>{color}</p>
                        <p className='product-card__price'>{price}</p>
                    </div>
                )
            })}</div>

            <Modal isOpen={isOpen}>
                <div className='product-modal'>
                    <p className="product-modal__name">Delete product from cart?</p>
                    <div className='product-modal__btn-wrapper'>
                        <Button  onClick={handleDelete} text='Ok' className='product-modal__btn'/>
                        <Button onClick={handleToggle(false)} text='Cancel' className='product-modal__btn'/>
                    </div>
                </div>
            </Modal>
        </>
    )
}
export default CartList