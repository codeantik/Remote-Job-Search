import React from 'react'

const Job = ({ job }) => {
    return (
        <div className="card">
            <h2>{job.title}</h2>
            <p>{job.company_name}</p>
            <b><p>{job.salary ? job.salary : 'Not disclosed'}</p></b>
            <p>{job.category}</p>
            <p>{job.job_type}</p>
            <img src={job.company_logo_url} alt="logo" width="60px" height="60px" />
        </div>
    )
}

export default Job
