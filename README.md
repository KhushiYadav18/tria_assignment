# Contact List Application

A modern, responsive contact list application built with Next.js, TypeScript, and Tailwind CSS. This application demonstrates core frontend development skills including React component design, state management, form validation, and API interaction patterns.

## Features

### Core Features
- **View Contact List**: Display all contacts in a beautiful, responsive grid layout
- **Search Contacts**: Real-time search functionality to filter contacts by name
- **Add New Contact**: Modal-based form to add new contacts with comprehensive validation

### Additional Features
- **Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Form Validation**: Comprehensive client-side validation for all input fields
- **Empty States**: User-friendly empty states when no contacts match search criteria
- **Visual Feedback**: Hover effects, loading states, and smooth transitions

##  Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **React**: 18.3.1

##  Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.x or higher
- npm or yarn package manager
- Git (for version control)

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd contact-list-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
contact-list-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout component
│   │   ├── page.tsx             # Main page component
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── ContactCard.tsx      # Individual contact card component
│   │   ├── ContactList.tsx      # Contact list grid component
│   │   ├── SearchBar.tsx        # Search input component
│   │   └── AddContactModal.tsx  # Add contact modal form
│   ├── types/
│   │   └── contact.ts           # TypeScript type definitions
│   └── data/
│       └── mockContacts.ts      # Mock contact data
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

##  Design Decisions

### Component Architecture
- **Modular Design**: Each feature is broken down into reusable, focused components
- **Type Safety**: Full TypeScript implementation for better code reliability
- **Client Components**: Strategic use of "use client" directive for interactive features

### State Management
- **Local State**: Uses React hooks (useState, useMemo) for efficient state management
- **Derived State**: Search filtering implemented with useMemo for performance optimization

### Data Handling
- **Mock Data**: Uses hardcoded mock data to simulate API responses
- **Data Structure**: Simple, extensible Contact interface for easy integration with real APIs

### UI/UX Choices
- **Gradient Backgrounds**: Modern gradient design for visual appeal
- **Card-Based Layout**: Clean card design for easy scanning
- **Color-Coded Avatars**: Dynamic avatar colors based on contact name for visual distinction
- **Smooth Animations**: Subtle hover effects and transitions for better user experience
- **Responsive Grid**: Adaptive grid layout (1 column mobile, 2 tablet, 3 desktop)
