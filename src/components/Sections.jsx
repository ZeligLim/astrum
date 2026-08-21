import { ArrowDownRight, ArrowUpRight, CircleArrowRight, MoveRight, Sparkles } from "lucide-react";
import { useState } from "react";
import logo from "../assets/astrum-logo.svg";
import { offerings, processSteps, projects, socials, studio, testimonial } from "../data/site";
import { ProjectVisual } from "./ProjectVisual";
import { Button } from "./ui/Button";

export function Hero({ onProjectStart }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy reveal">
        <p className="brand-hero">Astrum</p>
        <h1>
          Websites that make
          <br />
          <em>the right impression.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            We design and build thoughtful digital homes for founders and teams with something
            meaningful to say.
          </p>
          <Button onClick={onProjectStart}>
            Tell us about your project <ArrowDownRight size={17} />
          </Button>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="sun" />
        <div className="arch arch-back" />
        <div className="arch arch-front" />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
      </div>
    </section>
  );
}

export function Introduction() {
  return (
    <section className="intro section-pad">
      <div className="section-label">[ Our point of view ]</div>
      <h2>
        Your website should feel like
        <br />
        the best version of your business.
      </h2>
      <div className="intro-grid">
        <p>
          Not louder. Not more complicated. Just unmistakably you—built with enough care that
          visitors can feel it in the details.
        </p>
        <a className="text-link" href="#services">
          How we work <MoveRight size={18} />
        </a>
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="work section-pad">
      <div className="section-heading">
        <div>
          <div className="section-label">[ Selected work ]</div>
          <h2>
            A few good
            <br />
            first impressions.
          </h2>
        </div>
        <a className="text-link work-link" href="#contact">
          See what’s possible <MoveRight size={18} />
        </a>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <article className={`project project-${project.visual}`} key={project.id} id={project.id}>
            <div className={`project-image ${project.visual}`} aria-hidden="true">
              <ProjectVisual visual={project.visual} />
            </div>
            <div className="project-body">
              <div className="project-kicker">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.tag}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-client">{project.client}</p>
              <p className="project-summary">{project.summary}</p>
              <ul className="project-scope">
                {project.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="project-outcome">{project.outcome}</p>
              <a className="text-link work-link" href="#contact">
                Start a similar project <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="services">
      <div className="service-sticky">
        <div className="section-label">[ What we do ]</div>
        <h2>
          Less process.
          <br />
          More progress.
        </h2>
        <p>One focused team from first thought to final launch.</p>
      </div>
      <div className="service-list">
        {offerings.map(([number, title, text]) => (
          <div className="service-row" key={number}>
            <span>{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            <CircleArrowRight size={25} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="process section-pad">
      <div className="section-label">[ The Astrum way ]</div>
      <div className="process-head">
        <h2>
          Good work starts
          <br />
          with good questions.
        </h2>
        <p>
          We keep the work direct, collaborative, and surprisingly enjoyable. No mystery decks. No
          endless handoffs.
        </p>
      </div>
      <div className="steps">
        {processSteps.map(([number, title, text]) => (
          <div key={number}>
            <b>{number}</b>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Quote() {
  return (
    <section className="quote">
      <Sparkles size={23} />
      <blockquote>“{testimonial.quote}”</blockquote>
      <p>
        {testimonial.name}, {testimonial.role}
      </p>
    </section>
  );
}

export function Contact({ onSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    if (error) setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and a short note.");
      return;
    }

    const text = `Hi Astrum, I'd like to discuss a project.

Name: ${name}
Email: ${email}
Project Notes: ${message}`;

    const url = `https://wa.me/353894104660?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onSuccess?.();
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div>
        <div className="section-label">[ Let’s make something ]</div>
        <h2>
          Have a good
          <br />
          <em>feeling about this?</em>
        </h2>
        <p className="contact-aside">
          {studio.location}
          <br />
          <a href={`mailto:${studio.email}`}>{studio.email}</a>
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
          />
        </label>
        <label>
          <span>Project notes</span>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={update("message")}
            placeholder="What are you building, and when do you want to launch?"
          />
        </label>
        {error && (
          <span className="notice notice-error" role="alert">
            {error}
          </span>
        )}
        <Button variant="light" type="submit">
          Start a conversation <ArrowUpRight size={17} />
        </Button>
      </form>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <a className="brand" href="#top">
        <img src={logo} alt="Astrum" width="144" height="35" />
      </a>
      <p>© {new Date().getFullYear()} {studio.name}</p>
      <div>
        {socials.map((item) => {
          const external = item.href.startsWith("http");
          return (
            <a
              key={item.label}
              href={item.href}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </footer>
  );
}
