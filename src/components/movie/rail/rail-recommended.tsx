'use client'

import Image from 'next/image'

import { useQuery } from '@tanstack/react-query'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import Link from 'next/link'
import { AnimeT } from '@/types'
import { getPopularAnime } from '@/server/actions/animes/get-popular-anime'

export default function RailRecommended() {
  const { data } = useQuery<AnimeT[]>({
    queryKey: ['animespopular'],
    queryFn: getPopularAnime,
  })

  return (
    <section className="lg:px-24 lg:py-8 p-4 relative z-20">
      <strong className="text-xl">Recomendado para você</strong>

      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        pagination={true}
        modules={[Pagination]}
        className="w-full mt-4"
      >
        {data &&
          data.map((anime) => (
            <SwiperSlide className="swiper-slide-perview" key={anime.id}>
              <div className="aspect-[4/3] lg:w-[15rem] lg:h-[21.92rem] md:w-[10rem] md:h-[14.62rem] w-[8rem] h-[11.69rem] border-2 border-transparent hover:border-slate-100 transition">
                <Link href={`/anime/${anime.slug}`}>
                  <Image
                    quality={100}
                    width={308}
                    height={404}
                    className="h-full w-full object-cover"
                    src={anime.cover}
                    alt=""
                  ></Image>
                </Link>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  )
}
