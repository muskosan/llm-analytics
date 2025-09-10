# Pollen Analytics

A prototype exercise, written in React + Tailwind. 
LLM Analytics Platform for monitoring and analyzing AI model performance.

## Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### UI Components
- **Radix UI** - Headless, accessible component primitives
- **Lucide React** - Beautiful & consistent icon library
- **Recharts** - Composable charting library for data visualization
- **Sonner** - Toast notifications

### Development Tools
- **SWC** - Fast TypeScript/JavaScript compiler
- **ESNext** - Modern JavaScript features
- **Hot Module Replacement** - Fast development with instant updates

### Key Features
- Dark theme optimized interface
- Responsive dashboard layout
- Custom scrollbar styling
- Modular component architecture
- Type-safe development

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx   # Main dashboard layout
│   ├── pages/          # Page components
│   └── ui/             # Reusable UI components
├── styles/
│   └── globals.css     # Global styles and theme
└── main.tsx            # Application entry point
```