import { useEffect, useState } from "react"
import { Moviecard } from "../components/Moviecard"
import type { Movie } from "../types/Movie"

export const Catalogue = () => {

const [list, setList] = useState([])

     useEffect(() => {
    fetch ("../movies.json")
    .then((res) => res.json())
    .then ((data) => setList(data.movies))
 },[])

    return(
        <>
        <h1>catalogue</h1>
        {list.map((movie:Movie)=>{
            return(
                <div>
                    <Moviecard title={movie.title} genre={movie.genre} year={movie.year}/>
                </div>
            )
        })}
        </>
    )
}