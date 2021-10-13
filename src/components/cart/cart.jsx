import React, { Fragment, useEffect, useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { actionCleanCart } from '../../redux/homeActions'
import ProductCard from '../card/card'

function Cart() {
    const cart = useSelector(store => store.homeReducer.cart)
    const [text, setText] = useState('Hola, queria hacerte un pedido de:\n')
    const [location,setLocation] = useState('')
    const dispatch = useDispatch()
    function geoSuccess (position) {
        setLocation("https://maps.google.com/?q=" + position.coords.latitude + "," + position.coords.longitude)
    }
    const geo_options = {
        enableHighAccuracy: true,
        maximumAge        : 30000,
        timeout           : 27000
      };
    function geo_error() {
        toast('no pudimos acceder a tu ubicacion, escribenos tu direccion manualmente por wsp!')
    }
    useEffect(async () => {
        await navigator.geolocation.watchPosition(geoSuccess, geo_error, geo_options);
    },[])
    const HandleClean = () => { dispatch(actionCleanCart()) }
    const HandleBuy = async () => {
        const newText = cart.reduce((prev,element) => {
           return prev + element.quantity + " " + element.title + "\n"
        },"");
        window.open("https://wa.me/543417197294/?text=" + encodeURI(text + newText + location))
    }
    return (
        <Fragment>
            <Row>
                {cart ? cart.map((product, index) => {
                    return <Fragment key={product.title + index}>
                        <ProductCard title={product.title} description={product.description} img={product.img} price={product.price} edit={false} quantity={product.quantity} />
                    </Fragment>
                }) : undefined}
            </Row>
            <Row>
                <Col className='text-center'>
                    <h3>Total: ${cart.reduce((prev, next) => {
                        return prev + (next.price * next.quantity)
                    }, 0)}
                    </h3>
                </Col>
                <Col className='text-center'>
                    <Button variant='success' onClick={HandleBuy}>Pedir por whatsapp</Button>
                </Col>
                <Col className='text-center'>
                    <Button variant='danger' onClick={HandleClean}>Vaciar carrito</Button>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Cart
