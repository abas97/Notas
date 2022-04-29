import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = (props) => {
    const [notes,setNotes]=React.useState(false)
  
    return (
        <nav className="Sav navbar-dark bg-dark">
            <div style={{display:'flex'}}>
            <div className='Coniner-Tittle'>
           <h1 className='Tittle'>
               {notes?'Notes':'Notes Archived'}
           </h1>
           </div>
            <div className="Sad">
          { notes &&
                <button className="Link me-3" onClick={()=>{props.modal()}} >
                    Create Notes
                </button>}
                 {  notes ?
                 <>     
                    <NavLink 
                    onClick={()=>setNotes(!notes)}
                        className="Link" 
                        exact
                        to="/archived"
                    >
                       go to Archived
                    </NavLink>
                    </>
                    :
                    <NavLink 
                    onClick={()=>setNotes(!notes)}
                        className="Link" 
                        exact
                        to="/   "
                    >
                    Back to Notes
                    </NavLink>
                     }
                 
               
            </div>
        </div>
        </nav>
    )
}