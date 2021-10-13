import axios from 'axios'
import { toast } from 'react-toastify'
import { apiUrl, cloudinaryUploadPreset, cloudinaryURL } from '../config'
import { ADD_TO_CART, SETTING_PRODUCTS, SETTING_PROGRESS, SETTING_CART, REMOVE_FROM_CART, CLEAN_CART } from './constants'
export const actionToast = (text) => {
    toast(text)
}
export const actionCleanCart = () => {
    return dispatch => {
        dispatch({ type: CLEAN_CART })
    }
}
export const actionGetProducts = () => {
    return (dispatch) => {
        axios.get(apiUrl + '/products', {
            withCredentials: true
        }).then(res => {
            dispatch({ type: SETTING_PRODUCTS, payload: res.data })
        }).catch(error => {
            if (error.message === "Request failed with status code 401") {
                dispatch(actionToast("Hubo un error al buscar productos."))
            }
        })
    }
}
export const actionPostProduct = (title, description, image, price) => {
    return async (dispatch) => {
        const formData = new FormData()
        formData.append('file', image)
        formData.append('upload_preset', cloudinaryUploadPreset)
        const cloudRes = await axios.post(cloudinaryURL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress(e) {
                dispatch(actionSetProgress((e.loaded * 100) / e.total))
            }
        })
        const token = localStorage.getItem('token')
        await axios.post(apiUrl + '/products', { title, description, image: cloudRes.data.secure_url, price }, { withCredentials: true, headers: { 'Authorization': 'Bearer ' + token } })
        dispatch(actionGetProducts())
    }
}
export const actionSetProgress = (progress) => {
    return (dispatch) => {
        dispatch({ type: SETTING_PROGRESS, payload: progress })
    }
}
export const actionAddToCart = (product) => {
    return (dispatch) => {
        dispatch({ type: ADD_TO_CART, payload: product })
    }
}
export const actionRemoveFromCart = (title) => {
    return (dispatch) => {
        dispatch({ type: REMOVE_FROM_CART, payload: title })
    }
}
