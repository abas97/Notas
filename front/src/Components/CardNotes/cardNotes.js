import React from 'react'
import "./cardNotes.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faNoteSticky,faBoxArchive,faPen,faTrashCan} from '@fortawesome/free-solid-svg-icons'

const date = new Date()
export const CardNotes = ({nota,modal,dd}) => {
  
  return (
    <div className='container Card'>
        <div className='row' style={{height:'100%'}}>
            <div className='col-3' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
            <FontAwesomeIcon icon={faNoteSticky} className='Icono'/>
            </div>
            <div className='col-6' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
                <div>
                <p>{nota.titulo}</p>
                 <p style={{fontSize:'15px'}}>{`fecha de la nota ${date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()}`}</p>
                 </div>
            </div>
            <div className='col-3' style={{display:'flex',justifyContent:'center',alignItems:'flex-end',height:'100%',paddingBottom:10}}>
            <FontAwesomeIcon icon={faBoxArchive} className='SecondIcono' onClick={()=>console.log('funciona')}/>
            <FontAwesomeIcon icon={faPen} className='SecondIcono me-2 ms-2' onClick={()=>{modal(dd)}}/>
            <FontAwesomeIcon icon={faTrashCan} className='SecondIcono' onClick={()=>console.log('funciona')}/>
            </div>  

        </div>

    </div>
  )
}
