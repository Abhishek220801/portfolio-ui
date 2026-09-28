import { type FormEvent, useEffect, useState } from "react"
import {
  ArrowUp,
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
  "https://wa.me/+916283664507?text=Hi%20Abhishek%2C%20I%27d%20love%20to%20discuss%20a%20role%20with%20you."

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
  "TypeScript",
  "React",
  "Node.js",
  "JavaScript",
  "Next.js",
  "Tailwind",
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
  "BullMQ"
]

const projects = [
  {
    number: "01",
    type: "BUSINESS CRM",
    title: "crm.techsunset.com",
    url: "https://crm.techsunset.com",
    image: "/images/projects/crm.png",
    description:
      "Customer relationship management software for customers, leads, sales workflows, search, dashboards, and customer interactions.",
    tags: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    frontendWork: [
      "Customer list and customer details",
      "Customer add and edit forms",
      "Lead management screens",
      "Search and filtering",
      "Dashboard and basic data display",
      "API integration with the backend",
      "Form validation and error handling",
    ],
    backendWork: [
      "CRUD APIs for customer data",
      "Lead management",
      "Searching customers and leads",
      "Updating customer status",
      "User authentication and authorization",
      "Request validation and error handling",
      "Connecting APIs with MongoDB",
    ],
  },
  {
    number: "02",
    type: "ACCOUNTING & INVOICING",
    title: "books.techsunset.com",
    url: "https://books.techsunset.com",
    image: "/images/projects/books.png",
    description:
      "Accounting and invoicing software covering invoices, payments, expenses, customers, vendors, GST, and financial reporting.",
    tags: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    frontendWork: [
      "Dashboard and financial summary",
      "Invoice list and invoice creation forms",
      "Customer and vendor management",
      "Expense tracking screens",
      "Payment tracking",
      "GST summary and reports",
      "API integration, form validation and error handling",
    ],
    backendWork: [
      "Creating, updating, deleting and getting invoices",
      "Customer and vendor management",
      "Expense management",
      "Payment tracking",
      "GST and financial report data",
      "Request validation and error handling",
      "Connecting APIs with MongoDB",
    ],
  },
  {
    number: "03",
    type: "HR MANAGEMENT",
    title: "hr.techsunset.com",
    url: "https://hr.techsunset.com",
    image: "/images/projects/hr.png",
    description:
      "Human resource management software for employees, attendance, leaves, onboarding, departments, holidays, and HR reports.",
    tags: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    frontendWork: [
      "Employee list and employee details",
      "Employee add and edit forms",
      "Attendance management screens",
      "Leave request and approval screens",
      "Department and holiday management",
      "Onboarding screens",
      "HR reports and dashboard",
      "API integration, form validation and error handling",
    ],
    backendWork: [
      "Employee CRUD operations",
      "Attendance management",
      "Leave management",
      "Department and holiday management",
      "Employee onboarding",
      "HR reports and data",
      "Authentication, validation and error handling",
      "Connecting APIs with MongoDB",
    ],
  },
  {
    number: "04",
    type: "INVENTORY MANAGEMENT",
    title: "inventory.techsunset.com",
    url: "https://inventory.techsunset.com",
    image: "/images/projects/inventory.png",
    description:
      "Inventory management software for products, stock, orders, suppliers, warehouses, fulfillment, and stock reporting.",
    tags: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    frontendWork: [
      "Product list and product details",
      "Add and edit product forms",
      "Inventory and stock management",
      "Order management screens",
      "Supplier management",
      "Warehouse management",
      "Fulfillment and stock reports",
      "API integration, search and filtering",
    ],
    backendWork: [
      "Product CRUD operations",
      "Stock and inventory management",
      "Sales order management",
      "Supplier and purchase order management",
      "Warehouse management",
      "Stock reservation and stock updates",
      "Request validation and error handling",
      "Connecting APIs with MongoDB",
    ],
  },
  {
    number: "05",
    type: "PROJECT MANAGEMENT",
    title: "project.techsunset.com",
    url: "https://project.techsunset.com",
    image: "/images/projects/project.png",
    description:
      "Project and task management software covering Kanban workflows, deadlines, milestones, workload, progress, and reporting.",
    tags: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    frontendWork: [
      "Project list and project details",
      "Task creation and task management",
      "Kanban board",
      "Task status and priority",
      "Calendar and deadlines",
      "Milestone and project progress",
      "Team workload and reports",
      "API integration and form validation",
    ],
    backendWork: [
      "Project CRUD operations",
      "Task and subtask management",
      "Assigning tasks to team members",
      "Task status and priority management",
      "Milestone and deadline management",
      "Team workload and time tracking",
      "Request validation and error handling",
      "Connecting APIs with MongoDB",
    ],
  },
  {
    number: "06",
    type: "SCHOOL MANAGEMENT",
    title: "tscampus.com",
    url: "https://tscampus.com",
    image: "/images/projects/tscampus.png",
    description:
      "School management system for admissions, students, attendance, fees, exams, staff, communication, dashboards, and reports.",
    tags: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
    frontendWork: [
      "Student list and student details",
      "Admission and student forms",
      "Attendance management",
      "Fee management and payment screens",
      "Class, section and subject management",
      "Exam and report card screens",
      "Staff and HR management",
      "Dashboard, reports and notifications",
      "API integration, form validation and error handling",
    ],
    backendWork: [
      "Student and admission management",
      "Attendance management",
      "Fee and payment management",
      "Class, section and subject management",
      "Exam and result management",
      "Staff and employee management",
      "Notifications and communication",
      "Authentication, validation and error handling",
      "Connecting APIs with MongoDB",
    ],
  },
]

