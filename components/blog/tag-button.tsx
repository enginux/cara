const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="mb-3 mr-3 inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-muted-foreground duration-300 hover:bg-primary/100 hover:text-primary-foreground dark:text-muted-foreground"
    >
      {text}
    </a>
  )
}

export default TagButton
