import React, { Fragment, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { actionLogout, verifyLogin } from '../../redux/userActions'
import './navBar.css'


function NavBar() {
    const history = useHistory()
    const dispatch = useDispatch()
    const email = useSelector(store => store.userReducer.user.name)
    const HandleLogin = () => history.push('/login')
    const HandleHome = () => history.push('/')
    const HandleCart = () => history.push('/cart')
    const Logout = () => {
        dispatch(actionLogout())
    }
    useEffect(() => {
        dispatch(verifyLogin())
    }, [])
    return (
        <div className="navContainer">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand style={{ marginLeft: "10px" }} onClick={HandleHome}>
                    {email === '' ? "IR Cosmetica Natural" : email}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={HandleHome}>Home</Nav.Link>
                        <Nav.Link onClick={HandleCart}>Carrito</Nav.Link>
                        {email === "" ?
                            <Fragment>
                                <Nav.Link onClick={HandleLogin}>Iniciar sesion</Nav.Link>
                            </Fragment>
                            : <Nav.Link onClick={Logout}>Cerrar sesion</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
