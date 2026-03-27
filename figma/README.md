# SkillShikshya - Figma Design Implementation

A responsive web application showcasing SkillShikshya's learning journey platform, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Interactive Landing Page** - Three-card layout with hover animations showcasing the learning journey (Step In, Skill Up, Stand Out)
- **Dynamic Card Component** - Second card features cycling hover states with navigation controls
- **Course Page** - Dedicated page with course statistics and details
- **Responsive Design** - Fully responsive layout using Tailwind CSS
- **Smooth Animations** - Framer Motion integration for enhanced user experience
- **Routing** - React Router for seamless navigation between pages

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📁 Project Structure

```
figma/
├── src/
│   ├── components/
│   │   ├── Card.tsx          # Main card component with hover effects
│   │   ├── CourseCard.tsx   # Course display component
│   │   ├── SectionHeader.tsx # Section heading component
│   │   └── StatCard.tsx     # Statistics display component
│   ├── pages/
│   │   └── CoursePage.tsx   # Course page with stats and courses
│   ├── dummyData/
│   │   └── cards.ts         # Static data for cards
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── assets/              # Image assets (SVG, PNG)
│   ├── App.tsx             # Main app with routing
│   ├── App.css             # App-specific styles
│   ├── main.tsx            # React entry point
│   └── index.css           # Global styles
├── public/                  # Static assets
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🚦 Routes

- `/` - Main landing page with SkillShikshya journey cards
- `/course` - Course page with statistics and course listings

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build



```

## 🎨 Design Highlights

### Main Landing Page
- Three animated cards representing the learning journey
- Card 2 (Skill Up) features dynamic hover states that cycle through different content
- Navigation arrows to browse through hover states
- Hover effects reveal additional content and images

### Course Page
- Statistics display with large animated numbers
- Course cards with visual elements
- Rotated text elements for creative design

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔧 Dependencies

### Core Dependencies
- `react` & `react-dom` - UI framework
- `react-router-dom` - Client-side routing
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `tailwindcss` - Utility-first CSS framework
- `@tailwindcss/vite` - Tailwind Vite plugin

### Dev Dependencies
- `typescript` - Type safety
- `vite` - Build tool
- `eslint` - Code linting
- `@vitejs/plugin-react` - React plugin for Vite

---

Built with using React + TypeScript + Vite
