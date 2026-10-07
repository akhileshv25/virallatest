import { CONTACT_HREF } from "@/viral/viral";
import "@/viral/tag.css";
import "./faq.css";

/* The questions a business asks before hiring an agency, answered from what
   the page already says (the services, the five steps, the form) — no
   promises the agency hasn't made. */
const FAQS = [
  {
    q: "Where do we start?",
    a: "With an audit of your site, search, social and ads. It shows what's working and what isn't, and the plan is built from that — so you only pay for the services your numbers say you need.",
  },
  {
    q: "Do I need all ten services?",
    a: "No. Most brands start with two or three — often SEO or ads plus the site they lead to — and add more once those pay back. Because one team runs them all, adding a service later doesn't mean briefing a new agency.",
  },
  {
    q: "How soon will I see results?",
    a: "Paid search and social ads can bring enquiries within weeks of launch. SEO and content compound more slowly, usually over several months. The plan sets out what to expect from each channel before anything goes live.",
  },
  {
    q: "How will I know it's working?",
    a: "Every number sits in one growth dashboard, and we go through it with you each month: what moved, why, and what we'll change next.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the services and how much you spend on ads. Tell us your monthly budget in the form and we'll come back with a plan that fits it.",
  },
];

/* FAQ in the Viral look: the title set like the wordmark's tag, then the
   questions as a hairline list of native disclosures — they open with a
   click or Enter and need no JavaScript. Answers are on the page for
   search engines either way. */
export function ViralFaq({
  items = FAQS,
  lead = "What brands usually ask before they start. Anything else, ask us in the form below.",
}: {
  items?: ReadonlyArray<{ q: string; a: string }>;
  lead?: string;
}) {
  return (
    <section id="faq" aria-labelledby="vd-faq-title" className="vd-faq">
      <div className="vd-faq__inner">
        <div className="vd-faq__intro">
          <h2 id="vd-faq-title" className="vd-tag vd-faq__title">
            <span className="vd-tag__band">Good</span>{" "}
            <span className="vd-tag__word">questions</span>
          </h2>
          <p className="vd-faq__lead">
            {lead}
          </p>
          <a className="vd-tag__button vd-faq__cta" href={CONTACT_HREF}>
            Ask a question
          </a>
        </div>
        <div className="vd-faq__list">
          {items.map(({ q, a }) => (
            <details key={q} className="vd-faq__item">
              <summary className="vd-faq__q">
                {q}
                <span className="vd-faq__icon" aria-hidden="true" />
              </summary>
              <p className="vd-faq__a">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
