// Shared deck content for all 3 directions of the PM-day Hackathon kickoff.
// Single source of truth — directions read from this and render their own way.

window.DECK = {
  meta: {
    event: "Product AI Hackathon",
    when: "Mon 4 May 2026",
    presenter: "Zen",
    audience: "25 PMs",
  },

  // 1. Title
  title: {
    kicker: "Hackathon Day",
    headline: "Ship something today.",
    sub: "One day. No BAU. Build with Claude.",
  },

  // 2. Why
  why: {
    h: "We're not here to learn AI.",
    sub: "We're here to use it.",
    points: [
      { k: "The gap", v: "Models keep getting better. Our day-to-day hasn't caught up." },
      { k: "The fix", v: "Headspace, not training. One day to actually build." },
      { k: "Today", v: "Every PM ships something useful with Claude on a real squad problem." },
    ],
  },

  // 3. What to build — concrete examples
  examples: {
    h: "What can I build today?",
    sub: "",
    categories: [
      {
        type: "Skills",
        blurb: "Claude skills your squad reuses.",
        items: [
          { name: "Stand-up summariser", desc: "turns 15 voice notes into one digest" },
          { name: "PRD critic", desc: "pressure-tests your doc before review" },
          { name: "Release-notes drafter", desc: "Jira tickets → changelog" },
        ],
      },
      {
        type: "Agents",
        blurb: "Things that run without you.",
        items: [
          { name: "Customer-feedback triager", desc: "Intercom → tagged Jira tickets" },
          { name: "Competitor watcher", desc: "weekly digest of pricing-page changes" },
          { name: "On-call summariser", desc: "Slack incidents → Monday post-mortem" },
        ],
      },
      {
        type: "Automations",
        blurb: "n8n flows that delete a recurring task.",
        items: [
          { name: "Weekly squad-metrics post", desc: "→ Slack" },
          { name: "Jira → Notion roadmap sync", desc: "" },
          { name: "User-interview recordings", desc: "→ highlight reel" },
        ],
      },
      {
        type: "Dashboards",
        blurb: "See your product in one screen.",
        items: [
          { name: "Squad-health board", desc: "velocity, NPS, churn" },
          { name: "Feature-adoption tracker", desc: "" },
          { name: "AI-usage tracker", desc: "for your own squad" },
        ],
      },
    ],
  },

  // 4. Tools grid
  tools: {
    h: "Toolkit",
    items: [
      { name: "Claude",        for: "Thinking, writing, planning" },
      { name: "Cowork",        for: "Build schedules and live dashboards/artifacts" },
      { name: "Claude Code",   for: "Real code in your terminal" },
      { name: "Claude Design", for: "Hi-fi mockups in HTML" },
      { name: "n8n",           for: "Visual workflow automation" },
      { name: "Skills + MCPs", for: "Reusable knowledge for Claude" },
    ],
  },

  // 5. Live demo
  demo: {
    kicker: "Live demo",
    h: "Some ideas.",
  },

  // 6. Schedule (reused from PO deck)
  schedule: {
    h: "Today's shape.",
    rows: [
      { time: "09:45 — 10:00", title: "Kickoff",          desc: "This. Format and what shipped looks like." },
      { time: "10:00 — 11:00", title: "Start building",   desc: "Pick a problem. Commit in Slack. Begin." },
      { time: "11:00 — 11:15", title: "Checkpoint 1",     desc: "One-liner in Slack: what are you making?", checkpoint: true },
      { time: "11:15 — 13:30", title: "Build + lunch",    desc: "Keep going. Eat whenever." },
      { time: "13:30 — 14:00", title: "Show-and-tell",    desc: "Squad check-in. Unblock, share, nudge.", checkpoint: true },
      { time: "14:00 — 16:30", title: "Final push",       desc: "Polish. Prep a tight 3-min demo." },
      { time: "16:30 — 17:00", title: "Squad demos",      desc: "Every PM demos to their squad. 3 min each.", checkpoint: true },
      { time: "17:00 — 18:00", title: "Final demos + wrap", desc: "Each squad picks one to show the whole team.", checkpoint: true },
    ],
  },

  // 7. Rules
  rules: {
    h: "House rules.",
    sub: "Short list. Take them seriously enough.",
    items: [
      { n: "01", title: "Build solo.",              body: "You learn more with hands on the keyboard. Pair only if it's clearly better." },
      { n: "02", title: "Ship something useful.",   body: "Build for after today. If your squad won't touch it next week, pick something else." },
      { n: "03", title: "Brainstorm out loud.",     body: "Stuck? Grab Zen, grab a colleague, grab Claude. Don't sit silent for an hour." },
      { n: "04", title: "Demo by EOD.",             body: "If it doesn't get shown, it didn't happen. 3 minutes is enough." },
      { n: "05", title: "Have fun.",                body: "This is the rare day with no roadmap pressure. Use it." },
    ],
  },

  // 8. Closing
  close: {
    h: "Go build.",
    sub: "Slack / Huddle @Zen if stuck. See you at 5pm.",
  },
};
