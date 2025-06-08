document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling untuk anchor links
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault()
            const targetId = this.getAttribute("href").substring(1)
            const targetElement = document.getElementById(targetId)

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                })
            }
        })
    })

    // Simple hover effects
    const cards = document.querySelectorAll(".card, .plant-card, .team-member")
    cards.forEach((card) => {
        card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-3px)"
            this.style.transition = "transform 0.2s"
        })

        card.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)"
        })
    })

    // Simple navigation highlighting
    const currentPage = window.location.pathname.split("/").pop()
    const navLinks = document.querySelectorAll(".nav-links a")

    navLinks.forEach((link) => {
        const linkHref = link.getAttribute("href")
        if (linkHref === currentPage || (currentPage === "" && linkHref === "index.html")) {
            link.classList.add("active")
        } else {
            link.classList.remove("active")
        }
    })

    // Animasi fade in untuk elemen saat scroll (intersection observer sederhana)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1"
                entry.target.style.transform = "translateY(0)"
            }
        })
    }, observerOptions)

    // Terapkan animasi fade in ke elemen-elemen tertentu
    const animatedElements = document.querySelectorAll(".card, .plant-card, .benefit-item, .team-member")
    animatedElements.forEach((el) => {
        el.style.opacity = "0"
        el.style.transform = "translateY(20px)"
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
        observer.observe(el)
    })

    // Efek parallax sederhana untuk hero section
    const hero = document.querySelector(".hero")
    if (hero) {
        window.addEventListener("scroll", () => {
            const scrolled = window.pageYOffset
            const rate = scrolled * -0.5
            hero.style.transform = `translateY(${rate}px)`
        })
    }

    // Auto-hide header saat scroll down
    let lastScrollTop = 0
    const header = document.querySelector("header")

    window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll down
            header.style.transform = "translateY(-100%)"
        } else {
            // Scroll up
            header.style.transform = "translateY(0)"
        }

        lastScrollTop = scrollTop
    })
})
