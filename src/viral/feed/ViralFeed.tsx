import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import { Bookmark, Heart, MessageCircle, Play, Send } from "@/viral/icons";
import { CONTACT_HREF, serviceImage } from "@/viral/viral";
import "@/viral/tag.css";
import "./feed.css";

/* The four formats, with the current design's own lines for them (its
   Creative chapter), and what each one is */
const FORMATS = [
  {
    name: "Reels",
    line: "Short, loud, shareable",
    detail: "Vertical video cut for the first second, captioned for the sound-off scroll.",
  },
  {
    name: "Carousels",
    line: "One swipe at a time",
    detail: "Step-by-step posts people save and send on, designed slide by slide.",
  },
  {
    name: "Motion graphics",
    line: "Ideas that move",
    detail: "Logos, offers and explainers animated for feed, story and ads.",
  },
  {
    name: "Ad creative",
    line: "Built to perform",
    detail: "Every size the platforms ask for, with variations to test which one sells.",
  },
] as const;

/* The icons down a post's right edge — no counts, nothing to make up */
function Actions() {
  return (
    <span className="vd-post__actions" aria-hidden="true">
      <Heart strokeWidth={2} />
      <MessageCircle strokeWidth={2} />
      <Send strokeWidth={2} />
      <Bookmark strokeWidth={2} />
    </span>
  );
}

/* One full-screen post: the account bar over the media, the caption and
   actions under it */
function Post({
  label,
  caption,
  sponsored = false,
  className = "",
  children,
}: {
  label: string;
  caption: string;
  sponsored?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`vd-post ${className}`}>
      {children}
      <div className="vd-post__bar">
        <span className="vd-post__avatar" />
        <span className="vd-post__handle">
          viraldigi
          {sponsored && <span className="vd-post__sponsored">Sponsored</span>}
        </span>
        <span className="vd-post__label">{label}</span>
      </div>
      <div className="vd-post__foot">
        <p className="vd-post__caption">{caption}</p>
        <Actions />
      </div>
    </div>
  );
}

/* Made for the feed: social media and social creative, shown on the screen
   they're made for. On signal blue, the copy and the four formats on the
   left; on the right a phone (the supplied iPhone frame over a CSS screen),
   tilted like the hero wall over a slanted yellow band, holding four
   full-screen posts — a reel, a carousel, a motion post and an ad. On wide
   screens the section pins and the feed scrolls inside the phone as the
   page scrolls, lighting up each format as its post arrives (CSS
   scroll-driven, transform and opacity only). On phones the feed is
   swipeable inside the phone. */
export function ViralFeed() {
  return (
    <section id="social" aria-labelledby="vd-feed-title" className="vd-feed">
      <div className="vd-feed__stage">
        <header className="vd-feed__head">
          <h2 id="vd-feed-title" className="vd-tag vd-feed__title">
            <span className="vd-tag__band">Made for</span>{" "}
            <span className="vd-tag__word">the feed</span>
          </h2>
          <p className="vd-feed__lead">
            Social media marketing and social creative, planned for the phone
            in your customer&apos;s hand.
          </p>
          <a className="vd-tag__button vd-feed__cta" href={CONTACT_HREF}>
            Start a project
          </a>
        </header>

        <div className="vd-feed__device">
          <span className="vd-feed__band" aria-hidden="true" />
          <div className="vd-phone">
          <div
            className="vd-phone__screen"
            tabIndex={0}
            role="region"
            aria-label="Sample feed: a reel, a carousel, a motion post and an ad"
          >
            <span className="vd-phone__island" aria-hidden="true" />
            <div className="vd-phone__feed">
              <Post label="Reel" caption="Short, loud, shareable.">
                <Image
                  src={serviceImage("social-creatives")}
                  alt=""
                  fill
                  sizes="340px"
                  className="vd-post__img"
                />
                <span className="vd-post__play" aria-hidden="true">
                  <Play fill="currentColor" strokeWidth={0} />
                </span>
              </Post>

              <Post label="Carousel" caption="One swipe at a time.">
                <Image
                  src={serviceImage("content-strategy")}
                  alt=""
                  fill
                  sizes="340px"
                  className="vd-post__img"
                />
                <span className="vd-post__count" aria-hidden="true">1/5</span>
                <span className="vd-post__dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
              </Post>

              <Post label="Motion" caption="Ideas that move." className="vd-post--motion">
                <span className="vd-post__type" aria-hidden="true">
                  Made to
                  <br />
                  spread<span className="vd-post__node" />
                </span>
              </Post>

              <Post label="Ad" caption="Built to perform." sponsored className="vd-post--ad">
                <Image
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=90"
                  alt=""
                  fill
                  sizes="340px"
                  className="vd-post__img"
                />
                <a href={CONTACT_HREF} className="vd-post__cta" tabIndex={-1}>
                  Shop now
                </a>
              </Post>
            </div>
          </div>
          <Image
            src="/viral/iphone-frame.png"
            alt=""
            width={1826}
            height={3720}
            sizes="(min-width: 1024px) 360px, 300px"
            className="vd-phone__frame"
          />
          </div>
        </div>

        <ol className="vd-feed__formats">
          {FORMATS.map((format, i) => (
            <li
              key={format.name}
              className="vd-format"
              style={{ "--k": i } as CSSProperties}
            >
              <h3 className="vd-format__name">{format.name}</h3>
              <p className="vd-format__line">{format.line}</p>
              <p className="vd-format__detail">{format.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
