import { Waves } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-ocean-light via-ocean to-ocean-deep py-24 md:py-32">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="container relative">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-6 inline-flex items-center justify-center">
                        <Waves className="h-16 w-16 text-white/90" />
                    </div>
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                        The Art of Sailing
                    </h1>
                    <p className="text-lg text-white/90 md:text-xl">
                        Discover the timeless practice of harnessing wind and water, where adventure meets tranquility on
                        the open sea.
                    </p>
                </div>
            </div>
        </section>
    );
}
