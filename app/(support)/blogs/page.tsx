import blogData from "@/components/blog/blog-data"
import SingleBlog from "@/components/blog/single-blog"

const Blog = () => {
  return (
    <>
      <section className="py-16 xs:pb-[80px] xs:pt-[110px] sm:pb-[100px] sm:pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[160px] 2xl:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full p-4 md:w-1/2 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-secondary px-4 text-sm text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-secondary px-4 text-sm text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-secondary px-4 text-sm text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-secondary px-4 text-sm text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <a className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-secondary bg-opacity-[15%] px-4 text-sm text-secondary-foreground">
                    ...
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-secondary bg-opacity-[15%] px-4 text-sm text-secondary-foreground"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-secondary bg-opacity-[15%] px-4 text-sm text-secondary-foreground"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
