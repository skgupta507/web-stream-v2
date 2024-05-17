'use client'

import Image from 'next/image'

import { AnimeT } from '@/types'
import { getAnimeBySlug } from '@/server/actions/animes/get-anime-by-slug'
import { Button } from './ui/button'

import { useQuery } from '@tanstack/react-query'
import { Loader2, Plus } from 'lucide-react'
import { motion } from 'framer-motion'

interface AnimeHeroProps {
  anime: AnimeT
}

export default function AnimeHero({ anime }: AnimeHeroProps) {

  return (
    <>
      <div
        className="h-screen flex items-end">
        <div className="relative z-20 bg-gradient-to-t w-full from-slate-950 via-slate-950/90 to-transparent">
          <div className="px-4 md:px-8 lg:px-24 py-64 bg-gradient-to-tr from-slate-950 via-transparent to-transparent">
            <div>
              <h1 className="font-semibold  text-5xl">{anime.title}</h1>
              <p className="mt-2 gap-3 flex items-center text-slate-300">
                {anime.nsfw ? (
                  <Image
                    className="rounded"
                    src="/NR18-AUTO.jpg"
                    width={20}
                    height={20}
                    alt="Conteúdo para maiores de 18 anos"
                  />
                ) : (
                  <Image
                    className="rounded"
                    src="/NR16-AUTO.jpg"
                    width={20}
                    height={20}
                    alt="Conteúdo para maiores de 16 anos"
                  />
                )}
                {anime.seasons.length} Temporadas
              </p>

              <Button className="mt-8 font-bold font-white uppercase" size="md">
                Assistir 1T Ep.1
              </Button>

              <div className="mt-4">
                <Button className="flex items-center gap-2" variant="ghost">
                  <Plus />
                  <span>Minha Lista</span>
                </Button>

                {anime.trailerYtId && (
                  <a
                    target="__black"
                    href={`https://www.youtube.com/watch?v=${anime.trailerYtId}`}
                  ></a>
                )}
              </div>

              <p className="text-zinc-200 max-w-6xl mt-8 leading-7 truncate-text lg:text-lg md:text-lg text-sm">
                {anime.description}
              </p>

              <div className="flex text-zinc-400 gap-4 mt-2">
                {anime.genres.map((genre) => (
                  <p key={genre.title}>{genre.title}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
      <motion.picture
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
        }}
        className="absolute top-0 left-0 right-0 bottom-0 -z-50"
      >
        {anime.banner ? (
          <Image
            className="h-screen w-full object-cover"
            src={anime.banner}
            width={3840}
            height={2160}
            quality={100}
            alt=""
          />
        ) : (
          <Image
            className="h-screen w-full object-cover blur-md"
            src={anime.cover}
            width={3840}
            height={2160}
            alt=""
          />
        )}
      </motion.picture>
    </>
  )
}