const blogPosts = [
  {
    number: "01",
    category: "BACKEND",
    title: "Message Brokers vs Message Queues",
    readTime: "4 min read",
    excerpt:
      "A practical breakdown of queues, brokers, producers, consumers, delivery guarantees, and where Kafka, RabbitMQ, and BullMQ fit.",
    content:
      "A message queue is primarily about buffering work between producers and consumers. A message broker is a broader messaging system that can route, transform, persist, and deliver messages between multiple participants. The useful engineering question is not which term sounds better, but which delivery, ordering, retry, and scaling guarantees your workload actually needs.",
  },
  {
    number: "02",
    category: "DISTRIBUTED SYSTEMS",
    title: "How Redis Pub/Sub Fits Into a Scaled Backend",
    readTime: "5 min read",
    excerpt:
      "What changes when one Node.js server becomes multiple instances — and why in-memory events stop being enough.",
    content:
      "With multiple backend instances, an event emitted inside one process is invisible to the others. Redis Pub/Sub gives those instances a shared event channel. It works well for transient real-time notifications, but it is not a durable event log, so systems that require replay or guaranteed processing need a different pattern.",
  },
  {
    number: "03",
    category: "AWS",
    title: "EC2 vs Serverless: Choosing the Runtime",
    readTime: "4 min read",
    excerpt:
      "A deployment-focused comparison of EC2 and serverless workloads, including control, scaling, operations, and cost considerations.",
    content:
      "EC2 gives you control over the operating environment, networking, processes, and long-running workloads. Serverless reduces infrastructure management and can scale execution around requests or events. The decision should follow workload characteristics, operational requirements, startup behaviour, and the amount of infrastructure you actually want to own.",
  },
  {
    number: "04",
    category: "NODE.JS",
    title: "What Actually Happens When Node.js Handles a Timer?",
    readTime: "5 min read",
    excerpt:
      "Timers, the event loop, libuv, and why setTimeout(0) does not mean 'run immediately'.",
    content:
      "Node.js timers register callbacks that become eligible after their delay rather than interrupting currently executing JavaScript. The event loop and libuv coordinate when callbacks can be processed. A zero-millisecond timeout therefore means 'as soon as the runtime can process it after the relevant phases and work', not 'right now'.",
  },
  {
    number: "05",
    category: "DATABASES",
    title: "MongoDB Indexes: The Performance Trade-Off",
    readTime: "4 min read",
    excerpt:
      "Why indexes speed up reads, when compound indexes matter, and what you pay for every index you add.",
    content:
      "An index gives the database an additional structure for locating documents without scanning the entire collection. That can dramatically reduce read work, but indexes consume storage and add write and maintenance overhead. Good indexing starts from real query patterns rather than adding indexes to every field.",
  },
  {
    number: "06",
    category: "ARCHITECTURE",
    title: "Designing APIs That Survive Growth",
    readTime: "6 min read",
    excerpt:
      "A practical checklist for validation, pagination, authentication, error handling, idempotency, and observability.",
    content:
      "A production API needs more than routes that return JSON. Request validation, consistent errors, authentication and authorization, pagination, rate controls, idempotency where required, logging, and useful metrics make the contract resilient as traffic and feature count grow. The goal is predictable behaviour under both normal and failure conditions.",
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
          {["Home", "Works", "Blog", "Resume", "Contact"].map((item) => (
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
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>{project.type}</span>
                </div>

                <div className="project-media">
                  <img
                    src={project.image}
                    alt={`${project.title} full page project preview`}
                    loading="lazy"
                  />
                  <span className="project-scroll-hint" aria-hidden="true">
                    Hover to explore ↓
                  </span>
                  <a
                    className="project-preview-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    Open project <ArrowUpRight size={15} />
                  </a>
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

                    <details className="project-work">
                      <summary>
                        What I worked on <ChevronDown size={14} />
                      </summary>

                      <div className="project-work-grid">
                        <div>
                          <span>Frontend</span>
                          <ul>
                            {project.frontendWork.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <span>Backend</span>
                          <ul>
                            {project.backendWork.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </details>
                  </div>

                  <a
                    className="project-arrow"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={25} />
                  </a>
                </div>

                <div className="project-line" />
              </article>
            ))}
          </div>
        </section>

        <section className="blog section-pad" id="blog">
          <div className="section-heading">
            <div>
              <span className="section-index">02 / RECENT WRITING</span>

              <h2>
                Short reads.
                <br />
                <em>Useful ideas.</em>
              </h2>
            </div>

            <p>
              Practical notes on full-stack engineering, distributed systems,
              AWS, Node.js, databases, and the lessons behind shipping software.
            </p>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article className="blog-card" key={post.number}>
                <div className="blog-card-top">
                  <span>{post.number}</span>
                  <span>{post.category}</span>
                </div>

                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>

                <details>
                  <summary>
                    Read short <ArrowUpRight size={15} />
                  </summary>
                  <div className="blog-content">
                    <p>{post.content}</p>
                  </div>
                </details>

                <div className="blog-meta">
                  <span>{post.readTime}</span>
                  <span>Abhishek Sankhwar</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-pad" id="resume">
          <div className="about-intro">
            <span className="section-index">03 / THE SHORT VERSION</span>

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
              <span className="section-index">04 / WHAT I BRING</span>

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
            <span className="section-index">05 / THE TOOLKIT</span>

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
              <span className="section-index">06 / START A CONVERSATION</span>

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
          <button onClick={() => scrollTo("home")} aria-label="Back to top">
            <ArrowUp size={18} />
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
