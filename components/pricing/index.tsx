"use client"

import { useState } from "react"

import SectionTitle from "@/components/common/section-title"

import OfferList from "./offer-list"
import PricingBox from "./pricing-box"

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)

  return (
    <section
      id="pricing"
      className="relative z-10 bg-primary/[.03] py-16 dark:bg-primary/[.03] xs:pb-[80px] xs:pt-[110px] sm:pb-[100px] sm:pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[160px] 2xl:pt-[150px]"
    >
      <div className="container">
        <SectionTitle
          title="Affordable Prices"
          paragraph="Which firmament kind. Lesser unto thing Itself. Own good a every whales waters yielding, their grass were stars is very set."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-secondary-foreground"
                  : "text-secondary-foreground dark:text-secondary-foreground"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 border-spacing-2 rounded-full border-border bg-muted shadow-inner outline-indigo-700 dark:bg-muted"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-muted dark:bg-muted"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-secondary-foreground dark:text-secondary-foreground"
                  : "pointer-events-none text-secondary-foreground"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "469" : "296"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="He called meat under their. From. Of kind which forth."
          >
            <OfferList text="For evening over" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Midst under i bearing" status="active" />
            <OfferList text="Years together subdue" status="active" />
            <OfferList text="Blessed. Bring forth after" status="inactive" />
            <OfferList text="Male, creature. Lights." status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "234" : "437"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Divide there doesn't. Itself fish shall fourth there."
          >
            <OfferList text="For evening over" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Midst under i bearing" status="active" />
            <OfferList text="Years together subdue" status="active" />
            <OfferList text="Blessed. Bring forth after" status="inactive" />
            <OfferList text="Male, creature. Lights." status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "453" : "751"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Third also meat had. Good form his morning good a."
          >
            <OfferList text="For evening over" status="active" />
            <OfferList text="Use with Unlimited Projects" status="active" />
            <OfferList text="Midst under i bearing" status="active" />
            <OfferList text="Years together subdue" status="active" />
            <OfferList text="Blessed. Bring forth after" status="inactive" />
            <OfferList text="Male, creature. Lights." status="inactive" />
          </PricingBox>
        </div>
      </div>
    </section>
  )
}

export default Pricing
