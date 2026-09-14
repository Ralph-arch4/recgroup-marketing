import { numbers } from "@/content/site";
import CountUp from "./CountUp";
import DraftNotice from "./DraftNotice";
import Reveal from "./Reveal";

export default function Numbers() {
  return (
    <section className="relative py-20 md:py-28" style={{ background: "var(--ink-2)", borderBlock: "1px solid var(--line)" }}>
      <div className="shell">
        <Reveal>
          <DraftNotice text="Numeri dimostrativi — da confermare" />
          <p className="eyebrow">{numbers.eyebrow}</p>
          <h2 className="display mt-4 max-w-2xl" style={{ fontSize: "clamp(1.9rem, 4.6vw, 3.2rem)" }}>
            {numbers.title}
          </h2>
        </Reveal>

        <dl className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {numbers.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="hairline pt-5">
                <dt className="display text-[clamp(2.2rem,6vw,3.6rem)]" style={{ color: "var(--flame)" }}>
                  <CountUp to={item.value} suffix={item.suffix} />
                </dt>
                <dd
                  className="mt-2 text-[11px] font-medium uppercase tracking-[0.16em]"
                  style={{ color: "var(--paper-dim)" }}
                >
                  {item.label}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
