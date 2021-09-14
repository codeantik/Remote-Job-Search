import React from 'react'
import Job from './Job'

const Jobs = ({ jobs }) => {
    return (
        <div className="cards">
            { jobs.map((job) => <Job key={job.id} job={job} /> )}
        </div>
    )
}

export default Jobs
