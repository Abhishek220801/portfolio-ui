import { type FormEvent, useEffect, useState } from "react"
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Download,
  // Github,
  // Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  Send,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react"
import axios from "axios"

const whatsappUrl =
  "https://wa.me/916283664507?text=Hi%20Abhishek%2C%20I%27d%20love%20to%20discuss%20a%20role%20with%20you."

const resumePath = "/abhishek-sankhwar-resume.txt"

const heroSkills = [
  "Gen AI",
  "JavaScript",
  "React",
  "Tailwind",
  "Next.js",
  "Node.js",
  "Express",
  "CI/CD",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "AWS Cloud",
  "Redis",
  "Kafka",
  "RabbitMQ",
  "BullMQ",
]

const allSkills = [
  "Gen AI",
  "JavaScript",
  "React",
  "Tailwind",
  "Next.js",
  "Node.js",
  "Express",
  "CI/CD",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "AWS Cloud",
  "Redis",
  "Kafka",
  "RabbitMQ",
  "BullMQ",
]

const projects = [
  {
    number: "01",
    type: "AI / FULL STACK",
    title: "AI Teacher",
    description:
      "An LLM-powered learning platform that turns complex topics into structured, personalized learning paths.",
    tags: ["MERN", "LLMs", "Streaming"],
    accent: "lime",
  },
  {
    number: "02",
    type: "CLOUD INFRASTRUCTURE",
    title: "MediaFlow",
    description:
      "A resilient serverless video pipeline built for fast, observable multi-bitrate HLS processing.",
    tags: ["AWS", "Lambda", "EventBridge"],
    accent: "cyan",
  },
  {
    number: "03",
    type: "REAL-TIME PRODUCT",
    title: "Besties",
    description:
      "A low-latency communication platform bringing live presence, messaging, and video into one calm interface.",
    tags: ["WebSockets", "WebRTC", "Docker"],
    accent: "amber",
  },
]

