"use client"

import { useEffect, useState } from "react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div className="hover:animate-none motion-safe:animate-bounce">
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="flex h-10 w-10 animate-wiggle-more cursor-pointer items-center justify-center rounded-md bg-primary text-primary-foreground shadow-md transition duration-300 ease-in-out hover:animate-none dark:bg-primary dark:text-primary-foreground"
          >
            <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-border"></span>
          </div>
        </div>
      )}
    </div>
  )
}
