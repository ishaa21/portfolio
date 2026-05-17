# Isha Zalavadia — Portfolio

Personal portfolio site built with vanilla HTML/CSS/JS, served via Express on Node.js.

## 🗂 Structure

```
portfolio/
├── public/          ← All frontend files
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server.js        ← Express server
├── package.json
├── render.yaml      ← Render deploy config
└── README.md
```

## 🚀 Deploy on Render (Free)

### Option A — GitHub + Render (Recommended)

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/ishaa21/portfolio.git
   git push -u origin main
   ```

2. Go to [render.com](https://render.com) → **New** → **Web Service**

3. Connect your GitHub repo

4. Render auto-detects `render.yaml` — just click **Deploy**

5. Your site is live at `https://isha-portfolio.onrender.com` in ~2 minutes ✅

### Option B — Manual Render Setup

| Setting | Value |
|--------|-------|
| Environment | Node |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Plan | Free |

## 💻 Run Locally

```bash
npm install
npm start
# Visit http://localhost:3000
```
