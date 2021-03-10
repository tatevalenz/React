import React,{useState} from 'react'
import {auth} from '../firebaseconfigurate'
import {useHistory} from 'react-router-dom'
const Login = () => {
    const historial=useHistory()
    const[email,setEmail]= useState("")
    const[pass,setPass]=useState("")
    const[MsgError,setMsgError]=useState(null)
    const RegistrarUsuario=(e)=>{
        e.preventDefault()
       auth.createUserWithEmailAndPassword(email,pass)
            .then(r=> {
                historial.push('/')
            } )
            .catch(e=>{

        if(e.code == 'auth/invalid-email'){
            setMsgError('El email es incorrecto')
        }
        if(e.code == 'auth/weak-password'){
            setMsgError('La contraseña debe tener 6 caracteres o mas')
        }
        })

    }
    const LoginUsuario =()=>{
        auth.signInWithEmailAndPassword(email,pass)
        .then((r)=>{
            historial.push('/')
        }) 
        .catch((err)=>{
            if(err.code == 'auth/wrong-password'){
                setMsgError('Contraseña incorrecta')
            }
        })
    }
    

    return (
        <div className='row'>
           <div className="col"></div>
           <div className="col">
               <form onSubmit={RegistrarUsuario} className='form-group mt-5'>
                   <input 
                   onChange={(e)=>{setEmail(e.target.value)}}
                   className='form-control'
                   placeholder='Introduce el Email'
                   type="text"/>
                   <input
                    onChange={(e)=>{setPass(e.target.value)}} 
                   className='form-control mt-4'
                   placeholder='Introduce la Contraseña'
                   type="password"/>
                   <input
                   className='btn btn-dark btn-block mt-4' 
                   value='Registrar Usuario'
                   type="submit"/>
               </form>
               <button
               onClick={LoginUsuario}
               className='btn btn-success btn-block mt-4'>
                   Iniciar Sesion
               </button>
               {
                   MsgError != null ?
                   (
                       <div>
                           {MsgError}
                       </div>
                   )
                   :
                   (
                       <span></span>
                   )
               }
           </div>
           <div className="col"></div>
        </div>
    )
}

export default Login
