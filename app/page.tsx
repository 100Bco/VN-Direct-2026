import Navigation from "./components/Navigation";
import FactoryList from "./components/FactoryList";

export default function Home() {
  return (
    <>
      <Navigation />

      <header className="hero">
        <div className="hero-bg" aria-hidden="true"></div>
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="h-series">
          Build Better Series · 100B × LT Commercial Group · By Invitation Only
        </div>
        <div className="h-tag">May 30 – June 5, 2026</div>
        <h1 className="h-title">
          VIETNAM
          <br />
          <span className="g">DIRECT</span>
          <br />
          <span className="d">2026</span>
        </h1>
        <p className="h-kick">
          Source materials <strong>straight from the factory.</strong>
          <br />
          Cut 20–25% off your cost sheet. No middlemen.
        </p>
        <div className="h-pills">
          <div className="pill">
            <b>7 Days</b> · Ho Chi Minh City + Hanoi
          </div>
          <div className="pill">
            <b>12</b> Hand-Picked Factories
          </div>
          <div className="pill">
            <b>Limited Seats</b> · Vetted Attendees
          </div>
          <div className="pill">
            Hosted by <b>100B × LT Commercial Group</b>
          </div>
        </div>
        <a href="#apply" className="h-cta">
          Request Your Invitation →
        </a>
      </header>

      <section id="problem">
        <div className="ov">The Reality Right Now</div>
        <h2 className="st">
          Your margins are getting
          <br />
          <em>squeezed from every angle.</em>
        </h2>
        <div className="rule"></div>
        <div className="prob-grid">
          <article className="prob-card">
            <div className="prob-icon" aria-hidden="true">📈</div>
            <h3 className="prob-h">Costs Up 40–50% Since 2020</h3>
            <p className="prob-b">
              Labor, materials, financing — all elevated. Little room to pass
              it through to buyers who are already stretched.
            </p>
          </article>
          <article className="prob-card">
            <div className="prob-icon" aria-hidden="true">🏦</div>
            <h3 className="prob-h">Capital Has Gone to the Sidelines</h3>
            <p className="prob-b">
              Domestic investors are pausing. Lenders are tighter. Deals that
              penciled in 2021 don&apos;t work today.
            </p>
          </article>
          <article className="prob-card">
            <div className="prob-icon" aria-hidden="true">📉</div>
            <h3 className="prob-h">Margins Gone on Too Many Deals</h3>
            <p className="prob-b">
              When 8–10% is &quot;good&quot; and exits are soft, projects
              don&apos;t ink. The industry needs a structural fix, not edge
              trimming.
            </p>
          </article>
          <article className="prob-card">
            <div className="prob-icon" aria-hidden="true">⏱</div>
            <h3 className="prob-h">Winners Are Restructuring Now</h3>
            <p className="prob-b">
              Those who fix their cost base today will move fast when the
              market opens back up. Waiting is a strategy that costs you.
            </p>
          </article>
        </div>
      </section>

      <section id="solution">
        <div className="ov">The Opportunity</div>
        <h2 className="st">
          Materials are the one cost
          <br />
          you can actually <em>control.</em>
        </h2>
        <div className="rule"></div>
        <p className="lead">
          Flooring, tile, cabinets, windows, doors, panels, roofing, steel —
          typically 25–35% of total construction cost. You&apos;re paying 3–4×
          the factory price through domestic distributors. That stops here.
        </p>

        <div className="sol-nums">
          <div className="sol-num">
            <span className="sol-num-n">20–25%</span>
            <div className="sol-num-l">
              Savings going direct vs.
              <br />
              domestic distribution
            </div>
          </div>
          <div className="sol-num">
            <span className="sol-num-n">$17.5B</span>
            <div className="sol-num-l">
              Vietnam&apos;s annual construction &amp;
              <br />
              furniture exports in 2024
            </div>
          </div>
          <div className="sol-num">
            <span className="sol-num-n">D2C</span>
            <div className="sol-num-l">
              Factory to your job site.
              <br />
              No import brokers. No markup.
            </div>
          </div>
        </div>

        <div className="sol-divider">How we make it work</div>
        <div className="sol-cards">
          {[
            {
              h: "Factory Audit & Vetting",
              b: "We pre-screen every manufacturer. You visit knowing it's already approved — no wasted trips.",
            },
            {
              h: "Quality Control",
              b: "On-the-ground QC before every shipment. Pre-production samples, mid-run checks, final inspection.",
            },
            {
              h: "Logistics & Freight",
              b: "Container loading, customs, freight forwarding, delivery to your US job site — all handled.",
            },
            {
              h: "Procurement as a Service",
              b: "No overseas team needed. We are your team — from spec to delivery. D2C economics without the overhead.",
            },
            {
              h: "Savings Across the Stack",
              b: "The 20–25% flows to GCs, developers, and investors — improving returns at every level of the deal.",
            },
            {
              h: "Access to Overseas Capital",
              b: "Connect your US projects with Vietnamese and Asian HNWIs actively seeking US real estate exposure.",
            },
          ].map((s) => (
            <article className="sol-card" key={s.h}>
              <h3 className="sol-card-h">
                <span className="chk">✓</span>
                {s.h}
              </h3>
              <p className="sol-card-b">{s.b}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="vietnam">
        <div className="ov">Why Vietnam, Why Now</div>
        <h2 className="st">
          The timing has never been
          <br />
          <em>more strategic.</em>
        </h2>
        <div className="rule"></div>

        <div className="vn-nums">
          <div className="vn-n">
            <span className="vn-n-big">2nd</span>
            <div className="vn-n-l">
              Largest furniture exporter globally — right behind China
            </div>
          </div>
          <div className="vn-n">
            <span className="vn-n-big">$124B</span>
            <div className="vn-n-l">
              US trade deficit with Vietnam in 2024 — 4th largest globally
            </div>
          </div>
          <div className="vn-n">
            <span className="vn-n-big">$25B</span>
            <div className="vn-n-l">
              Record FDI into Vietnam in 2024 — manufacturers keep coming
            </div>
          </div>
          <div className="vn-n">
            <span className="vn-n-big">60–70%</span>
            <div className="vn-n-l">
              Lower manufacturing labor cost vs. China
            </div>
          </div>
        </div>

        <div className="vn-grid">
          {[
            {
              n: "01",
              t: "US–China Trade War",
              b: "Tariffs of 25–145% on Chinese goods have permanently shifted supply chains. Vietnam is the #1 beneficiary. This is structural, not a trend.",
            },
            {
              n: "02",
              t: "World-Class Quality",
              b: "The factories on this trip hold ASTM, AAMA, LEED, ISO, and FSC certifications. They've supplied Canada's tallest building and US Marriott hotels.",
            },
            {
              n: "03",
              t: "Mature Export Routes",
              b: "Vietnam exported $405B in goods in 2024. Port infrastructure, customs, and freight lanes to the US are well-established. This is not pioneer territory.",
            },
            {
              n: "04",
              t: "Durable Cost Advantage",
              b: "60–70% lower labor and land costs create a structural price advantage on flooring, cabinets, windows, doors, and panels — exactly the categories that eat your budget.",
            },
            {
              n: "05",
              t: "US–Vietnam at All-Time High",
              b: "Comprehensive Strategic Partnership established 2023 — highest diplomatic tier. Government-backed stability for long-term sourcing relationships.",
            },
            {
              n: "06",
              t: "Early Movers Win",
              b: "The best factories are becoming selective. Early relationships get better pricing and dedicated capacity. Don't chase the wave — be ahead of it.",
            },
          ].map((v) => (
            <article className="vn-card" key={v.n}>
              <div className="vn-num">{v.n}</div>
              <h3 className="vn-t">{v.t}</h3>
              <p className="vn-b">{v.b}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="trip">
        <div className="ov">The Experience</div>
        <h2 className="st">
          7 days. 12 factories.
          <br />
          <em>Zero fluff.</em>
        </h2>
        <div className="rule"></div>
        <div className="trip-wrap">
          <div>
            <p className="lead" style={{ marginBottom: 22 }}>
              Decision-makers only — GC principals, development partners,
              architects who actually spec materials. Every stop is
              pre-negotiated. Every meeting is worth your time.
            </p>
            <div className="trip-meta">
              {[
                ["Dates", "May 30 – June 5, 2026"],
                ["Fly Into", "Ho Chi Minh City (SGN)"],
                ["Fly Out", "Hanoi (HAN)"],
                ["Stops", "12 curated factories"],
                ["Format", "Private · Hand-picked"],
                ["Hosts", "100B × LT Commercial Group"],
              ].map(([l, v]) => (
                <div className="tm" key={l}>
                  <span className="tm-l">{l}</span>
                  <span className="tm-v">{v}</span>
                </div>
              ))}
            </div>
            <div className="t-note">
              <p>
                ★ Detailed itinerary in development. All factory stops subject
                to final confirmation and may change based on group demand.
              </p>
            </div>
          </div>

          <div className="itin">
            {[
              {
                cls: "s",
                day: "Day 1",
                date: "May 30",
                loc: "HCMC — Arrive",
                chips: [["Arrival + Orientation dinner", true]] as [string, boolean][],
              },
              {
                cls: "s",
                day: "Day 2",
                date: "May 31",
                loc: "Binh Duong",
                chips: [
                  ["An Cuong Wood", true],
                  ["BM Windows", true],
                ] as [string, boolean][],
              },
              {
                cls: "s",
                day: "Day 3",
                date: "Jun 1",
                loc: "Binh Duong + Long An",
                chips: [
                  ["Phu Tai / Vina G7", true],
                  ["Dai Dung", true],
                  ["Tan Thanh", false],
                ] as [string, boolean][],
              },
              {
                cls: "s",
                day: "Day 4",
                date: "Jun 2",
                loc: "HCMC — Flex",
                chips: [
                  ["AA Corporation", false],
                  ["Evening flight north", true],
                ] as [string, boolean][],
              },
              {
                cls: "t",
                day: "Day 5",
                date: "Jun 3",
                loc: "Fly → Hanoi",
                chips: [
                  ["AM arrival", false],
                  ["Hoa Phat briefing", true],
                ] as [string, boolean][],
              },
              {
                cls: "n",
                day: "Day 6",
                date: "Jun 4",
                loc: "Bac Ninh + Vinh Phuc + Hanoi",
                chips: [
                  ["Tonmat", true],
                  ["Amy Grupo", true],
                  ["Eurowindow", true],
                ] as [string, boolean][],
              },
              {
                cls: "n",
                day: "Day 7",
                date: "Jun 5",
                loc: "Hai Phong",
                chips: [
                  ["An Phat Holdings", true],
                  ["Tien Phong", false],
                ] as [string, boolean][],
              },
            ].map((r) => (
              <div className={`ir ${r.cls}`} key={r.day}>
                <div className="ir-d">
                  <div className="ir-dn">{r.day}</div>
                  <div className="ir-dd">{r.date}</div>
                </div>
                <div className="ir-b">
                  <div className="ir-loc">{r.loc}</div>
                  <div className="ir-stops">
                    {r.chips.map(([label, gold]) => (
                      <span className={`chip${gold ? " g" : ""}`} key={label}>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="factories">
        <div className="ov">The Manufacturers</div>
        <h2 className="st">
          12 factories.
          <br />
          <em>All vetted. All relevant.</em>
        </h2>
        <div className="rule"></div>
        <p className="lead">
          Every stop independently researched. ★ = non-negotiable. Click any
          row for details.
        </p>
        <div className="fac-leg">
          <div className="leg">
            <div className="leg-s">
              {[0, 1, 2, 3, 4].map((i) => (
                <span className="star" key={i} />
              ))}
            </div>
            <span>Perfect US fit</span>
          </div>
          <div className="leg">
            <div className="leg-s">
              {[0, 1, 2, 3].map((i) => (
                <span className="star" key={i} />
              ))}
              <span className="star off" />
            </div>
            <span>Strong fit</span>
          </div>
          <div className="leg">
            <div className="leg-s">
              {[0, 1, 2].map((i) => (
                <span className="star" key={i} />
              ))}
              <span className="star off" />
              <span className="star off" />
            </div>
            <span>Selective</span>
          </div>
        </div>
        <FactoryList />
      </section>

      <section id="hosts">
        <div className="ov">Your Hosts</div>
        <h2 className="st">
          Two founders.
          <br />
          <em>One shared mission.</em>
        </h2>
        <div className="rule"></div>
        <div className="hosts-grid">
          <article className="host-card">
            <div className="host-photo">MM</div>
            <h3 className="host-name">Minh Mac</h3>
            <div className="host-role">Founder · 100B</div>
            <div className="host-phone">+1-757-773-5707</div>
            <a href="mailto:global@100b.co" className="host-email">
              global@100b.co
            </a>
            <a
              href="https://www.linkedin.com/in/minhlaunch/"
              target="_blank"
              rel="noopener noreferrer"
              className="host-li"
              aria-label="Minh Mac LinkedIn"
            >
              in
            </a>
          </article>
          <article className="host-card">
            <div className="host-photo">LT</div>
            <h3 className="host-name">Lezlie Tram</h3>
            <div className="host-role">CEO · LT Commercial Group</div>
            <div className="host-phone">&nbsp;</div>
            <a
              href="mailto:lezlie@ltcommercialgroup.com"
              className="host-email"
            >
              lezlie@ltcommercialgroup.com
            </a>
            <a
              href="https://www.linkedin.com/in/lezlie-tram-ceo-233b85b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="host-li"
              aria-label="Lezlie Tram LinkedIn"
            >
              in
            </a>
          </article>
        </div>
      </section>

      <section id="apply">
        <div className="cta-ov">By Invitation Only</div>
        <h2 className="cta-t">
          Seats are limited.
          <br />
          <em>Attendees are vetted.</em>
        </h2>
        <p className="cta-s">
          Decision-maker level only. Express interest and we&apos;ll follow up
          personally.
        </p>
        <a
          href="mailto:global@100b.co?subject=Vietnam Direct 2026 — Invitation Request"
          className="cta-btn"
        >
          Request Your Invitation →
        </a>
        <div className="cta-fine">
          Reviewed personally. Acceptance is selective. Details shared upon
          qualification.
        </div>
      </section>

      <footer>
        <div>
          <div className="foot-b">Vietnam Direct 2026</div>
          <div className="foot-s">
            Build Better Series · 100B × LT Commercial Group
          </div>
        </div>
        <div className="foot-r">
          Made in Vietnam, Consumed Worldwide
          <br />
          100b.co
        </div>
      </footer>
    </>
  );
}
