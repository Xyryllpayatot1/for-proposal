export default function Home() {
  const tracks = [
    { num: 1, label: "A", color: "linear-gradient(135deg,#1a3a2a,#0d5c2a)", title: "Opening Night", active: true, duration: "3:42" },
    { num: 2, label: "B", color: "linear-gradient(135deg,#1a1a3a,#2a0d5c)", title: "Midnight Drive", active: false, duration: "4:11" },
    { num: 3, label: "C", color: "linear-gradient(135deg,#3a1a1a,#5c0d0d)", title: "Fade Away", active: false, duration: "3:58" },
    { num: 4, label: "D", color: "linear-gradient(135deg,#2a3a1a,#3a5c0d)", title: "Last Call", active: false, duration: "5:02" },
    { num: 5, label: "E", color: "linear-gradient(135deg,#3a2a1a,#5c3a0d)", title: "Burning Sky", active: false, duration: "4:27" },
  ];

  const albums = [
    { label: "Vol. I", title: "Volume I", meta: "2024 · 5 tracks", price: "From $7.99", color: "linear-gradient(135deg,#1a3a2a,#0d2a1a)" },
    { label: "Vol. II", title: "Volume II", meta: "2025 · 7 tracks", price: "From $9.99", color: "linear-gradient(135deg,#1a1a3a,#0d0d2a)" },
    { label: "Live", title: "Live Sessions", meta: "2025 · 4 tracks", price: "From $5.99", color: "linear-gradient(135deg,#3a1a1a,#2a0d0d)" },
    { label: "EP", title: "Debut EP", meta: "2023 · 3 tracks", price: "From $3.99", color: "linear-gradient(135deg,#2a3a1a,#1a2a0d)" },
  ];

  return (
    <>
      <div className="app">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" /></svg>
            </div>
            <span>Band<em>Store</em></span>
          </div>

          <div className="nav-section">
            <a className="nav-item active" href="#">
              <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
              Home
            </a>
            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              Search
            </a>
            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
              Your Library
            </a>
          </div>

          <div className="sidebar-divider" />

          <div className="nav-section">
            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
              Create Playlist
            </a>
            <a className="nav-item" href="#">
              <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              Liked Songs
            </a>
          </div>

          <div className="sidebar-divider" />
          <div className="nav-label">Playlists</div>
          {["Rock Collection", "New Releases", "Top Downloads", "Fan Favorites", "Acoustic Sessions"].map((p) => (
            <div key={p} className="playlist-item">{p}</div>
          ))}
        </aside>

        {/* MAIN */}
        <main className="main">
          <div className="topbar">
            <div className="topbar-nav">
              <button className="topbar-btn">&#8249;</button>
              <button className="topbar-btn">&#8250;</button>
            </div>
            <div className="topbar-actions">
              <button className="topbar-pill outline">Log in</button>
              <button className="topbar-pill">Sign up</button>
              <div className="user-avatar">AB</div>
            </div>
          </div>

          <div className="content">
            {/* ARTIST HERO */}
            <div className="artist-hero">
              <div className="artist-avatar">AB</div>
              <div className="artist-info">
                <div className="artist-verified">
                  <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" fill="#3d8bfd" /><polyline points="22 4 12 14.01 9 11.01" fill="#3d8bfd" /></svg>
                  Verified Artist
                </div>
                <div className="artist-name">Your Band</div>
                <div className="artist-meta">
                  <strong>12 songs</strong> &nbsp;·&nbsp; MP3 &amp; WAV Downloads &nbsp;·&nbsp; Direct Payouts via Stripe
                </div>
              </div>
            </div>

            {/* ACTION ROW */}
            <div className="action-row">
              <button className="btn-play">
                <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              </button>
              <button className="btn-follow">Follow</button>
              <button className="btn-more">
                <svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></svg>
              </button>
            </div>

            {/* TRACK LIST */}
            <div className="track-list">
              <div className="section-header"><h2>Songs</h2></div>
              <div className="track-list-header">
                <span>#</span>
                <span>Title</span>
                <span className="col-format">Format</span>
                <span className="col-duration">Duration</span>
                <span className="col-price">Buy</span>
              </div>
              {tracks.map((t) => (
                <div key={t.num} className="track-row">
                  <div className="track-num-wrap">
                    <span className="track-num">{t.num}</span>
                    <span className="track-play-icon">
                      <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                    </span>
                  </div>
                  <div className="track-info">
                    <div className="track-thumb" style={{ background: t.color }}>{t.label}</div>
                    <div className="track-text">
                      <div className={`track-title${t.active ? " active" : ""}`}>{t.title}</div>
                      <div className="track-subtitle">Your Band</div>
                    </div>
                  </div>
                  <div className="track-format">MP3 · WAV</div>
                  <div className="track-duration">{t.duration}</div>
                  <div className="track-price-col">
                    <button className="track-buy-btn">$1.99</button>
                  </div>
                </div>
              ))}
            </div>

            {/* ALBUMS */}
            <div>
              <div className="section-header">
                <h2>Albums &amp; Releases</h2>
                <a href="#">See all</a>
              </div>
              <div className="albums-grid">
                {albums.map((a) => (
                  <div key={a.title} className="album-card">
                    <div className="album-cover" style={{ background: a.color }}>
                      {a.label}
                      <div className="play-hover">
                        <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                      </div>
                    </div>
                    <div className="album-title">{a.title}</div>
                    <div className="album-meta">{a.meta}</div>
                    <span className="album-price-tag">{a.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PROPOSAL CALLOUT */}
            <div className="proposal-callout">
              <div className="callout-left">
                <h2>What We&apos;re Building for You</h2>
                <p>
                  A fully functional music store — just like this — where your fans can find you on Google by
                  searching your band name, preview your tracks, and purchase MP3 or WAV downloads with payments
                  going directly to your bank account.
                </p>
                <ul className="callout-features">
                  {[
                    "Google-optimized so fans find you by band name",
                    "MP3 and WAV download support",
                    "Stripe payments with direct bank payouts",
                    "Secure, expiring download links after purchase",
                    "Artist dashboard to manage songs and sales",
                    "Automatic email receipt sent to every buyer",
                    "Fully deployed on your own custom domain",
                  ].map((f) => <li key={f}>{f}</li>)}
                </ul>
              </div>
              <div className="callout-right">
                <h3>Tech Stack</h3>
                <div className="stack-pills">
                  {["Next.js 14", "Stripe"].map((s) => <span key={s} className="stack-pill highlight">{s}</span>)}
                  {["TypeScript", "Tailwind CSS", "Supabase", "Vercel", "Resend", "AWS S3"].map((s) => (
                    <span key={s} className="stack-pill">{s}</span>
                  ))}
                </div>
                <h3>Delivery Timeline</h3>
                <div className="timeline-mini">
                  {[
                    { week: "Week 1", desc: "Setup, design system, homepage, Stripe integration" },
                    { week: "Week 2", desc: "Store, checkout flow, secure downloads, email receipts" },
                    { week: "Week 3", desc: "SEO optimization, Google Search Console, launch" },
                  ].map((t) => (
                    <div key={t.week} className="timeline-mini-item">
                      <span className="week-badge">{t.week}</span>
                      <p>{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PACKAGES */}
            <div>
              <div className="section-header"><h2>Packages</h2></div>
              <div className="pricing-row">
                <div className="price-card">
                  <h3>Single Track</h3>
                  <div className="amount">$1.99 <small>/ song</small></div>
                  <div className="tagline">Buy any individual song from the catalog. Instant download after purchase.</div>
                  <ul>
                    <li>1 song of your choice</li>
                    <li>MP3 download (320kbps)</li>
                    <li>Instant delivery to your email</li>
                    <li>Personal use license</li>
                  </ul>
                  <button className="buy-btn">Buy a Single</button>
                </div>
                <div className="price-card featured">
                  <span className="rec-tag">Best Value</span>
                  <h3>Full Album</h3>
                  <div className="amount">$9.99 <small>/ album</small></div>
                  <div className="tagline">Get the complete album — all tracks in one purchase at a discounted price.</div>
                  <ul>
                    <li>All songs in the album</li>
                    <li>MP3 and WAV formats included</li>
                    <li>Instant download after payment</li>
                    <li>Secure download link via email</li>
                    <li>Personal use license</li>
                    <li>Direct payment to artist</li>
                  </ul>
                  <button className="buy-btn">Buy Full Album</button>
                </div>
                <div className="price-card">
                  <h3>Complete Collection</h3>
                  <div className="amount">$24.99 <small>/ all</small></div>
                  <div className="tagline">Every song, every album, every release — the full discography in one bundle.</div>
                  <ul>
                    <li>All albums and singles</li>
                    <li>MP3 and WAV formats</li>
                    <li>Instant download after payment</li>
                    <li>Any future releases included</li>
                    <li>Personal use license</li>
                  </ul>
                  <button className="buy-btn">Buy Everything</button>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="cta-strip">
              <h2>Ready to sell your music?</h2>
              <p>Message me and we will have your store live in 3 weeks.</p>
              <button className="cta-btn-green">Let&apos;s Work Together</button>
            </div>
          </div>
        </main>
      </div>

      {/* PLAYER BAR */}
      <div className="player-bar">
        <div className="player-left">
          <div className="player-thumb" />
          <div className="player-track-info">
            <div className="name">Opening Night</div>
            <div className="artist">Your Band</div>
          </div>
          <button className="player-like">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
          </button>
        </div>
        <div className="player-center">
          <div className="player-controls">
            <button className="ctrl-btn">
              <svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>
            </button>
            <button className="ctrl-btn">
              <svg viewBox="0 0 24 24"><polygon points="19 20 9 12 19 4 19 20" /><line x1="5" y1="19" x2="5" y2="5" /></svg>
            </button>
            <button className="ctrl-btn main-play">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            </button>
            <button className="ctrl-btn">
              <svg viewBox="0 0 24 24"><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" y1="5" x2="19" y2="19" /></svg>
            </button>
            <button className="ctrl-btn">
              <svg viewBox="0 0 24 24"><polyline points="16 3 21 3 21 8" /><line x1="4" y1="20" x2="21" y2="3" /><polyline points="21 16 21 21 16 21" /><line x1="15" y1="15" x2="21" y2="21" /></svg>
            </button>
          </div>
          <div className="progress-row">
            <span className="progress-time">1:18</span>
            <div className="progress-bar"><div className="progress-fill" /></div>
            <span className="progress-time">3:42</span>
          </div>
        </div>
        <div className="player-right">
          <button className="vol-btn">
            <svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
          </button>
          <div className="vol-bar"><div className="vol-fill" /></div>
        </div>
      </div>
    </>
  );
}
