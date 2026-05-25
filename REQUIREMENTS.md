# Bloom — Personal Life Management Website
## Requirements & Sprint Plan (Draft v1 — pending confirmation)

> A calm, inspiring space to see the whole shape of your life — your days, your habits, your stories, your dreams — and watch them grow and take flight.

---

## 1. Vision & Design Direction

**Product Name (working title):** *Bloom* — because the theme is **growth that takes flight**: seeds → sprouts → blossoms → butterflies → soaring birds. We can change the name if you like (alternatives: *Flourish*, *Soar*, *Wings*, *Petal*, *Garden*).

**Design Theme — "Growth & Flight":**
- Soft botanical illustrations: leaves, sprouts, petals, vines.
- Subtle animations: gentle sway, blooming effects when completing tasks, butterflies that appear on milestones.
- "Garden growth" visual metaphor on the dashboard — your garden fills in as you use the app.
- Encouraging micro-copy ("Your garden is blooming 🌱", "Look how far you've grown").

**Color Palette (sweet pastels):**
- Primary blush pink `#F8C8DC`
- Soft peach `#FFD8B1`
- Lavender mist `#D8BFD8`
- Sage green `#C8E6C9`
- Sky cream `#FFF6E5`
- Charcoal ink (for text) `#3D3D5C`
- Accent gold `#E6C895` (for celebrations / milestones)

**Typography:**
- Headings: *Playfair Display* or *Cormorant Garamond* (elegant, hand-crafted feel)
- Body: *Inter* or *Nunito* (warm, friendly, readable)

**Language:** Entire UI in **English**.

**Tone of voice:** Warm, encouraging, never judgmental. Empty states feel hopeful, not empty.

---

## 2. Information Architecture

A left-hand sidebar with iconography + a top-level **Dashboard** that gives the bird's-eye view.

```
🏡 Dashboard (overview / today)
📅 Calendar
✅ To-Do
🌱 Habits
💗 Mood Tracker
📓 Diary
🎯 Goals & Vision Board
📚 Library
   ├─ Movies
   ├─ Books
   └─ Resources
🛍  Wishlist
💡 Ideas
✍️  Novel Studio
📁 Projects
🎬 Creator Hub
💰 Finance
⚙️  Settings
```

---

## 3. Feature Requirements (in detail)

### 3.1 Dashboard (the bird's-eye view) — *added feature*
- Today's date with a soft greeting ("Good morning, Praew 🌸").
- Today's appointments (preview from Calendar).
- Today's to-dos (preview).
- Habit check-ins for today.
- Quick mood check-in widget.
- "Garden" visual that grows as you log activity.
- Quote / affirmation of the day.

### 3.2 Calendar
- Month / Week / Day views.
- Color-coded categories (Personal / Meeting / Errand / Other — user can add).
- Click a date → see and add events.
- Each event supports: title, time, category, location (optional), description / additional notes, recurrence (none / daily / weekly / monthly).
- Today highlight, drag-and-drop to reschedule (Sprint 2+ enhancement).
- Quick-add appointment from Dashboard.

### 3.3 To-Do List
- Daily list, grouped: Today / Tomorrow / Upcoming / Someday.
- Each task: title, optional due date, priority (low / medium / high), optional notes, category tag.
- Check off → satisfying bloom animation.
- Filter by tag, search.
- Carry-over: unfinished tasks roll forward to tomorrow.

### 3.4 Appointment Details (note-taking)
- Inside each calendar event, an editable "Notes" panel:
  - Pre-meeting prep (agenda, what I want to discuss).
  - Post-meeting reflection ("what happened", action items, follow-up).
  - Rich-text-lite: bullets, bold, italic, headings.

### 3.5 Habit Tracker
- Create unlimited habits, each with: name, icon, color, frequency (daily / specific weekdays / X times per week), optional reminder time.
- Visual: monthly grid with check marks; current streak counter.
- Heatmap-style yearly view per habit.
- Encouraging copy on streaks ("7 days strong — keep growing!").

### 3.6 Mood / Emotional Tracker
- Monthly calendar grid; one entry per day.
- Mood scale of 5 (sad → angry → meh → happy → joyful) with emoji + color.
- Optional one-line note for the day's mood.
- Optional tags (work, family, health, weather...).
- Monthly summary: most common mood, mood trend chart.

