# Travel Website Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from Airbnb's visual storytelling, Booking.com's trust-building elements, and regional travel platforms. Focus on aspirational imagery combined with clear service presentation.

## Core Design Principles
1. **Cultural Authenticity**: Incorporate Middle Eastern design sensibilities with warm, welcoming aesthetics
2. **Visual Storytelling**: Lead with stunning destination imagery to inspire wanderlust
3. **Bilingual Excellence**: Seamless Arabic (RTL) and English (LTR) experiences with language toggle
4. **Trust & Clarity**: Transparent pricing, detailed itineraries, social proof

## Typography
- **Primary Font**: Tajawal (Arabic) / Inter (English) via Google Fonts
- **Headings**: Bold weights (700) for impact
- **Body Text**: Regular (400) and Medium (500) for readability
- **Sizes**: text-4xl/5xl for heroes, text-xl/2xl for section headers, text-base/lg for content

## Layout System
**Spacing Units**: Tailwind 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24
- Component spacing: gap-6 to gap-8
- Container: max-w-7xl with px-4 md:px-6

## Component Library

### Navigation
- Sticky header with logo, main navigation (Destinations, Packages, About, Contact), language toggle
- Mobile: Hamburger menu with slide-out drawer
- Include "Book Now" CTA button in header

### Hero Section
- **Large hero image** (100vh on desktop, 70vh mobile) showcasing iconic Egyptian/Arab destinations
- Overlay with search bar (destination, dates, travelers)
- Headline: "Discover the Magic of the Arab World" (Arabic equivalent)
- Blurred background buttons for CTAs

### Destination Grid
- Masonry/card grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Each card: Large image, destination name, starting price, "Explore" CTA
- Hover: Subtle scale transform

### Tour Packages
- Two-column layout (lg:grid-cols-2) for featured packages
- Package cards include: Hero image, title, duration, price, highlights (3-4 bullet points), "View Details" button
- Badge for "Popular" or "New" packages

### Search & Filters
- Sticky filter bar: Country dropdown, price range slider, duration selector
- Applied filters shown as removable chips

### Trust Elements
- Customer testimonials: Three-column grid with photos, quotes, names
- Statistics bar: "10,000+ Happy Travelers" / "50+ Destinations" / "5-Star Reviews"
- Partner logos (airlines, hotels)

### Contact/Booking Form
- Two-column: Form (left) + Contact info with office hours, WhatsApp, social links (right)
- Form fields: Name, email, phone, destination interest, travel dates, message
- Submit button: "Request Quote"

### Footer
- Four-column layout: About, Quick Links, Popular Destinations, Newsletter signup
- Social media icons, payment badges, language selector
- Copyright and legal links

## Images Strategy
- **Hero**: Full-width panoramic image of Pyramids/Petra/Dubai skyline (rotating carousel)
- **Destinations**: High-quality landscape photos (16:9 ratio)
- **Packages**: Vibrant activity/culture photos showing experiences
- **Testimonials**: Authentic customer travel photos
- **Trust badges**: Partner airline/hotel logos

## Responsive Behavior
- Desktop (1024px+): Multi-column grids, expanded navigation
- Tablet (768px-1023px): Two-column layouts, collapsible filters
- Mobile (<768px): Single column, stack all elements, bottom navigation consideration for key actions

## Animations (Minimal)
- Smooth scroll for anchor links
- Fade-in on scroll for sections (once, subtle)
- Image hover scale (1.05x)
- NO carousel auto-play, NO parallax effects

## Accessibility
- ARIA labels for language toggle and icons
- Sufficient color contrast (WCAG AA minimum)
- Focus states on all interactive elements
- Alt text for all destination images

## Special Considerations
- RTL-safe layouts using Tailwind's `rtl:` prefix
- Date pickers with Arabic calendar support
- Currency display (EGP/USD/AED)
- WhatsApp integration for instant booking inquiries
- Prayer times widget (optional for religious travelers)