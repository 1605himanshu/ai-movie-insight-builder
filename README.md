
# 🎬 AI Movie Insight Builder

AI Movie Insight Builder is a full-stack web application that allows users to enter an IMDb ID and receive detailed movie information along with AI-generated audience insights.

The application fetches movie metadata from the OMDb API and analyzes sample audience reviews using AI to provide a summarized sentiment analysis.

---

# 🚀 Live Demo

Deployed on **Render**

🔗 https://your-render-deployment-link

---

# 📌 Features

* Fetch movie details using **IMDb ID**
* Display complete movie metadata
* Show movie poster and ratings
* AI-powered audience sentiment summary
* Graceful fallback when AI quota is unavailable
* Responsive UI built with TailwindCSS

---

# 🛠 Tech Stack

| Layer       | Technology         |
| ----------- | ------------------ |
| Frontend    | Next.js (React)    |
| Styling     | TailwindCSS        |
| Backend API | Next.js API Routes |
| Movie Data  | OMDb API           |
| AI Analysis | OpenAI API         |
| Deployment  | Render             |

---

# 🧠 Tech Stack Rationale

### Next.js

Next.js was chosen because it provides:

* Built-in API routes for backend logic
* Server-side rendering support
* Optimized performance
* Simplified full-stack development in a single project

### TailwindCSS

TailwindCSS allows rapid UI development with:

* Utility-first styling
* Responsive design
* Clean and maintainable CSS

### OMDb API

OMDb provides a reliable dataset for:

* Movie metadata
* Ratings
* Posters
* Cast and crew information

### OpenAI API

Used to generate AI-based sentiment insights from audience reviews.

### Render Deployment

Render provides an easy and reliable way to host full-stack applications with:

* Continuous deployment from GitHub
* Environment variable support
* Simple configuration

---

# ⚙️ Setup Instructions

Follow the steps below to run the project locally.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/1605himanshu/ai-movie-insight-builder.git
cd ai-movie-insight-builder
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory.

Example:

```
OMDB_API_KEY=your_omdb_api_key
OPENAI_API_KEY=your_openai_api_key
```

---

### 4️⃣ Start Development Server

```
npm run dev
```

Application will run at:

```
http://localhost:3000
```

---

# 🧪 Example IMDb IDs for Testing

You can test the application with:

```
tt4154796  (Avengers: Endgame)
tt0133093  (The Matrix)
tt3896198  (Guardians of the Galaxy Vol. 2)
tt0120338  (Titanic)
```

---

# 🔁 Application Flow

1. User enters an **IMDb ID**
2. Application fetches movie data from **OMDb API**
3. Sample audience reviews are retrieved
4. Reviews are sent to **OpenAI API** for sentiment analysis
5. The UI displays:

   * Movie details
   * Ratings
   * AI audience insight

---

# ⚠️ Assumptions

The following assumptions were made while building the project:

* Users know or can obtain a valid **IMDb ID**
* The OMDb API provides accurate movie metadata
* AI sentiment analysis is generated from sample reviews rather than live audience data
* If the OpenAI API quota is exceeded, the system falls back gracefully to prevent application failure

---

# 🧩 Error Handling

The system includes fallback handling for:

* Invalid IMDb IDs
* API request failures
* AI quota limitations

If AI analysis fails, the UI shows a fallback message instead of breaking.

---


# 🔮 Future Improvements

Potential enhancements:

* Search movies by title instead of IMDb ID
* Real audience review scraping
* More advanced sentiment analytics
* User authentication
* Movie recommendation engine

---

# 👨‍💻 Author

Himanshu Yadav
B.Tech Computer Science & Engineering
Full-Stack Developer


