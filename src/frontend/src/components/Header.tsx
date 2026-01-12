import { Anchor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export default function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Anchor className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold tracking-tight">Sailing Guide</span>
                </div>
                <nav className="hidden md:flex items-center gap-6">
                    <a href="#what-is-sailing" className="text-sm font-medium transition-colors hover:text-primary">
                        What is Sailing
                    </a>
                    <a href="#why-sail" className="text-sm font-medium transition-colors hover:text-primary">
                        Why Sail
                    </a>
                    <a href="#adventure" className="text-sm font-medium transition-colors hover:text-primary">
                        Adventure & Nature
                    </a>
                    <a href="#art-of-sailing" className="text-sm font-medium transition-colors hover:text-primary">
                        The Art of Sailing
                    </a>
                    <a href="#wing-foils" className="text-sm font-medium transition-colors hover:text-primary">
                        Wing Foils
                    </a>
                    <a href="#hydrofoils" className="text-sm font-medium transition-colors hover:text-primary">
                        Hydrofoils
                    </a>
                    <a href="#timeline" className="text-sm font-medium transition-colors hover:text-primary">
                        Timeline
                    </a>
                </nav>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    aria-label="Toggle theme"
                >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </div>
        </header>
    );
}
