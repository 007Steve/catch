import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import './Search.css'
import { useState } from 'react';
import JobCard from './JobCard';
function Search() {

    const [query,setQuery] = useState("")
    const [location,setLocation] = useState("")
    const [jobs,setJobs] = useState([])
   
   const searchJobs = async (e) => {
    e.preventDefault()
       fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${query}&location=${location}`)
       .then(response => response.json())
       .then(data => setJobs(data))
    }
    return (
        <>
            <div className="nav__search">
                <form onSubmit={searchJobs}>
                    <div className="nav__inputContainer">
                        <SearchIcon/>
                        <input type="text" placeholder="Filter by text.." value={query} onChange={(e) => setQuery(e.target.value)}/>
                    </div>
                    <div className="nav__inputContainer">
                        <RoomIcon/>
                        <input type="text" placeholder="Filter by location.." value={location} onChange={(e) => setLocation(e.target.value)}/>
                    </div>
                        <button type="submit"> Search</button>
                </form>
            </div>

            <div className="mainContainer">
                {jobs.map(job => <JobCard key={job.id} title={job.title}location={job.location} company={job.company} time={job.created_at} position={job.type} image={job.company_logo} link={job.company_url}/>)}
            </div>
            </>
    )
}

export default Search
