import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbHeader = ({name}) => {
  return (
    <header>
        <div className="breadcrumbs text-sm bg-base-200 w-screen h-[70px] flex items-center px-8 lg:px-32">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Store</Link></li>
                <li className='font-bold'>{name}</li>
            </ul>
        </div>
    </header>
  )
}

export default BreadCrumbHeader