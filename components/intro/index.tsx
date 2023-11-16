"use client"

import { useState } from "react"
import Image from "next/image"
import ModalVideo from "react-modal-video"
import SectionTitle from "@/components/common/section-title"

const Intro = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <section id="mission" className="z-10 bg-background py-16 dark:bg-background xs:pb-[80px] xs:pt-[110px] sm:pb-[100px] sm:pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[160px] 2xl:pt-[150px]">
      <div className="container">
        <SectionTitle
          title="MISSION"
          paragraph="To supply quality fresh and all natural farm products."
          center
          mb="80px"
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[970px] overflow-hidden rounded-2xl">
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/cara-farm.png" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-secondary/75 text-secondary-foreground transition hover:bg-secondary/100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ autoplay: 1, mute: 1 }}
        isOpen={isOpen}
        videoId="zyGHq-iThRU"
        onClose={() => setOpen(false)}
      />
    </section>
  )
}

export default Intro
