# Clipnest - Pinterest Clone

A modern, responsive Pinterest clone built with React, featuring a beautiful design and custom color theme.

## 🌟 Features

- **Beautiful UI/UX**: Modern design with custom Clipnest color scheme
- **Responsive Design**: Works perfectly on all devices
- **Post Management**: Create, view, like, save, and share posts
- **Search & Explore**: Find posts by category or search terms
- **User Profiles**: View user profiles with posts and stats
- **Interactive Elements**: Like, comment, and save functionality
- **Category Filters**: Browse posts by different categories
- **Mobile-First**: Optimized for mobile and desktop

## 🎨 Custom Design

- **Brand**: Clipnest (instead of Pinterest)
- **Terminology**: "Posts" instead of "Pins"
- **Color Scheme**: Custom purple/indigo theme (#6366f1, #8b5cf6)
- **Modern UI**: Clean, card-based design with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clipnest
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header/         # Navigation header
│   └── Post/           # Individual post component
├── pages/              # Page components
│   ├── Home/           # Home page with posts grid
│   ├── Explore/        # Explore page with search & filters
│   ├── CreatePost/     # Create new post form
│   ├── Profile/        # User profile page
│   └── PostDetail/     # Detailed post view
├── App.js              # Main app component
├── App.css             # App-specific styles
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎯 Key Components

### Header
- Logo and branding
- Search functionality
- Navigation menu
- Mobile-responsive design

### Post Component
- Image display with hover effects
- Like, comment, and save buttons
- Author information
- Responsive grid layout

### Home Page
- Masonry-style posts grid
- Welcome message
- Loading states

### Explore Page
- Category filters
- Search functionality
- Filtered posts display

### Create Post
- Image upload with preview
- Form validation
- Category selection
- Tags and location

### Profile Page
- User information display
- Posts grid
- Tabbed navigation
- Stats and details

### Post Detail
- Full-size image view
- Detailed information
- Comments system
- Interactive actions

## 🎨 Customization

### Colors
The app uses CSS custom properties for easy theming:

```css
:root {
  --primary-color: #6366f1;      /* Main brand color */
  --secondary-color: #8b5cf6;    /* Secondary brand color */
  --accent-color: #06b6d4;       /* Accent color */
  --success-color: #10b981;      /* Success states */
  --warning-color: #f59e0b;      /* Warning states */
  --error-color: #ef4444;        /* Error states */
}
```

### Styling
- Modern CSS with Flexbox and Grid
- Smooth transitions and animations
- Responsive breakpoints
- Consistent spacing and typography

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **CSS3**: Modern CSS features and custom properties
- **React Icons**: Beautiful icon library
- **Framer Motion**: Smooth animations (ready for future use)

## 🔧 Available Scripts

- `npm start`: Start development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm eject`: Eject from Create React App

## 🚀 Deployment

Build the app for production:

```bash
npm run build
```

The build folder contains the production-ready files that can be deployed to any static hosting service.

## 🎯 Future Enhancements

- User authentication system
- Real-time notifications
- Advanced search filters
- Social sharing features
- Dark mode toggle
- Infinite scroll
- Image optimization
- Backend API integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue in the repository.

---

**Clipnest** - Discover and share amazing posts with the world! 📌✨
