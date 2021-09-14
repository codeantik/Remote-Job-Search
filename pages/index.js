import Jobs from '../components/Jobs'
import Header from '../components/Header'
import SearchBox from '../components/SearchBox'

export default function Home({ jobs }) {
  return (
    <div className='container'>
        <Header />
        <SearchBox />
        <Jobs jobs={jobs} />
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch(`https://remotive.io/api/remote-jobs?limit=20`)
  const data = await response.json()
  console.log(data)

  return {
    props: {
      jobs: data.jobs,
    }
  }
}
