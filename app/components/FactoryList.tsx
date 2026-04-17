"use client";

import { useState } from "react";
import { regions, type Factory } from "../data/factories";

function Stars({ n }: { n: number }) {
  return (
    <div className="fi-stars" aria-label={`${n} of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className={`star${i < n ? "" : " off"}`} />
      ))}
    </div>
  );
}

function FactoryItem({
  f,
  open,
  onToggle,
}: {
  f: Factory;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`fi${f.must ? " must" : ""}${open ? " open" : ""}`}>
      <button
        type="button"
        className="fi-row"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`fi-exp-${f.num}`}
      >
        <div className="fi-num">{f.num}</div>
        <div className="fi-name">
          {f.name}
          <small>{f.small}</small>
        </div>
        <div className="fi-cat">{f.cat}</div>
        <div className="fi-loc">{f.loc}</div>
        <Stars n={f.stars} />
        <div className="fi-toggle">
          <span className="label">Details</span>
          <span className="arrow">›</span>
        </div>
      </button>
      <div className="fi-exp" id={`fi-exp-${f.num}`}>
        <div className="fi-stats">
          {f.stats.map((s) => (
            <div className="fis" key={s.label}>
              <span className="fis-l">{s.label}</span>
              <span className={`fis-v${s.gold ? " g" : ""}`}>{s.value}</span>
            </div>
          ))}
        </div>
        <div className="fi-pts">
          <div className="fi-pts-h">Why Visit</div>
          {f.points.map((p, i) => (
            <div className="fp" key={i}>
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FactoryList() {
  const [openId, setOpenId] = useState<string | null>("01");
  return (
    <div className="fac-tbl">
      {regions.map((r) => (
        <div key={r.label}>
          <div className="rgn">{r.label}</div>
          {r.factories.map((f) => (
            <FactoryItem
              key={f.num}
              f={f}
              open={openId === f.num}
              onToggle={() => setOpenId(openId === f.num ? null : f.num)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
