# 🎤 AI Interview Mocker

An AI-powered mock interview platform that helps candidates practice real interview questions, record their answers, and get instant AI-driven feedback — all in one place.

🔗 **Live Demo:** [ai-interview-mocker-prep.vercel.app](https://ai-interview-mocker-prep.vercel.app)

---

## ✨ Features

- 🧠 **AI-Generated Questions** — Role-specific questions based on job position, tech stack & experience
- 🎙️ **Voice Answer Recording** — Answer using microphone, just like a real interview
- 📊 **Instant AI Feedback** — Get ratings and improvement tips for every answer
- 📁 **Interview History** — Review all past sessions from your dashboard
- 🔐 **Authentication** — Secure sign-in/sign-up with Clerk
- 📱 **Responsive Design** — Works on desktop and mobile

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | JavaScript |
| Styling | Tailwind CSS + shadcn/ui |
| Authentication | Clerk |
| AI Model | Google Gemini AI |
| Database | Neon (PostgreSQL) |
| ORM | Drizzle ORM |
| Deployment | Vercel |

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/ahmed-raza-24/AI-Interview_Mocker.git
cd AI-Interview_Mocker
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

NEXT_PUBLIC_DRIZZLE_DB_URL=your_neon_postgres_url

NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5
NEXT_PUBLIC_INFORMATION="Start your AI Mock Interview by enabling your camera & microphone. Answer 5 questions and get instant feedback at the end. We never record your video — disable camera access anytime."
```

### 4. Push database schema
```bash
npm run db:push
```

### 5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
app/
├── (auth)/                  # Sign in & Sign up pages
├── dashboard/               # Main dashboard
│   ├── _components/         # Header, InterviewList, AddNewInterview
│   ├── interview/
│   │   └── [interviewId]/
│   │       ├── start/       # Interview session with webcam & recording
│   │       └── feedback/    # AI feedback & ratings
│   ├── questions/           # FAQ page
│   ├── upgrade/             # Pricing page
│   └── howitworks/          # How it works page
├── page.js                  # Landing page
utils/
├── db.js                    # Drizzle DB connection
├── schema.js                # Database schema
└── GeminiAIModel.js         # Gemini AI configuration
```

---

## 📸 Screenshots

| Landing Page | Dashboard | Interview Session |
|---|---|---|
| <img width="1890" height="946" alt="landingPage" src="https://github.com/user-attachments/assets/467215fa-0d35-4381-96e7-4c9a917fffaf" /> |
 | <img width="1911" height="945" alt="DashboardPage" src="https://github.com/user-attachments/assets/115c081b-fb18-4f77-ae43-d2677ee4a7d9" /> |
 | <img width="1903" height="924" alt="InterviewPage" src="https://github.com/user-attachments/assets/8fc6d2f5-378f-4466-9f11-f29e78514771" /> |

---

## 🔮 Future Improvements

- [ ] Real payment integration with Razorpay
- [ ] Video recording & playback
- [ ] Progress analytics dashboard
- [ ] Multi-language support

---

## 👨‍💻 Author

**Ahmed Raza**
- GitHub: [@ahmed-raza-24](https://github.com/ahmed-raza-24)
- LinkedIn: [linkedin.com/in/ahmed-raza](https://www.linkedin.com/in/ahmed-raza-44b7b1370/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
