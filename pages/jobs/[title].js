// import React, { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
// import Jobs from '../../components/Jobs'

// export default function title() {
//     const router = useRouter()
//     const [jobs, setJobs] = useState([])
//     const [term, setTerm] = useState(router.query.title)


//     useEffect(() => {
//         console.log('useEffect ran')
//         const fetcher = async () => {
//             const response = await fetch(`https://remotive.io/api/remote-jobs?search=${router.query.title}`)
//             const data = await response.json()
//             console.log(data)
//             setJobs(data)
//         }
//         fetcher()
//     }, [router.query.title])

//     return (
//         <div>
//             <h1>Hello - {router.query.title}</h1>
//             <div>
//                 {jobs ? jobs : null}
//             </div>
//         </div>
//     )
// }

