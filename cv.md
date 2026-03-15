---
title: "Maksym Bohdan CV"
---

# **Maksym Bohdan**

**Software Engineer · Maker**

max@axseem.me · [axseem.me](https://axseem.me) · [github.com/axseem](https://github.com/axseem) · [linkedin.com/in/axseem](https://linkedin.com/in/axseem) · Prague, CZ

## **About**

I build tools I want to use and share everything openly. I enjoy going low-level, building tooling in Go and Zig, reproducible systems with Nix, and working on custom PCBs and firmware for my hardware projects. I like understanding how things actually work. Strive for removing complexity rather than layering it. Documenting the process on my blog and livestreams. Looking for a role where people care about craft.

---

## **Experience**

**Software Engineer** · Make _(Oct 2025 – Present · On-site · Prague)_

Implemented a memory pressure stabilization system that auto-balances the job execution pool based on available capacity across Kubernetes clusters, solving the "Noisy Neighbor" problem. Shipped long wanted quality-of-life features including filter copy-pasting, variable reference validation and app search improvements.

**Back End Developer** · Air Trail _(Jan 2025 – Mar 2025 · Remote · Canada · Contract)_

Built a data migration tool in Go to parse and restructure complex spreadsheet data, automating a process that previously took weeks of manual work and eliminating data entry errors entirely.

**CS Student** · CTU Prague _(Sep 2024 – Aug 2025 · On-site · Prague)_

Studied computer science, left after a year to pursue software engineering full-time.

**Full-Stack Engineer** · VRoom _(Jul 2022 – Feb 2023 · On-site · Ukraine · Contract)_

Built a booking chatbot (Node.js, MongoDB) used by 100+ regular members for seat reservations. Automated the entire workflow, cutting required management staff from a planned 3 to 1 and saving 15+ hours of admin work per week. Deployed on a VPS with a CI/CD pipeline for zero-downtime updates.

**Full-Stack Engineer** · Lukas _(Mar 2021 – May 2022 · On-site · Ukraine)_

Built an e-commerce platform for an online candy store with a customer-facing Telegram bot and a custom admin panel that cut order processing time by ~20%.

---

## **Skills**

**Tools:** Go, TypeScript, Zig, Rust, PostgreSQL, SQLite, Linux, Nix, Docker, Svelte, Tailwind, Figma, KiCad, FreeCAD

**Spoken:** English, Ukrainian, Russian (fluent) | Czech (intermediate)

---

## **Projects**

**Anywhy Flake** - Thin, wireless, split ergonomic keyboard

_[github.com/anywhy-io/flake](https://github.com/anywhy-io/flake)_

Designed and built a split ergonomic keyboard from scratch. PCB made in KiCad, enclosure in FreeCAD, ZMK for firmware, with all the source files, DIY build guide and documentation being fully open source. 400+ GitHub stars. Dozens of people have built their own boards from the files.

**sprinkler** - Simple, markdown driven site generator.

_[codeberg.org/axseem/sprinkler](https://codeberg.org/axseem/sprinkler) · [codeberg.org/axseem/garden](https://codeberg.org/axseem/garden)_

The engine behind my personal website. I went through Hugo, Astro, and SvelteKit before writing my own in Go, as each migration revealed how much complexity I was carrying with all these frameworks only for marginal benefit. The current version is under 2K lines of Go, plus one html template and one css file. It renders all pages from plain Markdown, handles image optimization via FFmpeg with lazy caching (builds drop to microseconds when images haven't changed), and validates all internal page references. The site became richer in content after the rewrite, with pages like journal, gallery, essay index, book tier list and quote collection, thanks to the low friction of working with Markdown instead of complex templates and component systems.

**dots** - Nix-based workstation config and modules

_[codeberg.org/axseem/dots](https://codeberg.org/axseem/dots)_

Modular configuration that covers both my NixOS desktop and a macOS work machine. Everything is split into granular, composable, easy to review pieces. Most of the config lives in home-manager so it's portable to any Linux distro with just the Nix package manager installed. Originally included a NixOS-on-MacBook setup via Asahi Linux.

**dirmd & pixv** - CLI developer tools in Go

_[github.com/axseem/dirmd](https://github.com/axseem/dirmd) · [github.com/axseem/pixv](https://github.com/axseem/pixv)_

`dirmd` bundles a project directory into a single Markdown file for passing context to LLMs. `pixv` vectorizes pixel art into SVGs for infinite scalability. Both born out of personal workflow friction.
