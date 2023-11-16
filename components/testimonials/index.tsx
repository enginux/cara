import { Testimonial } from "@/types/testimonial"
import SectionTitle from "@/components/common/section-title"

import SingleTestimonial from "@/components/testimonials/single-testimonial"

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Jese Lumad",
    designation: "Founder @Company",
    content:
      "They're Wherein from. Together third night may you his fifth let third you moveth you'll the behold From sixth had.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Angela Khong",
    designation: "Founder @Company",
    content:
      "They're Wherein from. Together third night may you his fifth let third you moveth you'll the behold From sixth had.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "John Lee",
    designation: "Founder @Company",
    content:
      "They're Wherein from. Together third night may you his fifth let third you moveth you'll the behold From sixth had.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] py-16 dark:bg-primary/[.03] md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Testimonials"
          paragraph="So, third creepeth created lights unto lesser spirit you'll firmament forth god own wherein. Isn't divided image that. Image fruitful."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
