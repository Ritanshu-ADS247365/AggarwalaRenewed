import type { ReactNode } from "react";
import { Logo } from "@/components/Logo";
import { SiteFooter } from "@/components/SiteFooter";
import {
  IconBulb,
  IconClock,
  IconCode,
  IconMonitor,
  IconPeople,
  IconPhone,
  IconTrend,
} from "@/components/icons";
import { site } from "@/lib/site";

const services: { title: string; icon: ReactNode; text: string }[] = [
  {
    title: "IT & ITES",
    icon: <IconMonitor />,
    text: "A good upkeep of your gadget helps you to achieve your professional goals even faster. Be it an organization or an individual, if your gadgets are performing at optimal efficiency, you will have better results. In the era where you are living with your gadgets, its regular care must be part of your daily regime. While we understand your needs well, we would love to assist you in all your daily needs.",
  },
  {
    title: "Software development",
    icon: <IconCode />,
    text: "Any hardware, be it a gadget or the desktop or your PC or notepad, is only alive when its software is working to the best of its capacity. This will include regular updates and regular upgrading to the newer versions. Getting the best results for gadget performance is a top-notch priority for our team.",
  },
  {
    title: "Mobile app",
    icon: <IconPhone />,
    text: "With the increasing user interface towards mobiles, almost all the applications are trying to get the eyeballs rolling with a seamless app. With the apps coming in from all the industries be it finance, gaming, banking, reading, or service industry. Everyone operates through apps. Right guidance will help in serving you right.",
  },
  {
    title: "Digital marketing",
    icon: <IconTrend />,
    text: "Your official visiting card is your website. By all means, anyone who would like to connect with you will have a look at your website. At the same time, it is vital to understand what kind of website is ideal for your organization. The work doesn’t end there. With your website the SEO, optimization, and Google ranking are equally relevant.",
  },
];

const values = [
  {
    title: "Professionalism",
    text: "Professionalism comes from work ethics. It comes from doing things right at all times. We have been informing our team to make them understand how to speak, to be helpful, and to advise right to our clients, subscribers, and consumers, even those who come with inquiries.",
  },
  {
    title: "24x7 support",
    text: "The services are of good worth when they are being done at the right time. Or during those times, when you need it. It’s of no use to avail services. We understand these concerns. Therefore, you will find us in your support 24x7. Ensuring the right support at the right time.",
  },
  {
    title: "Reliability",
    text: "The right relationship has to be created among the clients and our work ethics. That is how we can create a reliable connection with our clients and customers. Ensuring the right base towards long-term reliable relationships.",
  },
];

const promises = [
  {
    title: "Your Tech-Partner",
    icon: <IconPeople size={32} />,
    text: "A reliable partner can ease out a lot of your concerns. Be it corporate or an individual, when you have services that need to be delivered on time. We are there to serve you with the right technology answer.",
  },
  {
    title: "Expert Opinion",
    icon: <IconBulb size={32} />,
    text: "Our core aim while serving is to deliver you services where the guidance you receive is gathered from the experts that we have.",
  },
  {
    title: "In-time Query Handling",
    icon: <IconClock size={32} />,
    text: "With every task assigned to us, we would love to define the right period, that will help in having clear communication and developing a professional relationship.",
  },
];


