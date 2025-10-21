# 🌍 Bon Voyage

Bon Voyage is a modern, intelligent travel planning application that uses Gemini AI to generate personalized itineraries based on your preferences, budget, and travel style. 

[Click here for the live site](https://bonvoyage-ai-trip-planner.vercel.app)


  ![trip-overview-ezgif com-speed (1)](https://github.com/user-attachments/assets/4e50a05d-75fd-430e-8bef-91044f41ec30)



## 🤖 Technologies
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Gemini AI API](https://ai.google.dev/gemini-api)
- [Firebase](https://firebase.google.com/)

## ✨ Features

### 🤖 AI-Powered Trip Generation
- **Smart Itinerary Creation**: Uses Google's Gemini AI to generate detailed, personalized travel plans
- **Comprehensive Planning**: Includes hotels, attractions, restaurants, and daily schedules
- **Budget-Conscious**: Tailors recommendations based on your selected budget (Cheap, Modest, Luxury)
- **Traveler-Specific**: Adapts suggestions for solo travelers, couples, families, or groups

### 🗺️ Interactive Location Selection
- **Google Places Integration**: Search and select destinations using Google Places Autocomplete
- **Real-time Suggestions**: Get instant location recommendations as you type
- **Global Coverage**: Plan trips to any destination worldwide

### 👤 User Authentication
- **Google OAuth**: Secure login with Google authentication
- **Personal Trip Storage**: Save and access your generated trips
- **User-Specific Data**: Each user's trips are privately stored and accessible

### 📱 Modern UI/UX
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Intuitive Interface**: Clean, modern design with smooth interactions
- **Loading States**: Visual feedback during AI processing
- **Toast Notifications**: Real-time status updates and error handling

### 🏨 Detailed Trip Information
- **Hotel Recommendations**: Complete hotel listings with prices, ratings, and descriptions
- **Attraction Details**: Places to visit with descriptions, pricing, and timing
- **Daily Itineraries**: Hour-by-hour breakdown of activities
- **Geographic Data**: Coordinates and addresses for easy navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Google Cloud Platform account (for Places API and OAuth)
- Firebase project
- Google AI Studio account (for Gemini API)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/philsmirnoff/ai-trip-planner.git
   cd ai-trip-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_GOOGLE_PLACE_API_KEY=your_google_places_api_key
   VITE_GOOGLE_AUTH_CLIENT_ID=your_google_oauth_client_id
   VITE_GEMINI_API_KEY=your_gemini_api_key
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   ```

4. **Firebase Configuration**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Copy your Firebase configuration to `src/service/firebaseConfig.js`

5. **Google APIs Setup**
   - Enable Google Places API in [Google Cloud Console](https://console.cloud.google.com/)
   - Set up OAuth 2.0 credentials for Google Sign-In
   - Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/)

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
ai-trip-planner/
├── public/
│   ├── landing.png          # Landing page hero image
│   ├── placeholder.jpg      # Default placeholder image
│   └── vite.svg            # Vite logo
├── src/
│   ├── components/
│   │   ├── custom/         # Custom React components
│   │   │   ├── Header.jsx  # Navigation header
│   │   │   └── Hero.jsx    # Landing page hero section
│   │   └── ui/             # Reusable UI components
│   │       ├── button.jsx  # Button component
│   │       ├── dialog.jsx  # Modal dialog component
│   │       ├── input.jsx   # Input field component
│   │       ├── popover.jsx # Popover component
│   │       └── sonner.jsx  # Toast notification component
│   ├── constants/
│   │   └── options.jsx     # Application constants and options
│   ├── create-trip/
│   │   └── index.jsx       # Trip creation form
│   ├── my-trips/
│   │   ├── components/
│   │   │   └── UserTripCardItem.jsx  # Trip card component
│   │   └── index.jsx       # User trips listing page
│   ├── service/
│   │   ├── AIModal.js      # Google Gemini AI integration
│   │   ├── firebaseConfig.js  # Firebase configuration
│   │   └── GlobalApi.jsx   # Global API utilities
│   ├── view-trip/
│   │   ├── components/     # Trip viewing components
│   │   │   ├── Footer.jsx  # Trip page footer
│   │   │   ├── HotelCardItem.jsx  # Hotel display component
│   │   │   ├── Hotels.jsx  # Hotels listing component
│   │   │   ├── InfoSection.jsx  # Trip info section
│   │   │   ├── PlaceCardItem.jsx  # Place display component
│   │   │   └── PlacesToVisit.jsx  # Places listing component
│   │   └── tripId/
│   │       └── index.jsx   # Individual trip view page
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── components.json          # UI components configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite build configuration
└── vercel.json             # Vercel deployment configuration
```

## 🛠️ Technologies Used

### Frontend
- **React 18.3.1** - Modern React with hooks and functional components
- **Vite 5.3.4** - Fast build tool and development server
- **React Router DOM 6.26.1** - Client-side routing
- **Tailwind CSS 3.4.7** - Utility-first CSS framework
- **Lucide React 0.424.0** - Beautiful icon library

### Backend & Services
- **Firebase 10.13.0** - Backend-as-a-Service for data storage
- **Firestore** - NoSQL database for trip storage
- **Google Gemini AI** - AI model for trip generation
- **Google Places API** - Location search and autocomplete
- **Google OAuth** - User authentication

### UI Components
- **Radix UI** - Accessible, unstyled UI components
- **Class Variance Authority** - Component variant management
- **Sonner** - Toast notification system
- **React Icons** - Icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🎯 Usage

### Creating a Trip

1. **Start Planning**: Click "Get Started, It's Free" on the landing page
2. **Select Destination**: Use the Google Places search to find your destination
3. **Choose Duration**: Enter the number of days for your trip
4. **Set Budget**: Select from Cheap, Modest, or Luxury options
5. **Specify Travelers**: Choose your travel group (Solo, Couple, Family, Friends)
6. **Generate Plan**: Click "Generate Travel Plan" and wait for AI processing
7. **View Results**: Get a comprehensive itinerary with hotels and attractions

### Managing Trips

- **View All Trips**: Access your saved trips from the "My Trips" page
- **Trip Details**: Click on any trip to view the full itinerary
- **Hotel Information**: Browse recommended hotels with prices and ratings
- **Daily Plans**: See hour-by-hour activity schedules
- **Place Details**: Get detailed information about attractions and restaurants

## 🔧 Configuration

### Google Places API
- Enable the Places API in Google Cloud Console
- Create an API key with Places API restrictions
- Add your domain to the API key restrictions

### Google OAuth
- Create OAuth 2.0 credentials in Google Cloud Console
- Add your domain to authorized origins
- Configure the consent screen

### Firebase Setup
- Create a new Firebase project
- Enable Firestore Database
- Set up security rules for data access
- Add your web app to the Firebase project

### Gemini AI
- Get an API key from Google AI Studio
- Ensure the API key has access to the Gemini model
- Monitor usage and set up billing if needed

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Environment Variables**: Add all required environment variables
3. **Deploy**: Vercel will automatically deploy on every push to main

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for intelligent trip generation
- **Google Places API** for location services
- **Firebase** for backend infrastructure
- **React Community** for excellent documentation and tools
- **Tailwind CSS** for beautiful styling utilities

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/philsmirnoff/ai-trip-planner/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

---

**Happy Traveling! ✈️🌍**
