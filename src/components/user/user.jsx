import React, { Fragment, useEffect, useState } from 'react'
import { Button, Col, Form, ProgressBar, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ModalEditCheck from '../modals/editCheck/editCheck'
import './user.css'
import { actionGetProducts, actionPostProduct } from '../../redux/homeActions'
import ProductCard from '../card/card'
const User = () => {
    const [description, setDescription] = useState('')
    const [modalShow, setModalShow] = useState(false)
    const [modalIdProduct, setModalIdProduct] = useState(null)
    const [modalInitialPrice, setModalInitialPrice] = useState(null)
    const [modalInitialDescription, setModalInitialDescription] = useState(null)
    const [modalInitialImg, setModalInitialImg] = useState(null)
    const [modalTitle,setModalTitle] = useState(null)
    const [image, setImage] = useState(null)
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const dispatch = useDispatch()
    const username = useSelector(store => store.userReducer.user.name)
    const products = useSelector(store => store.homeReducer.products)
    const progress = useSelector(store => store.homeReducer.progress)
    const HandleModalShow = () => {
        setModalShow(!modalShow);
        setTimeout(() => {
            return dispatch(actionGetProducts())
        }, 200)
    }
    const HandleEdit = (product) => {
            setModalIdCheck(product.idProduct)
            setModalTitle(product.title)
            setmodalInitialDescription(product.description)
            setModalInitialPrice(product.price)
            setModalInitialImg(product.img)
            HandleModalShow()
    }
    const HandleClick = async () => {
        await dispatch(actionPostProduct(title,description, image, price))
        await setDescription('');
        await setPrice(0);
        await setTitle("")
        await setDescription("")
        await setImage(null)
        await dispatch(actionGetProducts())
    }
    const HandleDelete = (idProduct) => {
        dispatch(actionDeleteProduct(idProduct))
        setTimeout(() => {
            return dispatch(actionGetProducts())
        }, 200)
    }
    const HandleAddImg = (image) => {
        setImage(image)
    }
    useEffect(() => {
        dispatch(actionGetProducts())
    }, [])
    return <Col className='justify-content-center'>
        <ModalEditCheck idProduct={modalIdProduct} initialPrice={modalInitialPrice} initialImg={modalInitialImg} initialDescription={modalInitialDescription} CloseModal={HandleModalShow} modalState={modalShow} />
        <Row className='justify-content-center'>
            <h3 className='text-center'>{username}</h3>
        </Row>
        <Row>
            {typeof products === 'object' ? products.map((product, index) => {
                return <Fragment key={product.title+index}><ProductCard title={product.title} description={product.description} img={product.img} price={product.price} edit={true} /></Fragment>
            }) : undefined}
            <Row className='text-center'>
                <Col>NUEVO PRODUCTO</Col>
            </Row>
            <Row className={'justify-content-center '}>
                <Col>
                    <Form.Control className='text-center'
                        type='input'
                        value={title}
                        onChange={(e) => { e.preventDefault(); setTitle(e.target.value) }}
                        placeholder='ingrese un titulo' />
                </Col>
                <Col>
                    <Form.Control className='text-center'
                        type='input'
                        value={description}
                        onChange={(e) => { e.preventDefault(); setDescription(e.target.value) }}
                        placeholder='ingrese una descripcion' />
                </Col>
                <Col>
                    <Form.Control className='text-center'
                        type='number'
                        value={price}
                        onChange={(e) => { e.preventDefault(); setPrice(e.target.value) }}
                        placeholder='ingrese un precio' />
                </Col>
                <Col>
                    <Form.Group
                    onChange={(e) => HandleAddImg(e.target.files[0])}
                    >
                    <Form.Control type="file" accept=".png,.jpg,.jpeg"/>
                    </Form.Group>
                    <ProgressBar now={progress}></ProgressBar>
                </Col>
                <Col>
                    <fieldset className='text-center'>
                        <Button className='text-center'variant='primary' onClick={HandleClick}>AGREGAR</Button>
                    </fieldset>
                </Col>
            </Row>
        </Row>
    </Col>
}

export default User
