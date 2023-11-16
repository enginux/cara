import { Feature } from "@/types/feature"

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature
  return (
    <div className="group w-full p-2 hover:animate-jump hover:animate-delay-300 hover:animate-duration-1000">
      <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="mb-5 text-xl font-bold text-secondary-foreground dark:text-secondary-foreground sm:text-2xl lg:text-xl xl:text-2xl">
        {title}
      </h3>
      <p className="dark:text-muted-foregroundv pr-[10px] text-base font-medium leading-relaxed text-muted-foreground">
        {paragraph}
      </p>
    </div>
  )
}

export default SingleFeature
