import React from 'react'
import './Modal.css';
import axios from 'axios';
export const Modal = ({archived,closeModal,data}) => {

  const save = ()=>{
    closeModal(false)
    axios.post(`http://localhost:8000/api/notes/`,{ 
      titulo :valueTitle,
      description:valueDes,
       estado:1 })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  const cancel = ()=>{
    closeModal(false)
  }
  const[valueDes,setValueDes]=React.useState(data?data.descripcion:'')
  const[valueTitle,setValueTitle]=React.useState(data?data.titulo:'')
  
  return (
    <div className="ModalBackground">
      <div className=' Modal container'>
        <div className='row'>
        <div className='row mt-4'>
          <div className='col-12'>
            <h1 style={{color:'black',fontSize:40,textDecoration:'underline'}}>
           { !archived?' Crear Nota':'Editar Nota'}
            </h1>
          </div>

        </div>
        <div className='row mt-4 Fila'>
          <div className='col-2' style={{textAlign:'center'}}>
            <label style={{color:'black',}}>
              titulo:
            </label>
          </div>
          <div className='col-10'>
            <input type="text" className="form-control" value={valueTitle} onChange={(value)=>setValueTitle(value.target.value)}/>
          </div>
        </div>
        <div className='row mt-4 Fila'>
          <div className='col-4 ' style={{textAlign:'start'}}>
            <label style={{color:'black',}}>
              Descripcion:
            </label>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-12'>
          <textarea class="form-control" value={valueDes} placeholder="escriba descripcion...." id="floatingTextarea2" style={{height: 100}} onChange={(val)=>setValueDes(val.target.value)}></textarea>
          </div>
        </div>
        </div>
        <div className='row' style={{height:150}}>
          <div className='col-12' style={{display:'flex',justifyContent:'end',alignItems:'end'}}>
             <button className='Button me-3' onClick={cancel} >cancelar</button>
             <button className='Button'onClick={save} >save</button>
          </div>
        </div>
      </div>
    </div>
  )
}


