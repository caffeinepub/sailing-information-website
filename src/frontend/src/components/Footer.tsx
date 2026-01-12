import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-border/40 bg-muted/30 py-8">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <p className="text-sm text-muted-foreground">
                        © 2025. Built with{' '}
                        <Heart className="inline h-4 w-4 fill-red-500 text-red-500" /> using{' '}
                        <a
                            href="https://caffeine.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-foreground transition-colors hover:text-primary"
                        >
                            caffeine.ai
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
