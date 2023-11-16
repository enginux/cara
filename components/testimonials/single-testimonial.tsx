import Image from "next/image"

import { Testimonial } from "@/types/testimonial"

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
)

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial

  let ratingIcons = []
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow-500">
        {starIcon}
      </span>
    )
  }

  return (
    <div className="w-full">
      <div className="rounded-md bg-background p-8 dark:bg-secondary/20 lg:px-5 xl:px-8">
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="border/10 dark:border/10 mb-8 border-b border-border pb-8 text-base leading-relaxed text-secondary-foreground dark:border-border dark:text-secondary-foreground">
          “{content}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <div className="w-full">
            <h5 className="mb-1 text-lg font-semibold text-secondary-foreground hover:text-muted-foreground dark:text-secondary-foreground dark:hover:text-muted-foreground lg:text-base xl:text-lg">
              {name}
            </h5>
            <p className="text-sm text-muted-foreground dark:text-muted-foreground">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleTestimonial
