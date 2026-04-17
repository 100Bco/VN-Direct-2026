"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      const menu = document.getElementById("mob");
      const btn = document.getElementById("hbg");
      if (
        open &&
        menu &&
        btn &&
        !menu.contains(e.target as Node) &&
        !btn.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div
        className={`mob-menu${open ? " open" : ""}`}
        id="mob"
        role="dialog"
        aria-label="Mobile menu"
      >
        <a href="#problem" onClick={close}>The Problem</a>
        <a href="#solution" onClick={close}>Opportunity</a>
        <a href="#vietnam" onClick={close}>Why Vietnam</a>
        <a href="#trip" onClick={close}>The Trip</a>
        <a href="#factories" onClick={close}>Factories</a>
        <a href="#hosts" onClick={close}>Hosts</a>
        <a href="#apply" onClick={close} className="gold">Request Invite</a>
      </div>

      <nav aria-label="Primary">
        <a href="#" className="nav-brand" aria-label="Vietnam Direct 2026 — 100B × LT Commercial Group">
          <span className="nav-logos">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hosts/100B%20-%20TACH%20NEN%20-1.png"
              alt="100B"
              className="nav-logo"
            />
            <span className="nav-logo-x" aria-hidden="true">×</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hosts/LOGO%20LT%20COMMERCIAL.png"
              alt="LT Commercial Group"
              className="nav-logo"
            />
          </span>
          <span className="nav-brand-text">
            Vietnam Direct 2026
            <small>Build Better Series</small>
          </span>
        </a>
        <ul className="nav-links">
          <li><a href="#problem">Problem</a></li>
          <li><a href="#solution">Opportunity</a></li>
          <li><a href="#vietnam">Why Vietnam</a></li>
          <li><a href="#trip">The Trip</a></li>
          <li><a href="#factories">Factories</a></li>
          <li><a href="#hosts">Hosts</a></li>
        </ul>
        <a href="#apply" className="nav-cta">Request Invite</a>
        <button
          type="button"
          className="hamburger"
          id="hbg"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{ background: "none", border: 0 }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </>
  );
}
