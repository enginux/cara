import SectionTitle from "@/components/common/section-title"

import featuresData from "@/components/features/features-data"
import SingleFeature from "./single-feature"

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 dark:bg-primary/[.03] xs:pb-[80px] xs:pt-[110px] sm:pb-[100px] sm:pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[160px] 2xl:pt-[150px]"
      >
        <div className="container">
          <SectionTitle
            title="Quest Features"
            paragraph="Cattle don't place. Sixth divide heaven midst firmament firmament waters. Don't third bring beginning creeping which."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
