import Link from "next/link"

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-background py-16 dark:bg-background xs:pb-[80px] xs:pt-[110px] sm:pb-[100px] sm:pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[180px] 2xl:pt-[240px]
        "
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-secondary-foreground dark:text-secondary-foreground sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  CARA INTEGRATED FARM
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-secondary-foreground dark:text-secondary-foreground dark:opacity-90 sm:text-lg md:text-xl">
                  The Home of Quality Goats and Honey.
                </p>
                <div className="flex flex-col items-center justify-center pt-40 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="#mission"
                    className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition delay-150 duration-300 ease-in-out hover:opacity-80 dark:bg-primary dark:text-primary-foreground"
                  >
                    🔥TAKE A LOOK
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute left-0 top-16 z-[-1] mx-auto 
        w-full opacity-40 sm:w-3/4 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
        >
          <svg
            className="path"
            width="100%"
            height="100%"
            viewBox="0.0 0.0 622.0 685.0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="p.0">
              <path
                d="m0 0l622.0 0l0 685.0l-622.0 0l0 -685.0z"
                clipRule="nonzero"
              />
            </clipPath>
            <g clipPath="url(#p.0)">
              <path
                fill="#000000"
                fillOpacity="0.0"
                d="m0 0l622.0 0l0 685.0l-622.0 0z"
                fillRule="evenodd"
              />
              <path
                fill="#ff0000"
                fillOpacity="0.2"
                d="m-10.559055 691.0l0 -696.0l632.56696 696.0z"
                fillRule="evenodd"
              />
              <path
                stroke="yellow"
                strokeWidth="1.0"
                d="m-10.559055 691.0l0 -696.0l632.56696 696.0z"
                pathLength="1"
              />
            </g>
          </svg>
        </div>
        <div
          className="absolute right-0 top-16 z-[-1] mx-auto 
        w-full opacity-40 sm:w-3/4 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
        >
          <svg
            className="path"
            width="100%"
            height="100%"
            viewBox="0.0 0.0 622.0 685.0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="scale(-1, 1)"
          >
            <clipPath id="p.0">
              <path
                d="m0 0l622.0 0l0 685.0l-622.0 0l0 -685.0z"
                clipRule="nonzero"
              />
            </clipPath>
            <g clipPath="url(#p.0)">
              <path
                fill="#000000"
                fillOpacity="0.0"
                d="m0 0l622.0 0l0 685.0l-622.0 0z"
                fillRule="evenodd"
              />
              <path
                fill="#ff0000"
                fillOpacity="0.2"
                d="m-10.559055 691.0l0 -696.0l632.56696 696.0z"
                fillRule="evenodd"
              />
              <path
                stroke="yellow"
                strokeWidth="1.0"
                d="m-10.559055 691.0l0 -696.0l632.56696 696.0z"
                pathLength="1"
              />
            </g>
          </svg>
        </div>
      </section>
    </>
  )
}

export default Hero