### 3.7 Resource Library
- Save any link / video / article you found interesting.
- Each entry: title, URL, type (Article / Video / Podcast / Tool / Other), tags, personal note ("why I saved this"), thumbnail (auto from URL or manual upload).
- Filter by tag and type; search by title or note.
- "Read later" toggle and "Favourite" star.

### 3.8 Movies Log
- Add a movie with: title, year, genre tags, status (Watched / Watching / Want to Watch), rating ⭐1–5, date watched, poster image (URL or upload), personal review/notes.
- Filter and search; stats: total watched this year.

### 3.9 Books Log
- Same shape as movies + reading progress (% or pages), favourite quote field, "currently reading" shelf.
- Stats: books read this year, pages read.

### 3.10 Ideas Space
- Quick-capture cards (sticky-note style on a soft pastel board).
- Each idea: title, body, tags, color of the card.
- Move/pin/archive ideas. Search.
- "Spark" button → AI-flavored prompt suggestions (offline, curated prompts) to unblock you.

### 3.11 Finance (Income & Expense)
- Log income and expenses with: date, amount, category (Food, Transport, Salary, Gift, Health, etc. — customizable), note.
- Monthly summary: total in / out / balance + pie chart by category + bar chart per month.
- Filter by month, category.
- Currency setting (default THB; selectable).

### 3.12 Novel Studio
- Per-novel workspace. Each novel has:
  - Synopsis & premise.
  - Characters (name, role, traits, backstory).
  - World-building notes.
  - Plot outline (acts / chapters / beats).
  - Scenes / chapters (rich-text-lite writing area).
  - Word-count tracker per chapter & total.
  - Inspiration board (images, quotes — like a mini moodboard).

### 3.13 Wishlist
- Items with: name, image (URL/upload), price, link, priority, status (Wishing / Bought / Skipped), date added, note ("why I want this").
- Filter by status; total "still wishing" cost.

### 3.14 Projects (with tracking)
- Each project has: name, description, color, status (Planning / In Progress / On Hold / Done), start & target date, progress %.
- Inside a project:
  - Kanban board (To Do / Doing / Done) — drag-and-drop cards.
  - Milestones with checkboxes.
  - Notes / docs section.
  - Linked to-dos.

### 3.15 Content Creator Hub
- Content calendar (separate from main calendar) with platforms (IG / TikTok / YouTube / Blog / Other — customizable).
- Idea pipeline (Idea → Scripting → Filming → Editing → Scheduled → Published).
- Per-post card: caption draft, hashtag list, media references, publish date, platform, status, post-publish metrics (likes / views / saves — manual entry).
- Content series grouping.

### 3.16 Diary
- One entry per day; date auto-set, editable.
- Rich-text-lite body, mood selector linked to Mood Tracker, weather emoji, location (optional).
- **Photo attachments** (multiple per entry).
- Searchable archive by date / keyword / tag.

### 3.17 Goals & Vision Board
- **Goals**: title, category (Career, Health, Relationship, Money, Learning, Personal, Other), target date, milestones (sub-checkboxes), progress %, why this matters.
- **Vision Board**: a free-form pastel canvas where you place:
  - Images (URL or upload).
  - Quotes / affirmations (styled cards).
  - Goal cards (linked to Goals).
  - Re-arrangeable like a Pinterest-style moodboard.
- Multiple boards (e.g., "2026 Vision", "Career", "Travel").

---

## 4. Cross-cutting / Suggested Extra Features

These are additions I recommend — you can keep, drop, or postpone any of them:

1. **Global search** — one search box that finds anything across the site.
2. **Tags everywhere** — a unified tag system so you can connect a diary entry, an idea, and a goal.
3. **Quick capture** — a floating "+" button to quickly add a to-do / idea / mood from any page.
4. **Light / dark mode** — both with pastel palettes (a "moonlight" dark mode in soft mauve & navy).
5. **Data export & import** — download all your data as a JSON file; restore on another device.
6. **Reminders / browser notifications** — for events and habits (browser-permission based).
7. **Templates** — pre-baked templates for: gratitude journal entry, meeting notes, project kickoff.
8. **Yearly review page** — auto-generated end-of-year reflection (top habits, mood trend, books read, etc.).
9. **Local-first storage** — everything saved on your computer via browser storage (no server needed, privacy-first). Optional file export to back up.
10. **Multi-device note** — since storage is local-first, data lives in the browser you use. Export/import handles sync if needed.

