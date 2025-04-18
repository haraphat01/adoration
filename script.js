document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector(".nav-menu")
  
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active")
      })
    }
  
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll(".nav-menu a")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
      })
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          const headerHeight = document.querySelector("header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Active menu item based on scroll position
    const sections = document.querySelectorAll("section")
  
    function setActiveNavItem() {
      const scrollPosition = window.scrollY
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll(".nav-menu a").forEach((link) => {
            link.classList.remove("active")
            if (link.getAttribute("href") === `#${sectionId}`) {
              link.classList.add("active")
            }
          })
        }
      })
    }
  
    window.addEventListener("scroll", setActiveNavItem)
  
    // SANs Gallery
    const sansData = [
      { name: "Gold B.R", year: "1987", image: "/images/gold.jpg?height=300&width=250&text=Awomolo" },
      { name: "Yusuf Olaolu Ali", year: "1997", image: "/images/gold.jpg?height=300&width=250&text=Ali" },
      { name: "Kehinde Eleja", year: "2012", image: "/images/gold.jpg?height=300&width=250&text=Eleja" },
      { name: "Prof. Wahab Egbewole", year: "2018", image: "/images/gold.jpg?height=300&width=250&text=Egbewole" },
      { name: "Rafiu Balogun", year: "2019", image: "/images/gold.jpg?height=300&width=250&text=Balogun" },
      { name: "Abdullahi Ibrahim", year: "1982", image: "/images/gold.jpg?height=300&width=250&text=Ibrahim" },
      { name: "Saka Isau", year: "2002", image: "/images/gold.jpg?height=300&width=250&text=Isau" },
      { name: "Lateef Fagbemi", year: "2001", image: "/images/gold.jpg?height=300&width=250&text=Fagbemi" },
    ]
  
    const galleryContainer = document.getElementById("sans-gallery")
    const prevBtn = document.getElementById("prev-btn")
    const nextBtn = document.getElementById("next-btn")
  
    let currentPage = 0
    const itemsPerPage = window.innerWidth < 768 ? 1 : 4
    const totalPages = Math.ceil(sansData.length / itemsPerPage)
  
    function renderGallery() {
      if (!galleryContainer) return
  
      galleryContainer.innerHTML = ""
  
      const startIndex = currentPage * itemsPerPage
      const endIndex = Math.min(startIndex + itemsPerPage, sansData.length)
  
      for (let i = startIndex; i < endIndex; i++) {
        const san = sansData[i]
  
        const galleryItem = document.createElement("div")
        galleryItem.className = "gallery-item"
  
        galleryItem.innerHTML = `
          <img src="${san.image}" alt="${san.name}" class="gallery-img">
          <div class="gallery-info">
            <h3>${san.name}</h3>
            <p>SAN ${san.year}</p>
          </div>
        `
  
        galleryContainer.appendChild(galleryItem)
      }
    }
  
    function nextPage() {
      if (currentPage < totalPages - 1) {
        currentPage++
        renderGallery()
      }
    }
  
    function prevPage() {
      if (currentPage > 0) {
        currentPage--
        renderGallery()
      }
    }
  
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", prevPage)
      nextBtn.addEventListener("click", nextPage)
    }
  
    // Initial render
    renderGallery()
  
    // Update gallery on window resize
    window.addEventListener("resize", () => {
      const newItemsPerPage = window.innerWidth < 768 ? 1 : 4
  
      if (newItemsPerPage !== itemsPerPage) {
        const itemsPerPage = newItemsPerPage
        currentPage = 0
        renderGallery()
      }
    })
  })
  