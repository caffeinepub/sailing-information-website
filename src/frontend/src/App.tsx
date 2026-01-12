import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIsSailing from './components/WhatIsSailing';
import WhyPeopleSail from './components/WhyPeopleSail';
import AdventureAndNature from './components/AdventureAndNature';
import TheArtOfSailing from './components/TheArtOfSailing';
import WingFoils from './components/WingFoils';
import Footer from './components/Footer';

function App() {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <Hero />
                    <WhatIsSailing />
                    <WhyPeopleSail />
                    <AdventureAndNature />
                    <TheArtOfSailing />
                    <WingFoils />
                </main>
                <Footer />
                <Toaster />
            </div>
        </ThemeProvider>
    );
}

export default App;
