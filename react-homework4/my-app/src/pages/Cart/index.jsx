import React, {useState} from "react";
import CartList from "../../components/CartList";
import Modal from "../../components/Modal";
import Button from "../../components/Button/Button";
import CheckoutForm from "./CheckoutForm";
import {useSelector} from "react-redux";
import './CheckoutModal.scss'


const Cart = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openModal = (flag) => () => setIsOpen(flag)

    const cart = useSelector(({cart}) => cart)

    return (
        <div className='container'>
            <CartList/>
            {cart.length ? <>
                <Button text='Checkout' onClick={openModal(true)} className='btn--primary'/>
                <Modal className='checkout-modal' isOpen={isOpen}>
                    <h4 className='checkout-title'>Checkout</h4>
                    <CheckoutForm onClick={openModal(false)}/>
                </Modal>
            </> : <p className='Empty-text'>Empty Cart</p>}

        </div>
    )
}

export default Cart