import Header from "../../components/Header"
// import Jobs from "../../components/Jobs"
import Search from "../../components/Search"

export default function jobs({ data }) {

    return (
        <div>
            <Header />
            <Search jobs={data} />
            <Jobs jobs={jobs} />
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch(`https://remotive.io/api/remote-jobs?limit=5`)
    const data = await response.json()
    console.log(data)
  
    return {
      props: {
        data: data.jobs,
      }
    }
  }

