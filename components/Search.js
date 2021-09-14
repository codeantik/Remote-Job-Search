import React, { useState } from 'react'
import Link from 'next/link'
import Jobs from './Jobs'

const SearchBox = ({ jobs }) => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="search">
            <div className="box">
                <input 
                    type="text" 
                    placeholder="Search a job...."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                 />
                    <button>Search</button>
            </div>
        </div>
    )
}

export default SearchBox
