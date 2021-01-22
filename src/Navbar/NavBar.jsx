import React from 'react'

export default function NavBar({setKeyword}) {

    const handleChange=(e)=>{
        setKeyword(e.target.value)
    }
    return (
        <div className="nav-bar"> 
        <span>My shop</span>
        <input placeholder="search" onChange={handleChange} />
        </div>
    )
}
