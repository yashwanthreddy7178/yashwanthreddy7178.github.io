"use client"

import { useCallback } from "react"

export function useScrollToSection() {
  const scrollToSection = useCallback((elementId: string) => {
    // Prevent default anchor link behavior
    const element = document.getElementById(elementId)

    if (element) {
      // Get the navbar height to offset the scroll position
      const navbar = document.querySelector("header")
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0

      // Calculate the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top

      // Calculate the scroll position
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20

      // Scroll to the element
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  return scrollToSection
}
