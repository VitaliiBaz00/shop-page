import React from "react";
import Modal from "../Modal";
import Button from "../Button/Button";
import './ProductModal.scss'



const ProductModal = ({isOpen, toggleModal,addToCart}) => {

    const successful = () =>{
        toggleModal(false)
        addToCart()
    }
    const cancel = () =>{
        toggleModal(false)
    }
    return (
        <Modal isOpen={isOpen} closeModal={() => toggleModal(false)} >
            <div className='product-modal'>
                <p className="product-modal__name">Add this product to cart?</p>
                <div className='product-modal__btn-wrapper'>
                <Button onClick={successful} className='product-modal__btn'>Ok</Button>
                <Button onClick={cancel} className='product-modal__btn'>Cancel</Button>
                </div>
            </div>
        </Modal>
    )
}


export default ProductModal