import Image from "next/image";
import { ViralEnquiry } from "./ViralEnquiry";
import "./enquire.css";

/* "Start a project": big type, the invitation on a slanted band and a
   photo cut into the band's shape on the left, the enquiry form on the
   right. `#contact` is the target of every "Start a project" link and the
   header's Contact. The team photo is from the current design's Unsplash
   set (the exact query next.config.ts allows). */
export function ViralContact() {
  return (
    <section id="contact" aria-labelledby="vd-enquire-title" className="vd-enquire">
      <div className="vd-enquire__inner">
        <div className="vd-enquire__intro">
          <h2 id="vd-enquire-title" className="vd-enquire__title">
            <span>Start a</span>{" "}
            <span className="vd-enquire__title-accent">project</span>
          </h2>
          <p className="vd-enquire__offer">Every brief starts with an audit</p>
          <p className="vd-enquire__lead">
            Tell us what you sell and where you want to grow. We&apos;ll look
            at your site, search and social, and come back with what we&apos;d
            do first.
          </p>
          <div className="vd-enquire__visual" aria-hidden="true">
            <span className="vd-enquire__band" />
            <figure className="vd-enquire__photo">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=90"
                alt=""
                fill
                sizes="(min-width: 1024px) 460px, 90vw"
                className="vd-enquire__img"
              />
            </figure>
          </div>
        </div>
        <ViralEnquiry />
      </div>
    </section>
  );
}