export default function HomePage() {
  return (
    <>
      <header className="hero">
        <svg
          aria-hidden="true"
          viewBox="0 0 600 600"
          className="hero__art"
          fill="none"
          stroke="#2F4C8C"
          strokeWidth="1.2"
        >
          <circle cx="300" cy="300" r="90" />
          <circle cx="300" cy="300" r="150" />
          <circle cx="300" cy="300" r="210" />
          <circle cx="300" cy="300" r="270" />
          <line x1="300" y1="20" x2="300" y2="580" />
          <line x1="20" y1="300" x2="580" y2="300" />
          <line x1="100" y1="100" x2="500" y2="500" />
          <line x1="500" y1="100" x2="100" y2="500" />
          <circle cx="300" cy="150" r="6" fill="#7FA4FF" stroke="none" />
          <circle cx="450" cy="300" r="6" fill="#7FA4FF" stroke="none" />
          <circle cx="195" cy="405" r="6" fill="#7FA4FF" stroke="none" />
        </svg>

        <div className="container hero__inner">
          <div className="topbar">
            <a href={`mailto:${site.email}`}>Email: {site.email}</a>
          </div>

          <nav className="nav" aria-label="Main">
            <Logo />
            <div className="nav__links">
              <a href="#services">Services</a>
              <a href="#about">About us</a>
              <a href="#values">Values</a>
              <a href="#contact" className="btn btn--light">
                Contact us
              </a>
            </div>
          </nav>

          <div className="hero__copy">
            <h1 className="hero__title">Befriend with technology</h1>
            <p className="hero__lead">
              {site.tagline}. A reliable tech partner for every home and
              business.
            </p>
            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary">
                Talk to our team
              </a>
              <a href="#services" className="btn btn--ghost">
                Our services
              </a>
            </div>
          </div>

          <div className="stats">
            <div>
              <div className="stat__num">24x7</div>
              <div className="stat__label">Support when you need it</div>
            </div>
            <div>
              <div className="stat__num">4</div>
              <div className="stat__label">Service lines under one roof</div>
            </div>
            <div>
              <div className="stat__num">US</div>
              <div className="stat__label">Established in the United States</div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="container section section--first">
          <div className="panels">
            <div className="panel">
              <h2>Conquer the world with us</h2>
              <p>
                Your Tech-Partner. A reliable partner can ease out a lot of your
                concerns. Be it corporate or an individual, when you have
                services that need to be delivered on time. We are there to
                serve you with the right technology answer.
              </p>
            </div>
            <div className="panel">
              <h2>Why Aggarwala</h2>
              <p>
                Your Tech-Partner. A reliable partner can ease out a lot of your
                concerns. Be it corporate or an individual, when you have
                services that need to be delivered on time.
              </p>
              <ul>
                <li>Reliable partner can ease out.</li>
                <li>You have services that need the right technology answer.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="container section">
          <h2>Our services</h2>
          <div className="cards cards--2">
            {services.map((s) => (
              <article key={s.title} className="card">
                <div className="card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band" aria-label="What drives us">
          <div className="container band__inner">
            <span>Growth Hackers</span>
            <span>Passionate Engineers</span>
            <span>Thoughtful Strivers</span>
          </div>
        </section>

        <section id="about" className="container section">
          <div className="about">
            <div className="about__title">
              <h2>About us</h2>
            </div>
            <div className="about__body">
              <p>
                We are a team that is passionate about the solutions. Ensuring
                excellent technology support to every household and business.
                Expert advice to enhance your gadget experience. We will provide
                you with prompt and reliable support. By implementing effective
                and timely communication. With this zeal, our team will be there
                in your journey towards growth.
              </p>
              <p>
                We execute technology-driven solutions. These include IT &amp;
                ITES, Software development, Mobile Apps, and Digital Marketing.
                Being established in the US we understand how to cater well to
                the needs of citizens. Having a better understanding gives us
                the right approach to assist our customers, clients, and
                subscribers.
              </p>
            </div>
          </div>
        </section>

        <section id="values" className="container section">
          <div className="values">
            {values.map((v) => (
              <div key={v.title} className="value">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container section">
          <h2>What clients say</h2>
          <figure className="quote">
            <blockquote>
              We have a well-explained team at Aggarwala. They have informed us
              about the plan that we have to take. Services we wish to avail
              have been informed us. This helps us in taking the right plan
              with the right decision.
            </blockquote>
            <figcaption>Richard</figcaption>
          </figure>
        </section>

        <section className="container section">
          <h2 className="narrow-title">
            Rising-up and connecting with new tech solutions!
          </h2>
          <p className="lead">
            Our lives are more simplified and advanced with the help of tech
            solutions. Each advancement or betterment in the technology brings
            smoother ways of delivering in the industry. With this mission, we
            would be bringing the right solutions that will make us live a
            better life.
          </p>
          <div className="cards cards--3">
            {promises.map((p) => (
              <div key={p.title} className="card card--small">
                <div className="card__glyph">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
