import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { actionAddToCart, actionGetProducts, actionRemoveFromCart } from '../../redux/homeActions'
import './card.css'

function ProductCard({ img, title, description, price, edit = false, quantity = undefined }) {
    const dispatch = useDispatch()
    const HandleClick = async () => {
        await dispatch(actionAddToCart({ img, title, description, price }))
        setTimeout(() => {
            return dispatch(actionGetProducts())
        },100)
    }
    const HandleEdit = async () => {
        toast('Coming soon.')
    }
    const HandleReduce = async () => {
        await dispatch(actionRemoveFromCart(title))
        setTimeout(() => {
            return dispatch(actionGetProducts())
        },100)
    }
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {quantity ? <Card.Subtitle className="mb-4 text-muted">Cantidad: {quantity}</Card.Subtitle> : undefined}
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Footer className="text-center">
                    <Button variant="light" disabled>${price}</Button>
                    {edit === null ? <Button variant="primary" onClick={HandleClick}>Agregar al carrito</Button> : edit === false ? <Button variant="primary" onClick={HandleReduce}>Quitar</Button> : <Button variant="primary" onClick={HandleEdit}>Editar</Button>}
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default ProductCard
