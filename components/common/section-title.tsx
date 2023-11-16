const SectionTitle = ({
  title,
  paragraph,
  width = "770px",
  center,
  mb = "100px",
}: {
  title: string
  paragraph: string
  width?: string
  center?: boolean
  mb?: string
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-1xl font-bold !leading-tight text-secondary-foreground dark:text-secondary-foreground sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-muted-foreground dark:text-muted-foreground md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  )
}

export default SectionTitle
