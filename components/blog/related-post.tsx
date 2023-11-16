import Image from "next/image"
import Link from "next/link"

const RelatedPost = ({
  image,
  slug,
  title,
  date,
}: {
  image: string
  slug: string
  title: string
  date: string
}) => {
  return (
    <div className="flex items-center lg:block xl:flex">
      <div className="mr-5 lg:mb-3 xl:mb-0">
        <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md hover:animate-jump hover:animate-delay-200 hover:animate-duration-2000 sm:h-[75px] sm:w-[85px]">
          <Image src={image} alt={title} fill />
        </div>
      </div>
      <div className="w-full">
        <h5>
          <Link
            href={slug}
            className="mb-[6px] block text-base font-medium leading-snug text-secondary-foreground hover:text-muted-foreground"
          >
            {title}
          </Link>
        </h5>
        <p className="text-xs font-medium text-muted-foreground dark:text-muted-foreground">{date}</p>
      </div>
    </div>
  )
}

export default RelatedPost
