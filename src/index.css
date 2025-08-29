@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;700;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Design system: colors, gradients, fonts */
@layer base {
  :root {
    /* Portfolio Theme - Black & Sea Blue */
    --background: 0 0% 3%;
    --foreground: 0 0% 98%;

    --card: 0 0% 8%;
    --card-foreground: 0 0% 95%;

    --popover: 0 0% 8%;
    --popover-foreground: 0 0% 95%;

    --primary: 195 100% 50%;
    --primary-foreground: 0 0% 3%;

    --secondary: 0 0% 12%;
    --secondary-foreground: 0 0% 90%;

    --muted: 0 0% 15%;
    --muted-foreground: 0 0% 65%;

    --accent: 195 100% 45%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 0 0% 20%;
    --input: 0 0% 15%;
    --ring: 195 100% 50%;

    /* Custom Portfolio Colors */
    --sea-blue: 195 100% 50%;
    --sea-blue-dark: 195 100% 35%;
    --sea-blue-light: 195 100% 65%;
    --ocean-glow: 195 100% 50%;

    /* Gradients */
    --gradient-primary: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--sea-blue-dark)));
    --gradient-ocean: linear-gradient(45deg, hsl(var(--sea-blue)), hsl(220 100% 60%));
    --gradient-dark: linear-gradient(135deg, hsl(0 0% 8%), hsl(0 0% 3%));

    /* Shadows */
    --glow-primary: 0 0 30px hsl(var(--sea-blue) / 0.3);
    --glow-hover: 0 0 40px hsl(var(--sea-blue) / 0.5);

    --radius: 0.75rem;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;

    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;

    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;

    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;

    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;

    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;

    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;

    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;

    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground font-inter overflow-x-hidden;
  }

  html {
    scroll-behavior: smooth; /* Fixed typo */
  }
}

@layer components {
  /* Blinking Animation */
  .blink {
    animation: blink 2s ease-in-out infinite alternate;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0.7; }
  }

  /* Glow Effects */
  .glow-primary {
    box-shadow: var(--glow-primary);
  }

  .glow-hover:hover {
    box-shadow: var(--glow-hover);
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }

  /* Gradient Backgrounds */
  .gradient-primary {
    background: var(--gradient-primary);
  }

  .gradient-ocean {
    background: var(--gradient-ocean);
  }

  .gradient-dark {
    background: var(--gradient-dark);
  }

  /* Custom Button Variants */
  .btn-hero {
    @apply bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold;
    @apply hover:shadow-lg hover:scale-105 transition-all duration-300;
    @apply border border-primary/20;
    box-shadow: var(--glow-primary);
  }

  .btn-hero:hover {
    box-shadow: var(--glow-hover);
  }

  .btn-outline-glow {
    @apply border-2 border-primary text-primary bg-transparent px-6 py-3 rounded-lg;
    @apply hover:bg-primary hover:text-primary-foreground transition-all duration-300;
    @apply hover:shadow-lg hover:scale-105;
  }

  /* Section Styling */
  .section-container {
    @apply min-h-screen flex items-center justify-center py-20 px-4;
  }

  /* Card Effects */
  .card-hover {
    @apply transition-all duration-300 hover:scale-105 hover:shadow-xl;
    @apply border border-border/50 hover:border-primary/50;
  }

  /* Profile Image */
  .profile-image {
    @apply w-64 h-64 rounded-full border-4 border-primary shadow-2xl object-cover -mt-20;
    box-shadow: 0 0 60px hsl(var(--sea-blue) / 0.99);
  }

  /* Social Icons */
  .social-icon {
    @apply w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground;
    @apply hover:bg-primary hover:text-primary-foreground transition-all duration-300;
    @apply hover:scale-110 hover:shadow-lg;
  }

  /* Service Cards */
  .service-card {
    @apply bg-card border border-border rounded-xl p-8;
    @apply hover:border-primary/50 transition-all duration-200;
    @apply hover:shadow-xl hover:scale-95;
    background: linear-gradient(145deg, hsl(var(--card)), hsl(var(--secondary)));
  }

  /* Form Styling */
  .form-input {
    @apply w-full px-4 py-3 bg-input border border-border rounded-lg;
    @apply focus:border-primary focus:ring-2 focus:ring-primary/20;
    @apply transition-all duration-300 text-foreground;
  }

  /* Typography */
  .heading-xl {
    @apply font-orbitron font-bold text-6xl md:text-8xl;
  }

  .heading-lg {
    @apply font-orbitron font-bold text-4xl md:text-6xl;
  }

  .heading-md {
    @apply font-orbitron font-semibold text-2xl md:text-3xl;
  }

  .text-gradient {
    background: var(--gradient-ocean);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
