import { useState, useRef, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Generate remaining years with generic placeholders (4900 BC to 2026 AD)
const generateRemainingYears = (): Record<number, string> => {
    const data: Record<number, string> = {};
    const startYear = -4900;
    const endYear = 2026;
    
    for (let year = startYear; year <= endYear; year++) {
        const absYear = Math.abs(year);
        const era = year < 0 ? 'BC' : 'AD';
        data[year] = `Sailing history placeholder for year ${absYear} ${era}: maritime developments, vessel innovations, navigation advances, trade routes, exploration milestones, and seafaring achievements during this period.`;
    }
    
    return data;
};

const REMAINING_YEARS_DATA = generateRemainingYears();

export default function SailingTimeline() {
    const [selectedYear, setSelectedYear] = useState(2026);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    
    // State for dynamically loaded year data
    const [loadedYearData, setLoadedYearData] = useState<Record<number, string>>({});
    const [loadingYears, setLoadingYears] = useState<Set<number>>(new Set());
    const [errorYears, setErrorYears] = useState<Set<number>>(new Set());

    // Generate years from 6000 BC to 2026 AD
    const startYear = -6000;
    const endYear = 2026;
    const years: number[] = [];
    
    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }

    const formatYear = (year: number): string => {
        if (year < 0) {
            return `${Math.abs(year)} BC`;
        } else if (year === 0) {
            return '1 BC/AD';
        } else {
            return `${year} AD`;
        }
    };

    // Load year data dynamically for years 6000 BC to 4901 BC
    const loadYearData = async (year: number) => {
        // Only load for the first 1100 years (6000 BC to 4901 BC)
        if (year > -4901 || year < -6000) {
            return;
        }

        // Skip if already loaded, loading, or errored
        if (loadedYearData[year] || loadingYears.has(year) || errorYears.has(year)) {
            return;
        }

        setLoadingYears(prev => new Set(prev).add(year));

        try {
            const absYear = Math.abs(year);
            const fileName = `${absYear}BC.json`;
            const response = await fetch(`/src/data/years/${fileName}`);
            
            if (!response.ok) {
                throw new Error(`Failed to load year ${absYear} BC`);
            }

            const data = await response.json();
            
            setLoadedYearData(prev => ({
                ...prev,
                [year]: data.description || data.text || 'No description available'
            }));
        } catch (error) {
            console.error(`Error loading year ${Math.abs(year)} BC:`, error);
            setErrorYears(prev => new Set(prev).add(year));
        } finally {
            setLoadingYears(prev => {
                const newSet = new Set(prev);
                newSet.delete(year);
                return newSet;
            });
        }
    };

    const getYearDescription = (year: number): string => {
        // For years 6000 BC to 4901 BC, use dynamically loaded data
        if (year <= -4901 && year >= -6000) {
            if (loadingYears.has(year)) {
                return 'Loading year data...';
            }
            if (errorYears.has(year)) {
                return 'Error loading year data. Please try again later.';
            }
            return loadedYearData[year] || 'Loading...';
        }
        
        // For remaining years, use static data
        return REMAINING_YEARS_DATA[year] || 'No description available';
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const scrollToYear = (year: number) => {
        if (!scrollRef.current) return;
        const index = years.indexOf(year);
        const itemWidth = 120;
        const scrollPosition = index * itemWidth - scrollRef.current.clientWidth / 2 + itemWidth / 2;
        scrollRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        setSelectedYear(year);
    };

    const handlePrevious = () => {
        const currentIndex = years.indexOf(selectedYear);
        if (currentIndex > 0) {
            const newYear = years[Math.max(0, currentIndex - 10)];
            scrollToYear(newYear);
        }
    };

    const handleNext = () => {
        const currentIndex = years.indexOf(selectedYear);
        if (currentIndex < years.length - 1) {
            const newYear = years[Math.min(years.length - 1, currentIndex + 10)];
            scrollToYear(newYear);
        }
    };

    // Load data for selected year when it changes
    useEffect(() => {
        loadYearData(selectedYear);
    }, [selectedYear]);

    // Preload nearby years for smoother experience
    useEffect(() => {
        const currentIndex = years.indexOf(selectedYear);
        const preloadRange = 5;
        
        for (let i = Math.max(0, currentIndex - preloadRange); i <= Math.min(years.length - 1, currentIndex + preloadRange); i++) {
            loadYearData(years[i]);
        }
    }, [selectedYear]);

    useEffect(() => {
        // Scroll to present day on mount
        scrollToYear(2026);
    }, []);

    return (
        <section id="timeline" className="py-20 bg-gradient-to-b from-background to-muted/20">
            <div className="container">
                <div className="mx-auto max-w-5xl text-center mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-4">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Historical Journey</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Sailing Through Time
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Explore the complete chronological history of sailing from the earliest known boats around 6000 BC to the present day. 
                        Drag or scroll through millennia of maritime evolution.
                    </p>
                </div>

                <Card className="bg-card/50 backdrop-blur">
                    <CardContent className="p-6">
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handlePrevious}
                                disabled={selectedYear === startYear}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <div className="text-center flex-1">
                                <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                                    {formatYear(selectedYear)}
                                    {loadingYears.has(selectedYear) && (
                                        <Loader2 className="h-5 w-5 animate-spin text-primary" />
                                    )}
                                </div>
                                <div className="text-sm text-muted-foreground max-w-2xl mx-auto">
                                    {getYearDescription(selectedYear)}
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleNext}
                                disabled={selectedYear === endYear}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>

                        <div className="relative">
                            <div
                                ref={scrollRef}
                                className={`overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseLeave}
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                <div className="flex gap-2 pb-4" style={{ width: `${years.length * 120}px` }}>
                                    {years.map((year) => (
                                        <button
                                            key={year}
                                            onClick={() => setSelectedYear(year)}
                                            className={`shrink-0 w-28 h-32 rounded-lg border-2 transition-all ${
                                                selectedYear === year
                                                    ? 'border-primary bg-primary/10 shadow-lg scale-105'
                                                    : 'border-border bg-card hover:border-primary/50 hover:bg-accent'
                                            }`}
                                        >
                                            <div className="flex flex-col items-center justify-center h-full p-2">
                                                <div className={`text-lg font-bold mb-1 flex items-center gap-1 ${
                                                    selectedYear === year ? 'text-primary' : 'text-foreground'
                                                }`}>
                                                    {formatYear(year)}
                                                    {loadingYears.has(year) && (
                                                        <Loader2 className="h-3 w-3 animate-spin" />
                                                    )}
                                                </div>
                                                <div className="text-xs text-muted-foreground text-center line-clamp-3">
                                                    {getYearDescription(year).substring(0, 50)}...
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card to-transparent pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card to-transparent pointer-events-none" />
                        </div>

                        <div className="mt-6 text-center text-sm text-muted-foreground">
                            <p>Drag the timeline or use the arrow buttons to navigate through {years.length.toLocaleString()} years of sailing history</p>
                        </div>
                    </CardContent>
                </Card>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
                    <Card className="bg-card/50 backdrop-blur">
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-2 text-ocean">Ancient Era</h3>
                            <p className="text-sm text-muted-foreground">
                                From 6000 BC to 500 AD, the earliest sailing vessels emerged and evolved across ancient civilizations.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 backdrop-blur">
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-2 text-ocean">Age of Exploration</h3>
                            <p className="text-sm text-muted-foreground">
                                From 1400 to 1800 AD, sailing technology enabled global exploration and trade routes.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-card/50 backdrop-blur">
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-2 text-ocean">Modern Innovation</h3>
                            <p className="text-sm text-muted-foreground">
                                From 1900 to present, sailing has evolved with advanced materials and racing technology.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
