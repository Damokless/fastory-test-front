export default interface Film {
    film_data: {
        "title": string
        "episode_id": number
        "opening_crawl": string
        "director": string
        "producer": string
        "release_date": string
        "characters": string[]
        "planets": string[]
        "starships": string[]
        "vehicles": string[]
        "species": string[]
        "url": string
        "created": string
        "edited": string
        TMDB: {
            backdrop_path : string
            poster_path : string
            vote_average : number
            overview : string
        }
    },
}
