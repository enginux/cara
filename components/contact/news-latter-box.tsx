const NewsLatterBox = () => {
  return (
    <div className="relative z-10 rounded-md bg-primary/[.03] dark:bg-primary/[.03] p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-secondary-foreground dark:text-secondary-foreground">
        Subscribe to receive future updates
      </h3>
      <p className="mb-11 border-b border-border pb-11 text-base font-medium leading-relaxed text-muted-foreground dark:border-border dark:text-muted-foreground">
        Given every it he creeping had moveth gathered stars behold him he the
        open. Us won't seasons shall she'd hath.
      </p>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="mb-4 w-full rounded-md border border-border px-6 py-3 text-base font-medium text-secondary-foreground outline-none placeholder:text-muted-foreground focus:border-primary dark:border-border dark:focus:border-primary"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="mb-4 w-full rounded-md border border-border px-6 py-3 text-base font-medium text-secondary-foreground outline-none placeholder:text-muted-foreground focus:border-primary dark:border-border dark:focus:border-primary"
        />
        <input
          type="submit"
          value="Subscribe"
          className="outline-non mb-4 w-full cursor-pointer rounded-md border border-transparent bg-primary px-6 py-3 text-center text-base font-medium text-primary-foreground hover:opacity-90 dark:bg-primary dark:text-primary-foreground"
        />
        <p className="text-center text-base font-medium leading-relaxed text-muted-foreground dark:text-muted-foreground">
          No spam guaranteed, So please don’t send any spam mail.
        </p>
      </form>
    </div>
  )
}

export default NewsLatterBox
