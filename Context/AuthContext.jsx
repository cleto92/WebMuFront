/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {createContext, useContext, useState, useEffect} from 'react'


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export const ProveedorAuth = ({children}) => {
    const [usuarioActual, setUsuarioActual] = useState(null)

    useEffect(() => {
    const memb___id = sessionStorage.getItem('memb___id')
    const token = sessionStorage.getItem('token')
    if(memb___id && token) {
        setUsuarioActual({memb___id, token})
    }
    }, [])

    const iniciarSesion = async (token, memb___id) => {
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('memb___id', memb___id)
        setUsuarioActual({token, memb___id})
    }

    const cerrarSesion = async () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('memb___id')
        setUsuarioActual(null)
    }

    const valor = {
        usuarioActual,
        iniciarSesion,
        cerrarSesion
    }

    return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>
    
}

