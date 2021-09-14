import React, { useState } from 'react'
import cover from '../public/cover.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Jobs from './Jobs'

const SearchBox = ({ jobs }) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [data, setData] = useState([])

    const handleClick = async () => {
  
    }

    return (
        <div className="search-box">
            <div className="cover">
                <Image src={cover} height={880} width={1800} />
            </div>
            <div className="box">
                <input 
                    type="text" 
                    placeholder="Search a job...."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleClick}>Search</button>
            </div>
        </div>
    )
}

export default SearchBox
