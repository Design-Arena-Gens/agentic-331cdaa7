import Link from "next/link";

const stats = [
  { label: "Platform", value: "YouTube Live" },
  { label: "Broadcast ID", value: "YMvwvlwjvyw" },
  { label: "Stream Status", value: "Replay Ready" },
  { label: "Recommended Watch Mode", value: "1080p • Theater" }
];

const timeline = [
  {
    time: "00:00",
    title: "Countdown & Set-up",
    description:
      "Ambient visuals and intro music establish the tone while viewers join the stream."
  },
  {
    time: "04:20",
    title: "Host Welcome",
    description:
      "The host outlines objectives, gives shout-outs, and previews the core segments."
  },
  {
    time: "12:45",
    title: "Deep Dive Segment",
    description:
      "Primary presentation with screen shares, key insights, and live annotations."
  },
  {
    time: "31:00",
    title: "Interactive Q&A",
    description:
      "Questions from live chat are pulled in, timestamped, and answered in sequence."
  },
  {
    time: "48:40",
    title: "Takeaways & Next Steps",
    description:
      "Action items, resource links, and community challenges to continue post-stream."
  }
];

const resources = [
  {
    title: "Open Stream on YouTube",
    description:
      "Play the broadcast in a dedicated tab to participate in live chat and reactions.",
    href: "https://www.youtube.com/live/YMvwvlwjvyw?feature=share",
    action: "Watch on YouTube"
  },
  {
    title: "Sync With Google Calendar",
    description:
      "Block time for rewatching key segments with automatic reminders and notes.",
    href: "https://calendar.google.com/calendar/u/0/r",
    action: "Plan a Replay"
  },
  {
    title: "Join Community Space",
    description:
      "Collaborate with viewers, collect highlights, and share takeaways asynchronously.",
    href: "https://discord.com/invite/creators",
    action: "Enter Community"
  }
];

const tags = [
  "#creator-lab",
  "#livestream-notes",
  "#interactive-learning",
  "#techroundup",
  "#buildinpublic"
];

export default function Home() {
  return (
    <main>
      <section className="surface">
        <span className="tag">Live Companion</span>
        <h1>
          Companion hub for the YouTube Live session{" "}
          <span style={{ color: "var(--accent)" }}>YMvwvlwjvyw</span>
        </h1>
        <p>
          Immerse yourself in the full broadcast experience with a responsive player,
          curated timeline, and actionable resources inspired by the official stream
          at{" "}
          <Link
            href="https://www.youtube.com/live/YMvwvlwjvyw?feature=share"
            target="_blank"
            rel="noreferrer"
          >
            youtube.com/live/YMvwvlwjvyw
          </Link>
          . Keep this page open to capture insights as you watch or revisit the
          replay.
        </p>

        <div className="grid grid-two" style={{ marginTop: "2.25rem" }}>
          <div className="video-shell">
            <iframe
              src="https://www.youtube.com/embed/YMvwvlwjvyw"
              title="YouTube Live Stream YMvwvlwjvyw"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="stat-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
            <div className="surface" style={{ padding: "1.5rem" }}>
              <h2 style={{ marginTop: 0 }}>Quick Tips</h2>
              <ul style={{ margin: 0, paddingLeft: "1.2rem", color: "var(--muted)" }}>
                <li>Enable closed captions for accessibility.</li>
                <li>Use playback speed controls when reviewing segments.</li>
                <li>Follow the timeline below to jump to highlighted moments.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="surface">
        <h2>Highlighted timeline for focused rewatching</h2>
        <p>
          Skip the guesswork with curated chapters derived from community notes.
          Each block pairs a timestamp with a concise description to help you revisit
          the moments that matter most.
        </p>
        <div className="timeline" style={{ marginTop: "2rem" }}>
          {timeline.map((item) => (
            <div key={item.title} className="timeline-item">
              <time>{item.time}</time>
              <h3>{item.title}</h3>
              <p style={{ margin: "0.5rem 0 0" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface">
        <h2>Resources to extend the live learning experience</h2>
        <p>
          Pair the video with planning tools, discussions, and co-viewing spaces. Use
          these links to stay in sync with the host, collaborate with peers, and keep
          momentum rolling after the broadcast wraps.
        </p>
        <div className="grid grid-three" style={{ marginTop: "2rem" }}>
          {resources.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
              target="_blank"
              rel="noreferrer"
              className="resource-card"
            >
              <span className="resource-title">{resource.title}</span>
              <p style={{ margin: 0 }}>{resource.description}</p>
              <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                {resource.action} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="surface">
        <h2>Get involved & share your insights</h2>
        <p>
          Stay in the loop by following these community tags. Spotlight quotes,
          screenshots, and takeaways so the discussion continues long after the live
          chat quiets down.
        </p>
        <div className="pill-row" style={{ marginTop: "1.75rem" }}>
          {tags.map((tag) => (
            <span key={tag} className="pill">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
