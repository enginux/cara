import Image from "next/image"

const AboutSectionTwo = () => {
  return (
    <section className="bg-background dark:bg-background xs:pb-[80px] sm:pb-[100px] md:pb-[120px] xl:pb-[160px] 2xl:pb-[160px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center hover:animate-wiggle-more hover:animate-delay-200 hover:animate-duration-2000 lg:m-0">
              <Image
                className="rounded-2xl"
                src="/images/goats/chix.jpg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-foreground dark:text-foreground sm:text-2xl lg:text-xl xl:text-2xl">
                  TypeScript typecheck
                </h3>
                <p className="text-base font-medium leading-relaxed text-muted-foreground dark:text-muted-foreground sm:text-lg sm:leading-relaxed">
                  Rule. Fruitful may over fourth us creepeth there lights land
                  she'd sea. Him they're there their whales wherein moveth
                  creature can't won't darkness that, had sixth light darkness
                  darkness him.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-foreground dark:text-foreground sm:text-2xl lg:text-xl xl:text-2xl">
                  Prettier write and check
                </h3>
                <p className="text-base font-medium leading-relaxed text-muted-foreground dark:text-muted-foreground sm:text-lg sm:leading-relaxed">
                  He great third great without itself day waters to give, set
                  that to living may stars to was gathered lights dry form have
                  morning. Kind deep don't our. Beginning a.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-foreground dark:text-foreground sm:text-2xl lg:text-xl xl:text-2xl">
                  Tailwind CSS class sorting, merging and linting
                </h3>
                <p className="text-base font-medium leading-relaxed text-muted-foreground dark:text-muted-foreground sm:text-lg sm:leading-relaxed">
                  He of fly image fifth made night void said earth won't i made
                  sixth kind under. Us dominion. Fruitful. Gathering our saw
                  above, make it gathering it. Was spirit itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionTwo
