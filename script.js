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

  // Team Members
  const teamData = [
    {
      name: "James Richardson",
      position: "Managing Partner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "With over 25 years of experience in corporate law, James leads our firm with distinction and has represented clients in landmark cases across Nigeria.",
    },
    {
      name: "Sarah Okonkwo",
      position: "Senior Partner, Litigation",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Sarah specializes in complex litigation and dispute resolution. Her strategic approach has earned her recognition as one of Nigeria's top litigators.",
    },
    {
      name: "Michael Adeyemi",
      position: "Partner, Corporate Law",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Michael's expertise in mergers and acquisitions has helped numerous businesses navigate complex transactions and corporate restructuring.",
    },
    {
      name: "Amina Ibrahim",
      position: "Partner, Real Estate",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      bio: "Amina has extensive experience in real estate law, handling high-profile property transactions and development projects throughout Nigeria.",
    },
    {
      name: "David Olatunji",
      position: "Associate, Commercial Law",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      bio: "David specializes in commercial contracts and business advisory, helping clients establish solid legal foundations for their enterprises.",
    },
    {
      name: "Grace Nwachukwu",
      position: "Associate, Family Law",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      bio: "Grace brings compassion and expertise to family law matters, handling divorce, custody, and inheritance cases with sensitivity and professionalism.",
    },
    {
      name: "Emmanuel Bello",
      position: "Associate, Constitutional Law",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      bio: "Emmanuel's passion for constitutional rights has driven his work in public interest litigation and administrative law throughout his career.",
    },
  ]

  const teamGrid = document.getElementById("team-grid")

  function renderTeam() {
    if (!teamGrid) return

    teamGrid.innerHTML = ""

    teamData.forEach((member) => {
      const teamMember = document.createElement("div")
      teamMember.className = "team-member"

      teamMember.innerHTML = `
        <div class="team-img-container">
          <img src="${member.image}" alt="${member.name}" class="team-img">
        </div>
        <div class="team-info">
          <h3>${member.name}</h3>
          <p class="position">${member.position}</p>
          <p class="bio">${member.bio}</p>
          <div class="team-social">
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fas fa-envelope"></i></a>
          </div>
        </div>
      `

      teamGrid.appendChild(teamMember)
    })
  }

  // Initial render of team
  renderTeam()
})
