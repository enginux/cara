import Image from "next/image"
import SectionTitle from "@/components/common/section-title"

const AboutSectionOne = () => {
  return (
    <section
      id="about"
      className="bg-background py-16 dark:bg-background xs:pb-[80px] xs:pt-[110px] sm:pb-[100px] sm:pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[160px] 2xl:pt-[150px]"
    >
      <div className="container">
        <div className="border-b border-border pb-16 dark:border-border md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="MISSION"
                paragraph="To harmonize nature and agriculture through sustainable farming. Committed to nurturing a vibrant ecosystem while providing high-quality agricultural products that nourish both the body and soul. To inspire and educate our community on the beauty and potential of sustainable farming. Together, we strive to develop a sustainable future where farming and nature coexist in perfect harmony."
                mb="44px"
              />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] hover:animate-wiggle-more hover:animate-delay-200 hover:animate-duration-2000 lg:mr-0">
                <Image
                  src="/images/goats/turks-1.jpg"
                  alt="about-image"
                  fill
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionOne
