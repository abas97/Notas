import React from 'react'
import './login.css'

export const Login = () => {
    return (
        <div className='bg-secondary ContainerLogin'>


            <div className='ModalLogin container' >
                
                <div className='row'>
                    <div className='col-12'>

                   
                <form >
                    <div className='container'>
                        <div className='row Fila'>
                            <div className='col-4'>
                                <label>
                                    User:
                                </label>
                            </div>
                            <div className='col-8'>
                                <input type="password" className="form-control" />
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-4'>
                                <label>
                                    Password:
                                </label>
                            </div>
                            <div className='col-8'>
                                <input type="password" className="form-control" />
                            </div>
                        </div>

                    </div>
                </form>
                </div>
                </div>
                <div className='row Boton'>
                <div className='col-12'>  
                <button type="button" className="btn btn-primary me-3">
                        Registrarse
                    </button>
                    <button type="button" className="btn btn-primary">
                        Sing in
                    </button>
                    </div>
                </div>
            </div>



        </div>
    )
}