const services = [
  {
    icon: Code2,
    title: "Product engineering",
    text: "From the first screen to the last API, I build full-stack experiences people enjoy using.",
  },
  {
    icon: Sparkles,
    title: "AI-native products",
    text: "Practical LLM workflows that feel fast, thoughtful, and genuinely useful in the product.",
  },
  {
    icon: Workflow,
    title: "Reliable systems",
    text: "Event-driven architecture, clean APIs, and delivery pipelines designed for confidence at scale.",
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle")

  const SERVER = import.meta.env.VITE_SERVER

  useEffect(() => {
    if (sessionStorage.getItem("resume-downloaded")) return

    const timer = window.setTimeout(() => {
      const link = document.createElement("a")
      link.href = resumePath
      link.download = "Abhishek-Sankhwar-Resume.txt"

      document.body.appendChild(link)
      link.click()
      link.remove()

      sessionStorage.setItem("resume-downloaded", "true")
    }, 900)

    return () => window.clearTimeout(timer)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })

    setMenuOpen(false)
  }

  // Contact form submission
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  setFormStatus("sending")

  try {
    const response = await axios.post(
      `${SERVER}/api/contact`,
      formState,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )

    if (response.status !== 200) {
      throw new Error("Failed to send message")
    }

    setFormState({
      name: "",
      email: "",
      message: "",
    })

    setFormStatus("success")
  } catch (error) {
    console.error("Contact form error:", error)
    setFormStatus("error")
  }
}

  return (
    <div className="site-shell">
      <header className="topbar">
        <button
          className="brand"
          onClick={() => scrollTo("home")}
          aria-label="Back to top"
        >
          <span className="brand-mark">AS</span>

          <span>
            Abhishek<span className="brand-dot">.</span>
          </span>
        </button>

        <nav
          className={menuOpen ? "nav-links is-open" : "nav-links"}
          aria-label="Primary navigation"
        >
          {["Home", "Works", "Resume", "Contact"].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())}>
              {item}
            </button>
          ))}
        </nav>

        <button className="nav-cta" onClick={() => scrollTo("contact")}>
          Hire me <ArrowUpRight size={16} />
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-grid" />

          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="status-dot" />
              Available for select opportunities{" "}
              <span className="eyebrow-line" />
            </div>

            <p className="hero-kicker">
              REMOTE FULL STACK DEVELOPER <span>•</span> BENGALURU, INDIA
            </p>

            <h1>
              I build digital
              <br />
              <em>momentum.</em>
            </h1>

            <p className="hero-lead">
              I&apos;m Abhishek — a full stack developer who turns ambitious
              ideas into fast, clear, and dependable products.
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary"
                onClick={() => scrollTo("works")}
              >
                See my work <MoveUpRight size={17} />
              </button>

              <a className="button button-ghost" href={resumePath} download>
                Download resume <Download size={16} />
              </a>
            </div>

            <div className="hero-proof">
              <strong>2.5+</strong>

              <span>
                years turning
                <br />
                ideas into impact
              </span>

              <i />

              <strong>17</strong>

              <span>
                tools in my
                <br />
                daily toolkit
              </span>
            </div>
          </div>

          <div className="hero-visual reveal delay-one">
            <div className="portrait-wrap">
              <div className="portrait-glow" />

              <img
                src="/images/file_00000000c9988210a2bf2d6d3c434bcf.png"
                alt="Abhishek Sankhwar"
              />

              <span className="portrait-label">
                01 / 03
                <br />
                <small>THE BUILDER</small>
              </span>
            </div>

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="floating-card">
              <span className="card-icon">
                <Zap size={16} />
              </span>

              <span>
                <b>Building with intent</b>
                <small>Good systems feel invisible.</small>
              </span>
            </div>
          </div>

          <div className="hero-skills">
            <span className="skills-label">
              MY DAILY TOOLS <small>17 tools I use to ship</small>
            </span>

            {heroSkills.map((skill) => (
              <span
                className={
                  [
                    "Gen AI",
                    "React",
                    "Node.js",
                    "PostgreSQL",
                    "AWS Cloud",
                  ].includes(skill)
                    ? "skill-pill is-featured"
                    : "skill-pill"
                }
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>

          <button className="scroll-cue" onClick={() => scrollTo("works")}>
            <span>Scroll to explore</span>
            <ChevronDown size={16} />
          </button>
        </section>

        <section className="marquee-strip" aria-label="Capabilities">
          <div className="marquee-track">
            {[
              "FULL STACK DEVELOPMENT",
              "AI-POWERED EXPERIENCES",
              "CLOUD ARCHITECTURE",
              "REAL-TIME SYSTEMS",
              "FULL STACK DEVELOPMENT",
              "AI-POWERED EXPERIENCES",
            ].map((text, index) => (
              <span key={`${text}-${index}`}>
                {text} <b>✳</b>
              </span>
            ))}
          </div>
        </section>

        <section className="works section-pad" id="works">
          <div className="section-heading">
            <div>
              <span className="section-index">01 / SELECTED WORK</span>

              <h2>
                Made to move
                <br />
                <em>the needle.</em>
              </h2>
            </div>

            <p>
              Not just shipped. Shaped with intention, built to perform, and
              designed to leave a mark.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article
                className={`project-card ${project.accent}`}
                key={project.number}
              >
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>

                <div className="project-body">
                  <div>
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="tag-row">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-arrow">
                    <ArrowUpRight size={25} />
                  </div>
                </div>

                <div className="project-line" />
              </article>
            ))}
          </div>
        </section>

        <section className="about section-pad" id="resume">
          <div className="about-intro">
            <span className="section-index">02 / THE SHORT VERSION</span>

            <h2>
              Technical depth.
              <br />
              <em>Human focus.</em>
            </h2>

            <p>
              I like the hard middle: turning fuzzy requirements into a crisp
              product, then making the underlying system sturdy enough to grow.
            </p>

            <button className="text-link" onClick={() => scrollTo("contact")}>
              Let&apos;s talk about your next build <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <span>EXPERIENCE</span>
              <span>2024 — NOW</span>
            </div>

            <div className="experience-role">
              <div className="company-logo">T</div>

              <div>
                <h3>Techsunset</h3>
                <p>Remote Full Stack Developer</p>
              </div>

              <span className="current-badge">
                <i /> Current
              </span>
            </div>

            <p className="experience-copy">
              Since April 2024, I&apos;ve been helping a Bengaluru-based
              software company build and scale thoughtful products across
              frontend, backend, and cloud infrastructure.
            </p>

            <div className="experience-points">
              <span>
                <Check size={14} /> Product ownership
              </span>

              <span>
                <Check size={14} /> Distributed collaboration
              </span>

              <span>
                <Check size={14} /> Production delivery
              </span>
            </div>

            <a className="text-link" href={resumePath} download>
              View full resume <Download size={16} />
            </a>
          </div>
        </section>

        <section className="capabilities section-pad">
          <div className="section-heading compact">
            <div>
              <span className="section-index">03 / WHAT I BRING</span>

              <h2>
                A useful mix of
                <br />
                <em>craft &amp; clarity.</em>
              </h2>
            </div>
          </div>

          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <div className="service-card" key={title}>
                <Icon size={23} />

                <h3>{title}</h3>

                <p>{text}</p>

                <span className="service-number">
                  0
                  {services.findIndex((service) => service.title === title) + 1}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="toolkit section-pad">
          <div className="toolkit-heading">
            <span className="section-index">04 / THE TOOLKIT</span>

            <h2>
              Sharp tools.
              <br />
              <em>Strong outcomes.</em>
            </h2>

            <p>
              The technologies I reach for when the bar is high and the deadline
              is real.
            </p>
          </div>

          <div className="skill-cloud">
            {allSkills.map((skill, index) => (
              <span className={index < 4 ? "featured-skill" : ""} key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-inner">
            <div className="contact-copy">
              <span className="section-index">05 / START A CONVERSATION</span>

              <h2>
                Have a good
                <br />
                <em>problem?</em>
              </h2>

              <p>
                Tell me what you&apos;re building, what&apos;s getting in the
                way, or where you want to go next. I&apos;ll bring curiosity,
                clarity, and a bias toward shipping.
              </p>

              <div className="contact-details">
                <a href="mailto:abhishektechsunset@gmail.com">
                  <Mail size={17} />
                  abhishektechsunset@gmail.com
                </a>

                <span>
                  <MapPin size={17} />
                  Bengaluru, India · Remote worldwide
                </span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  required
                  minLength={2}
                  value={formState.name}
                  onChange={(event) =>
                    setFormState({
                      ...formState,
                      name: event.target.value,
                    })
                  }
                  placeholder="Your name"
                />
              </label>

              <label>
                Email
                <input
                  required
                  type="email"
                  value={formState.email}
                  onChange={(event) =>
                    setFormState({
                      ...formState,
                      email: event.target.value,
                    })
                  }
                  placeholder="you@company.com"
                />
              </label>

              <label>
                How can I help?
                <textarea
                  required
                  minLength={10}
                  value={formState.message}
                  onChange={(event) =>
                    setFormState({
                      ...formState,
                      message: event.target.value,
                    })
                  }
                  placeholder="Tell me a little about the role or project..."
                  rows={4}
                />
              </label>

              <button
                className="button button-primary form-submit"
                type="submit"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Send enquiry"}{" "}
                <Send size={16} />
              </button>

              {formStatus === "success" && (
                <p className="form-message success">
                  <Check size={15} /> Thanks — your message is on its way.
                </p>
              )}

              {formStatus === "error" && (
                <p className="form-message error">
                  Something went wrong. Please email me directly instead.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section-pad">
        <div className="footer-brand">
          <span className="brand-mark">AS</span>

          <span>
            Abhishek<span className="brand-dot">.</span>
          </span>
        </div>

        <p>Designed &amp; built with intention.</p>

        <div className="footer-links">
          {/* <a
            href="https://github.com/Abhishek220801"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://linkedin.com/in/abhishek-sankhwar"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a> */}

          <button onClick={() => scrollTo("home")} aria-label="Back to top">
            <ArrowUpRight size={18} />
          </button>
        </div>
      </footer>

      <a
        className="whatsapp-fab wa-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg width="27" height="27" viewBox="0 0 24 24" fill="white">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.41-1.35a9.85 9.85 0 0 0 4.63 1.17h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm0 17.85h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.78.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.4c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.42 5.84c0 4.55-3.71 8.25-8.26 8.25zm4.53-6.18c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.65.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.83-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.9 2.42 1.02 2.58.12.17 1.77 2.7 4.28 3.79.6.26 1.06.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z" />
        </svg>

        <span>Let&apos;s talk</span>
      </a>

      <a
        className="mobile-hire"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={18} />
        Hire me on WhatsApp
        <ArrowUpRight size={16} />
      </a>
    </div>
  )
}

export default App
