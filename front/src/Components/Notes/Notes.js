import React from 'react'
import {CardNotes} from '../CardNotes/cardNotes'
import { Modal } from '../Modal/Modal'
import axios from 'axios';





export const Notes =({modal,closeModal,openModal}) => {
   
    const [edit,setEdit]=React.useState(false)
    const [data,setData]=React.useState(null)
    const [dataEdit,setDataEdit]=React.useState(null)
    
    React.useEffect(() => {
      axios.get(`http://localhost:8000/api/notes/`)
      .then(res => {
          const datos =res.data.notas
          setData(datos)
      })
  }, [])



   const dataEjem =[
    {titulo:'titulo',
    descripcion:'escribir una descripcion',
  estado:1},
  {titulo:'titulo2',
    descripcion:'escribir una descripcion',
  estado:1},
  {titulo:'titulo',
    descripcion:'escribir una descripcion',
  estado:1},
  {titulo:'titulo',
    descripcion:'escribir una descripcion',
  estado:1},
  {titulo:'titulo',
    descripcion:'escribir una descripcion',
  estado:1},
   ]
   
   const editarNotas=(id)=>{
    setDataEdit(id)
    setEdit(true)
   }
   const closeModalEdit = ()=>{
    setEdit(false)
   }
  s
  return (
    <div className='container mt-5' >
         <div className='row'>
        {dataEjem.map((elem,inx) =>{
          
        return <div className='col-6'><CardNotes nota={elem} modal={editarNotas} dd={inx}/></div>
        })}
        </div>
       {(edit || modal) && <Modal closeModal={edit?closeModalEdit:closeModal} data={edit?dataEjem[dataEdit]:null}/>}
    </div>
  )
}
