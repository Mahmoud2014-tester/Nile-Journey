# Safar Travel Website

## Overview

Safar Travel is a premium travel services web application targeting Egyptian and Arab travelers. The platform showcases destinations across the Arab world (Egypt, UAE, Jordan, Morocco, Saudi Arabia) with curated tour packages, destination discovery, and inquiry submission functionality.

The application follows a monorepo structure with a React frontend and Express backend, using PostgreSQL for data persistence. It features bilingual support (Arabic RTL and English LTR), dark/light theme switching, and a design inspired by major travel platforms like Airbnb and Booking.com.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **Component Library**: shadcn/ui (New York style) with Radix UI primitives
- **Build Tool**: Vite with HMR support

The frontend lives in `/client/src` with a clear separation:
- `/components` - Reusable UI components (Header, Hero, Cards, etc.)
- `/components/ui` - shadcn/ui base components
- `/pages` - Route-level page components
- `/hooks` - Custom React hooks
- `/lib` - Utilities and API client

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **API Style**: RESTful JSON API under `/api/*` prefix
- **Session Storage**: PostgreSQL-backed sessions via connect-pg-simple

The server code resides in `/server`:
- `index.ts` - Application entry point and middleware setup
- `routes.ts` - API route definitions
- `storage.ts` - Database access layer implementing IStorage interface
- `db.ts` - Drizzle database connection
- `vite.ts` - Development server integration
- `static.ts` - Production static file serving

### Data Layer
- **Schema Location**: `/shared/schema.ts` - Shared between frontend and backend
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Entities**: Users, Destinations, Packages, Inquiries

### Build System
- Development: Vite dev server proxied through Express
- Production: Vite builds to `/dist/public`, esbuild bundles server to `/dist/index.cjs`
- Database migrations: Drizzle Kit with `db:push` command

### Design System
- Typography: Tajawal (Arabic) and Inter (English) via Google Fonts
- Color scheme: Warm, travel-inspired palette with orange/amber primary colors
- Light/dark mode support with CSS variables
- RTL/LTR language direction switching

## External Dependencies

### Database
- **PostgreSQL**: Primary database via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management

### UI/Component Libraries
- **Radix UI**: Accessible component primitives (Dialog, Dropdown, Tabs, etc.)
- **shadcn/ui**: Pre-built component styling system
- **Lucide React**: Icon library
- **react-icons**: Additional social media icons

### Frontend Libraries
- **TanStack React Query**: Data fetching and caching
- **react-hook-form**: Form state management
- **embla-carousel-react**: Carousel functionality
- **date-fns**: Date manipulation
- **wouter**: Lightweight router

### Backend Libraries
- **express-session**: Session management
- **connect-pg-simple**: PostgreSQL session store
- **zod**: Runtime validation

### Fonts
- Google Fonts: Tajawal and Inter loaded via CDN in `client/index.html`