---

## 5. Technical Approach

- **Type:** Static single-page web app (no server, no login).
- **Stack:** HTML + CSS + vanilla JavaScript (or lightweight framework via CDN); a multi-page structure where each section is its own page sharing a common design system, with **localStorage** + **IndexedDB** (for images) for persistence.
- **Hosting:** Just open `index.html` in a browser — fully offline-capable.
- **Files structure (planned):**
  ```
  Self-Develop Website/
  ├── index.html              (Dashboard)
  ├── calendar.html
  ├── todo.html
  ├── habits.html
  ├── mood.html
  ├── diary.html
  ├── goals.html
  ├── library-movies.html
  ├── library-books.html
  ├── library-resources.html
  ├── wishlist.html
  ├── ideas.html
  ├── novel.html
  ├── projects.html
  ├── creator.html
  ├── finance.html
  ├── settings.html
  ├── assets/
  │   ├── css/styles.css      (shared design system)
  │   ├── js/storage.js       (shared data layer)
  │   ├── js/sidebar.js       (shared navigation)
  │   └── img/                (botanical SVGs, icons)
  ```
- **Why local-first:** privacy, no monthly cost, no login friction, instant. Trade-off: data lives in this browser unless exported.

---

## 6. Sprint Plan

Each sprint produces a working, openable website — the app gets richer over time. You can review at the end of each sprint.

### 🌱 Sprint 1 — Foundation & Daily Use
**Goal:** A beautiful, navigable shell with the daily-driver features.
- Design system: colors, typography, components (buttons, cards, inputs), botanical illustrations, sidebar nav.
- Shared storage layer + settings (theme toggle, name).
- **Dashboard** with greeting, today's snapshot, growing-garden visual.
- **Calendar** (month + day view, add/edit events with notes).
- **To-Do list** (add, complete, carry-over, categories).
- **Settings** page (name, theme, export/import data).

### 🌿 Sprint 2 — Self-Reflection & Tracking
**Goal:** The tools that help you check in with yourself.
- **Habit Tracker** (create habits, daily check-off, streak, monthly grid).
- **Mood Tracker** (monthly grid, daily mood + note + tags, summary).
- **Diary** (daily entry, rich-text-lite, photo attachments via IndexedDB).
- Dashboard integration: mood + habits + today's diary prompt.

### 📚 Sprint 3 — Personal Library
**Goal:** A place for everything you consume and want.
- **Movies** log.
- **Books** log.
- **Resources** library (links, videos, articles with tags).
- **Wishlist** (items, prices, statuses).
- Shared "library card" component used by all four.

### 🎨 Sprint 4 — Creative & Productivity Spaces
**Goal:** The workshop for your ideas and projects.
- **Ideas** space (sticky-note board, tags, pin/archive).
- **Novel Studio** (novel, characters, chapters, word count).
- **Projects** (kanban + milestones + notes).
- **Creator Hub** (content calendar + pipeline + per-post details).

### 🌸 Sprint 5 — Finance, Goals & Polish
**Goal:** Close the loop on the big picture and refine.
- **Finance** (income/expense, category charts, monthly summary).
- **Goals** (with milestones and progress).
- **Vision Board** (drag-arrangeable pastel canvas).
- Global search across everything.
- Animation polish, micro-interactions (bloom on complete, butterflies on milestone).
- Yearly review page.
- Final QA: every page works, responsive on common screen sizes, no console errors.

---

## 7. What I Need You to Confirm

Before I start Sprint 1, please confirm or adjust:

1. **Product name** — happy with *Bloom*? Or pick another (*Flourish*, *Soar*, *Wings*, *Petal*, *Garden*) or suggest your own.
2. **Color palette** — like the pastel set above? Want it warmer / cooler / more vivid?
3. **Information architecture** — any sections to merge, rename, drop, or add?
4. **Extra features (section 4)** — keep all, or drop some?
5. **Technical approach** — local-first (data stays on your computer, no login) sounds right?
6. **Sprint order** — okay to deliver in the order above, or shuffle?

Once you confirm, I'll start Sprint 1 right away. 🌱
