import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Wraps a chunk of content and fades/slides it in the first time it scrolls
// into view. Uses IntersectionObserver instead of a scroll listener so it's
// cheap — we also disconnect the observer as soon as it has fired once,
// since we never need to hide the element again.
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      // threshold 0.12 = fire once ~12% of the element is visible; the
      // negative bottom rootMargin makes it trigger a bit before the
      // element hits the very bottom edge, so it doesn't feel late.
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-visible={visible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

// Reused at the top of pretty much every section: small gold "eyebrow"
// label, big serif title, thin gold underline, optional intro paragraph.
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={cn(
          "mt-4 text-4xl leading-[1.1] sm:text-5xl",
          tone === "dark" ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      <div className={cn("rule-gold mt-6", align === "center" && "mx-auto")} />
      {intro ? (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed",
            tone === "dark" ? "text-ink-foreground/70" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
