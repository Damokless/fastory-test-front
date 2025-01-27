import Film from "@/interfaces/film_types";
import { Card, Image, CardFooter } from "@heroui/react";

export default function FilmsCard({ film_data }: Readonly<Film>) {
    return (
        <Card isBlurred isFooterBlurred className="border-none h-3/5 w-3/5" radius="lg">
            <Image
                alt="Woman listing to music"
                className="object-cover"
                src={`https://image.tmdb.org/t/p/original${film_data.TMDB.backdrop_path}`}
            />
            <CardFooter className=" h-full before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large w-full shadow-small z-10 flex items-center gap-4">
                <Image src={`https://image.tmdb.org/t/p/original${film_data.TMDB.poster_path}`} height={400} width={250} />
                <div className=" h-full w-5/6">
                    <p className="uppercase font-bold text-2xl">{film_data.title}</p>
                    <div className=" flex flex-row gap-4">
                        <p>release date : {film_data.release_date}</p>
                        <p>vote : {film_data.TMDB.vote_average}/10</p>
                        <p>episode : {film_data.episode_id}</p>
                    </div>
                    <div className="mt-10 flex flex-col gap-3">
                        <div>
                            <p className="uppercase font-bold text-xl">Overview</p>
                            <p>{film_data.TMDB.overview}</p>
                        </div>
                        <div>
                            <p className="uppercase font-bold text-xl">Director</p>
                            <p>{film_data.director}</p>
                        </div>
                        <div>
                            <p className="uppercase font-bold text-xl">Producer</p>
                            <p>{film_data.producer}</p>
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );

}
