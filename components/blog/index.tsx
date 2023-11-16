import SectionTitle from "@/components/common/section-title"

import blogData from "@/components/blog/blog-data"
import SingleBlog from "@/components/blog/single-blog"

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-primary/[.03] py-16 dark:bg-primary/[.03] md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Latest Blogs"
          paragraph="Their years so to yielding, cattle forth had third and one tree was thing set sea made appear."
          center
        />

        <div className="md:grid-cols- grid grid-cols-1 gap-x-8 gap-y-10 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
