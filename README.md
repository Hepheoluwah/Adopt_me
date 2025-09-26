# 🐾 Adopt Me - Pet Adoption Platform

A modern, responsive web application that connects potential pet owners with adorable animals available for adoption. Built with React and featuring a beautiful, animated UI with micro-interactions.

The Adopt Me project is designed to facilitate pet adoption by providing a user-friendly interface for browsing and adopting pets. It aims to connect potential pet owners with animals available for adoption from various shelters or organizations.

## ✨ Purpose
The main purpose of the Adopt Me project is to:

Promote Pet Adoption: Encourage people to adopt pets rather than buy them from breeders.
Facilitate Search and Adoption: Provide a platform where users can easily search for available pets based on criteria such as species, breed, location, etc., and initiate the adoption process.
Raise Awareness: Raise awareness about pet adoption benefits, responsible pet ownership, and the importance of providing loving homes for animals in need.

![Adopt Me](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-3.1.4-646CFF) ![License](https://img.shields.io/badge/License-ISC-green)

## ✨ Features

- 🔍 **Advanced Pet Search** - Filter pets by animal type, breed, and location
- 🖼️ **Interactive Pet Gallery** - Beautiful carousel with smooth transitions
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast Loading** - Skeleton screens and optimized performance
- 🎨 **Modern UI/UX** - Glassmorphism effects, animations, and micro-interactions
- 💝 **Adoption Process** - Streamlined pet adoption workflow
- 🔄 **Real-time Updates** - Live data from pet adoption APIs

## 🚀 Live Demo

[View Live Demo] https://adopt-me-byifeoluwa.vercel.app/

## 🛠️ Technologies Used

### Frontend Framework
- **React 18.2.0** - Modern React with hooks and functional components
- **React Router DOM 6.4.1** - Client-side routing and navigation
- **React Icons 4.8.0** - Beautiful icon library

### Build Tools & Development
- **Vite 3.1.4** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting and style consistency

### State Management & Data Fetching
- **TanStack React Query 4.10.1** - Powerful data synchronization for React
- **React Context API** - Global state management for adopted pets

### Styling & Design
- **CSS3** - Custom CSS with modern features
- **CSS Custom Properties** - Design system with consistent variables
- **CSS Grid & Flexbox** - Modern layout techniques
- **CSS Animations** - Smooth transitions and micro-interactions
- **Glassmorphism Effects** - Modern backdrop blur and transparency
- **Responsive Design** - Mobile-first approach with breakpoints

### APIs & Data
- **Pets API** - External API for pet data (`http://pets-v2.dev-apis.com`)
- **Fetch API** - Modern HTTP client for API requests

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone 
   cd adopt-me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── App.jsx              # Main application component
│   ├── SearchParams.jsx     # Search form component
│   ├── Results.jsx          # Pet results display
│   ├── Pet.jsx              # Individual pet card
│   ├── Details.jsx          # Pet detail page
│   ├── Carousel.jsx         # Image carousel component
│   ├── Modal.jsx            # Modal dialog component
│   ├── Footer.jsx           # Footer component
│   └── ErrorBoundary.jsx    # Error handling
├── hooks/
│   └── useBreedList.js      # Custom hook for breed data
├── services/
│   ├── fetchPets.js         # Pet details API
│   ├── fetchSearch.js       # Pet search API
│   └── fetchBreedList.js    # Breed list API
├── context/
│   └── AdoptedPet.js        # Context for adopted pets
├── assets/
│   └── images/              # Logo and static images
├── style.css                # Global styles and design system
└── index.html               # HTML template
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (`#0ea5e9` to `#0284c7`)
- **Secondary**: Purple gradient (`#dd5bff` to `#c73ae8`)
- **Success**: Green gradient (`#22c55e` to `#16a34a`)
- **Accent**: Orange gradient (`#f59e0b` to `#d97706`)
- **Neutral**: Gray scale (`#f8fafc` to `#0f172a`)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700
- **Responsive Scale**: From 0.75rem to 3rem

### Spacing & Layout
- **Spacing Scale**: 0.25rem to 5rem (4px to 80px)
- **Border Radius**: 0.375rem to 1.5rem
- **Shadows**: 5 levels from subtle to dramatic
- **Breakpoints**: 480px, 768px, 1024px, 1200px

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run start        # Alternative start command

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 📱 Responsive Design

The application is fully responsive with breakpoints optimized for:
- **Mobile**: 320px - 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: 1025px+

## ♿ Accessibility Features

- **Keyboard Navigation** - Full keyboard support
- **Screen Reader Support** - Proper ARIA labels and semantic HTML
- **Focus Management** - Visible focus indicators
- **High Contrast Mode** - Support for high contrast preferences
- **Reduced Motion** - Respects user motion preferences
- **Touch Targets** - Minimum 44px touch targets for mobile

## 🎭 Animations & Interactions

- **Page Transitions** - Smooth fadeInUp animations
- **Hover Effects** - Transform and shadow transitions
- **Loading States** - Skeleton screens with shimmer effects
- **Micro-interactions** - Button hover states and icon animations
- **Carousel Transitions** - Smooth image transitions
- **Modal Animations** - SlideInUp modal entrance

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_PET_API_URL=http://pets-v2.dev-apis.com
```

### Vite Configuration
The project uses Vite with React plugin for fast development and optimized builds.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ifeoluwa Adeniran**
- GitHub: https://github.com/Hepheoluwah/Adopt_me
- LinkedIn: https://linkedin.com/in/ifeoluwa-adeniran-09183a1ba

## 🙏 Acknowledgments

- **Pets API** - For providing the pet data
- **React Community** - For the amazing ecosystem
- **Design Inspiration** - Modern UI/UX patterns
- **Contributors** - Everyone who helped improve this project

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the maintainer
- Check the documentation

---

⭐ **Star this repository if you found it helpful!**

🐾 **Help us find loving homes for more pets!**