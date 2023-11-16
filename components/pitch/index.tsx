import Image from "next/image"
import SectionTitle from "@/components/common/section-title"

const Pitch = () => {
  return (
    <section
      id="about"
      className="bg-background py-16 dark:bg-background xs:pb-[80px] xs:pt-[110px] sm:pb-[100px] sm:pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[160px] 2xl:pt-[150px]"
    >
      <div className="container">
        <div className="pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Modernizing Agriculture for a Sustainable Future"
                paragraph="We present an opportunity to revolutionize agriculture by integrating cutting-edge technologies. Our vision encompasses the use of Artificial Intelligence, Cryptography, Industrial Internet of Things, and Engineering Technology to enhance agricultural efficiency and sustainability. We aim to secure investments from like-minded partners who share our commitment to shaping a technologically advanced, greener, and more productive future for agriculture."
                mb="44px"
              />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] hover:animate-wiggle-more hover:animate-delay-200 hover:animate-duration-2000 lg:mr-0">
                <Image
                  src="/images/about/about-image.jpg"
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

export default Pitch
