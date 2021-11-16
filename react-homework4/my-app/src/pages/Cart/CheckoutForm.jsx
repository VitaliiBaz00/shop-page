import React from "react";
import {Formik, Form, Field, ErrorMessage, validateYupSchema} from 'formik';
import * as yup from 'yup';
import Button from "../../components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import cartOperation from '../../redux/features/cart/operation'
import './CheckoutModal.scss'

const CheckoutForm = ({onClick}) => {

    const dispatch = useDispatch()
    const {cart} = useSelector(store => store)

    const onSubmit = (data) => {


        console.log({data, cart})
        onClick()
        dispatch(cartOperation.clearCart())
    }

    const initialValues = {
        name: '',
        lastName: '',
        age: '',
        address: '',
        phone: ''
    }

    const validationSchema = yup.object({
        name: yup.string().required(),
        age: yup.number().required(),
        lastName: yup.string().required(),
        phone: yup.number().required(),
        address: yup.string().required()
    })

    return <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
    >
        {({onSubmit, values}) => {
            return <Form className='form'>
                <Field className='input' name='name' placeholder='name'/>
                <ErrorMessage name='name'/>
                <Field className='input' name='lastName' placeholder='lastName'/>
                <ErrorMessage name='lastName'/>
                <Field className='input' name='age' placeholder='age'/>
                <ErrorMessage name='age'/>
                <Field className='input' name='address' placeholder='address'/>
                <ErrorMessage name='address'/>
                <Field className='input' name='phone' placeholder='phone number'/>
                <ErrorMessage name='phone'/>

                <div className='btn-wrapper'>
                    <Button type="submit" onClick={onSubmit} text='Buy' className='btn--primary'/>
                    <Button type='button' onClick={onClick} text='Cancel' className='btn--primary'/>
                </div>
            </Form>
        }}
    </Formik>
}


export default CheckoutForm;