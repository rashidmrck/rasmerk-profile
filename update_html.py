import re

html_path = r'e:\rasmerk-profile\index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Replace Hero
new_hero = '''<section id="hero" class="app-hero">
    <div class="container hero-inner app-hero-inner">
      <div class="hero-content">
        <h1 class="hero-brand gradient-text">Money Manager</h1>
        <p class="hero-tagline">Personal finance, automated and intelligent.</p>
        <p class="hero-subtext">Built by Rashid &middot; Rasmerk Software</p>
        <div class="hero-actions">
          <a href="#" class="btn-playstore">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M5 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2l15-10L5 2zm1 4.3L15.5 12 6 17.7V6.3z"/></svg>
            <div class="playstore-text">
              <span class="ps-small">GET IT ON</span>
              <span class="ps-large">Google Play</span>
            </div>
          </a>
          <a href="#product" class="btn btn-outline">See Features</a>
        </div>
      </div>
      <div class="hero-photo-wrap">
        <div class="hero-app-icon">
          <img src="assets/money_manager_logo.png" alt="Money Manager Logo" />
        </div>
      </div>
    </div>
  </section>

  <section id="differentiators" class="diff-strip">
    <div class="container diff-inner">
      <div class="diff-card">
        <div class="diff-icon">🔒</div>
        <div class="diff-text">
          <h4>100% Offline</h4>
          <p>No cloud, no account, absolute privacy.</p>
        </div>
      </div>
      <div class="diff-card">
        <div class="diff-icon">🇮🇳</div>
        <div class="diff-text">
          <h4>Built for India</h4>
          <p>Native parsing for 10+ bank SMS formats.</p>
        </div>
      </div>
      <div class="diff-card">
        <div class="diff-icon">🧠</div>
        <div class="diff-text">
          <h4>Gets Smarter</h4>
          <p>AI that learns from your categorizations.</p>
        </div>
      </div>
    </div>
  </section>'''

html = re.sub(r'<section id="hero">.*?</section>', new_hero, html, flags=re.DOTALL)

# 2. Replace Product Section
new_product = '''<section id="product">
    <div class="container">
      <div class="product-header reveal" style="text-align: center; margin-bottom: 60px;">
        <h2 class="section-title">Everything you need.</h2>
        <p class="section-subtitle">A complete toolkit for your financial life.</p>
      </div>
      
      <div class="interactive-showcase reveal reveal-delay-1">
        <div class="showcase-sidebar">
          <div class="showcase-tab active" data-target="dashboard">
            <h4>📊 Dashboard & Analytics</h4>
            <p>Track your net worth and monthly burn rate.</p>
          </div>
          <div class="showcase-tab" data-target="budget">
            <h4>💰 Smart Budgets</h4>
            <p>Set limits and get real-time spending signals.</p>
          </div>
          <div class="showcase-tab" data-target="import">
            <h4>📥 Automatic Sync</h4>
            <p>Background SMS import for 10+ banks.</p>
          </div>
          <div class="showcase-tab" data-target="friends">
            <h4>👥 Friends Ledger</h4>
            <p>Track loans and IOUs with friends.</p>
          </div>
        </div>
        
        <div class="showcase-phone-area">
          <div class="phone-frame">
            <div class="phone-notch"></div>
            <img src="assets/screenshot_dashboard.jpg" alt="App Screenshot" id="showcase-image" class="phone-screen" />
          </div>
        </div>
      </div>
    </div>
  </section>'''

html = re.sub(r'<section id="product">.*?</section>', new_product, html, flags=re.DOTALL)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)
