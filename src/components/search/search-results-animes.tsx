'use client'

import { AnimeT } from "@/types";
import Link from "next/link";

interface SearchResultsProps {
    animes: AnimeT[]
}

export function SearchResultsAnimes({ animes }: SearchResultsProps) {
    if (animes && !animes.length) { return null }

    return (
        <div>
            <strong className="mb-2 block text-base">Animes</strong>
            <ul className="grid gap-2 lg:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] md:grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] grid-cols-[repeat(auto-fill,minmax(8rem,1fr))]">
                {animes &&
                    animes.map((anime) => (
                        <li key={anime.id} className="h-full w-full border-2 border-transparent hover:border-slate-100 transition">
                            <Link href={`/anime/${anime.slug}`}>
                                <img
                                    width={308}
                                    height={404}
                                    className="h-full w-full object-cover"
                                    src={anime.cover}
                                    alt=""
                                />
                            </Link>
                        </li>
                    ))
                }
            </ul >
        </div >
    )
}