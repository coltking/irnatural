import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import User from '../user/user'
import ProductCard from '../card/card'
import { actionGetProducts } from '../../redux/homeActions'
//////////////////////////////////// Secondary Function
const Welcome = () => {
    const products = useSelector(store => store.homeReducer.products)
    const cart = useSelector(store => store.homeReducer.cart)
    const dispatch = useDispatch()
    useEffect(async () => {
        await dispatch(actionGetProducts())
    }, [])
    return <Col>
        {
            // <h1 className='text-center title'>Te doy la bienvenida a IR Cosmetica Natural.</h1>
        }
        <Row>
            {typeof products === 'object' ? products.map((product, index) => {
                return <Fragment key={product.title + index}>
                    <ProductCard edit={null} title={product.title} description={product.description} img={product.img} price={product.price} />
                </Fragment>
            }) : <div className='text-center'>No hay productos disponibles</div>}
        </Row>
    </Col>
}
//////////////////////////////////// Primary Function
const Home = () => {
    const name = useSelector(store => store.userReducer.user.name)
    return <Fragment>
        {name === '' ? <Welcome /> : <User />}
    </Fragment>
}
export default Home
