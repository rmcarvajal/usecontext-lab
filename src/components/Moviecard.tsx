import type { Movie } from "../types/Movie"

export const Moviecard = ({title, genre, year}:Movie) => {
    return(
        <>
        <h2>{title}</h2>
        <p>{genre}</p>
        <p>{year}</p>
        </>
    )
}