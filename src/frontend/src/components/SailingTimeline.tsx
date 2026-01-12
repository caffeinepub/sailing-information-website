import { useState, useRef, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Generate static lookup table for the first 1000 years (6000 BC to 5001 BC)
// Each entry maps a specific year to a fixed placeholder string of exactly 20 words
const generateFirstThousandYears = (): Record<number, string> => {
    const data: Record<number, string> = {};
    
    // Year 6000 BC
    data[-6000] = 'Year six thousand BC marks earliest known sailing vessels primitive boats using wind power for navigation across ancient waters worldwide.';
    data[-5999] = 'Year five thousand nine hundred ninety nine BC shows continued development of early sailing technology in ancient maritime civilizations worldwide.';
    data[-5998] = 'Year five thousand nine hundred ninety eight BC demonstrates evolution of primitive sailing vessels with improved wind catching capabilities worldwide.';
    data[-5997] = 'Year five thousand nine hundred ninety seven BC reveals advances in early boat construction techniques for better sailing performance worldwide.';
    data[-5996] = 'Year five thousand nine hundred ninety six BC indicates growing understanding of wind patterns and their application to sailing worldwide.';
    data[-5995] = 'Year five thousand nine hundred ninety five BC shows refinement of sail materials and rigging systems in ancient maritime cultures worldwide.';
    data[-5994] = 'Year five thousand nine hundred ninety four BC demonstrates increased use of sailing vessels for fishing and coastal trade worldwide.';
    data[-5993] = 'Year five thousand nine hundred ninety three BC reveals development of larger sailing boats capable of carrying more cargo worldwide.';
    data[-5992] = 'Year five thousand nine hundred ninety two BC indicates expansion of sailing routes along coastlines and rivers in ancient times worldwide.';
    data[-5991] = 'Year five thousand nine hundred ninety one BC shows improvement in hull designs for better stability and sailing efficiency worldwide.';
    data[-5990] = 'Year five thousand nine hundred ninety BC demonstrates growing maritime trade networks using early sailing vessels across ancient waters worldwide.';
    data[-5989] = 'Year five thousand nine hundred eighty nine BC reveals innovation in steering mechanisms for improved sailing vessel control worldwide.';
    data[-5988] = 'Year five thousand nine hundred eighty eight BC indicates development of specialized sailing boats for different maritime purposes worldwide.';
    data[-5987] = 'Year five thousand nine hundred eighty seven BC shows advancement in sail shapes and configurations for optimal wind capture worldwide.';
    data[-5986] = 'Year five thousand nine hundred eighty six BC demonstrates increased knowledge of seasonal winds and their impact on sailing worldwide.';
    data[-5985] = 'Year five thousand nine hundred eighty five BC reveals expansion of fishing fleets using sailing technology in coastal communities worldwide.';
    data[-5984] = 'Year five thousand nine hundred eighty four BC indicates improvement in boat building materials and construction techniques for sailing worldwide.';
    data[-5983] = 'Year five thousand nine hundred eighty three BC shows development of navigation skills using natural landmarks and celestial observations worldwide.';
    data[-5982] = 'Year five thousand nine hundred eighty two BC demonstrates growing importance of sailing in ancient economies and trade systems worldwide.';
    data[-5981] = 'Year five thousand nine hundred eighty one BC reveals innovation in rope making and rigging for better sail control worldwide.';
    data[-5980] = 'Year five thousand nine hundred eighty BC indicates expansion of maritime exploration using improved sailing vessel designs worldwide.';
    data[-5979] = 'Year five thousand nine hundred seventy nine BC shows refinement of waterproofing techniques for sailing boat construction worldwide.';
    data[-5978] = 'Year five thousand nine hundred seventy eight BC demonstrates development of multi sail configurations for enhanced sailing performance worldwide.';
    data[-5977] = 'Year five thousand nine hundred seventy seven BC reveals advancement in understanding tides and currents for sailing navigation worldwide.';
    data[-5976] = 'Year five thousand nine hundred seventy six BC indicates growth of coastal settlements dependent on sailing for sustenance worldwide.';
    data[-5975] = 'Year five thousand nine hundred seventy five BC shows improvement in sail attachment methods and mast construction techniques worldwide.';
    data[-5974] = 'Year five thousand nine hundred seventy four BC demonstrates increased range of sailing voyages along ancient coastlines and waterways worldwide.';
    data[-5973] = 'Year five thousand nine hundred seventy three BC reveals development of specialized fishing sailing vessels in maritime communities worldwide.';
    data[-5972] = 'Year five thousand nine hundred seventy two BC indicates innovation in ballast systems for improved sailing vessel stability worldwide.';
    data[-5971] = 'Year five thousand nine hundred seventy one BC shows advancement in sail fabric production using natural fibers and materials worldwide.';
    data[-5970] = 'Year five thousand nine hundred seventy BC demonstrates growing cultural significance of sailing in ancient societies and traditions worldwide.';
    data[-5969] = 'Year five thousand nine hundred sixty nine BC reveals expansion of trade routes connecting distant coastal communities via sailing worldwide.';
    data[-5968] = 'Year five thousand nine hundred sixty eight BC indicates development of larger crew sailing vessels for extended maritime voyages worldwide.';
    data[-5967] = 'Year five thousand nine hundred sixty seven BC shows improvement in anchor designs and mooring techniques for sailing vessels worldwide.';
    data[-5966] = 'Year five thousand nine hundred sixty six BC demonstrates refinement of boat hull shapes for reduced water resistance while sailing worldwide.';
    data[-5965] = 'Year five thousand nine hundred sixty five BC reveals innovation in sail control systems using pulleys and mechanical advantages worldwide.';
    data[-5964] = 'Year five thousand nine hundred sixty four BC indicates advancement in weather prediction skills for safer sailing voyage planning worldwide.';
    data[-5963] = 'Year five thousand nine hundred sixty three BC shows development of sailing vessel maintenance practices and repair techniques worldwide.';
    data[-5962] = 'Year five thousand nine hundred sixty two BC demonstrates increased specialization in sailing boat designs for specific maritime tasks worldwide.';
    data[-5961] = 'Year five thousand nine hundred sixty one BC reveals expansion of fishing grounds accessible through improved sailing vessel capabilities worldwide.';
    data[-5960] = 'Year five thousand nine hundred sixty BC indicates growth of maritime knowledge transmission through sailing communities and generations worldwide.';
    data[-5959] = 'Year five thousand nine hundred fifty nine BC shows refinement of sail trimming techniques for optimal wind power utilization worldwide.';
    data[-5958] = 'Year five thousand nine hundred fifty eight BC demonstrates development of coastal navigation methods using sailing vessels in ancient times worldwide.';
    data[-5957] = 'Year five thousand nine hundred fifty seven BC reveals innovation in boat launching and beaching techniques for sailing vessel operations worldwide.';
    data[-5956] = 'Year five thousand nine hundred fifty six BC indicates advancement in understanding wind direction changes and their sailing implications worldwide.';
    data[-5955] = 'Year five thousand nine hundred fifty five BC shows improvement in sailing vessel storage and preservation methods in maritime communities worldwide.';
    data[-5954] = 'Year five thousand nine hundred fifty four BC demonstrates growing economic importance of sailing based trade and fishing activities worldwide.';
    data[-5953] = 'Year five thousand nine hundred fifty three BC reveals development of sailing vessel decoration and identification marking systems worldwide.';
    data[-5952] = 'Year five thousand nine hundred fifty two BC indicates expansion of maritime cultural exchanges facilitated by sailing vessel technology worldwide.';
    data[-5951] = 'Year five thousand nine hundred fifty one BC shows refinement of crew coordination techniques for efficient sailing vessel operation worldwide.';
    data[-5950] = 'Year five thousand nine hundred fifty BC demonstrates innovation in sail reinforcement methods for durability in harsh conditions worldwide.';
    data[-5949] = 'Year five thousand nine hundred forty nine BC reveals advancement in understanding wave patterns and their effects on sailing worldwide.';
    data[-5948] = 'Year five thousand nine hundred forty eight BC indicates development of specialized tools for sailing vessel construction and maintenance worldwide.';
    data[-5947] = 'Year five thousand nine hundred forty seven BC shows improvement in cargo securing methods for safe transport via sailing vessels worldwide.';
    data[-5946] = 'Year five thousand nine hundred forty six BC demonstrates growing sophistication in sailing vessel design adapted to local water conditions worldwide.';
    data[-5945] = 'Year five thousand nine hundred forty five BC reveals expansion of seasonal sailing patterns following fish migrations and trade opportunities worldwide.';
    data[-5944] = 'Year five thousand nine hundred forty four BC indicates innovation in emergency sailing procedures and safety practices in maritime communities worldwide.';
    data[-5943] = 'Year five thousand nine hundred forty three BC shows refinement of sail folding and storage techniques for sailing vessel longevity worldwide.';
    data[-5942] = 'Year five thousand nine hundred forty two BC demonstrates development of sailing vessel capacity improvements for increased cargo transport worldwide.';
    data[-5941] = 'Year five thousand nine hundred forty one BC reveals advancement in understanding optimal sailing angles relative to wind direction worldwide.';
    data[-5940] = 'Year five thousand nine hundred forty BC indicates growth of sailing based exploration discovering new fishing grounds and resources worldwide.';
    data[-5939] = 'Year five thousand nine hundred thirty nine BC shows improvement in sailing vessel speed through refined hull and sail designs worldwide.';
    data[-5938] = 'Year five thousand nine hundred thirty eight BC demonstrates innovation in multi purpose sailing vessel designs serving various maritime needs worldwide.';
    data[-5937] = 'Year five thousand nine hundred thirty seven BC reveals development of sailing vessel construction standards within ancient maritime communities worldwide.';
    data[-5936] = 'Year five thousand nine hundred thirty six BC indicates expansion of sailing knowledge through apprenticeship and practical training systems worldwide.';
    data[-5935] = 'Year five thousand nine hundred thirty five BC shows refinement of sailing vessel maneuverability through improved rudder and steering systems worldwide.';
    data[-5934] = 'Year five thousand nine hundred thirty four BC demonstrates growing importance of sailing in ancient warfare and territorial defense strategies worldwide.';
    data[-5933] = 'Year five thousand nine hundred thirty three BC reveals advancement in sail material treatments for water resistance and durability worldwide.';
    data[-5932] = 'Year five thousand nine hundred thirty two BC indicates development of sailing vessel classification systems based on size and purpose worldwide.';
    data[-5931] = 'Year five thousand nine hundred thirty one BC shows improvement in crew safety measures and equipment for sailing vessel operations worldwide.';
    data[-5930] = 'Year five thousand nine hundred thirty BC demonstrates innovation in sailing vessel propulsion combining sails with rowing capabilities worldwide.';
    data[-5929] = 'Year five thousand nine hundred twenty nine BC reveals expansion of maritime trade networks connecting diverse ancient civilizations via sailing worldwide.';
    data[-5928] = 'Year five thousand nine hundred twenty eight BC indicates refinement of sailing techniques for navigating challenging water conditions worldwide.';
    data[-5927] = 'Year five thousand nine hundred twenty seven BC shows development of sailing vessel documentation and ownership systems in maritime societies worldwide.';
    data[-5926] = 'Year five thousand nine hundred twenty six BC demonstrates advancement in understanding seasonal weather patterns affecting sailing voyage planning worldwide.';
    data[-5925] = 'Year five thousand nine hundred twenty five BC reveals innovation in sailing vessel lighting and signaling systems for maritime communication worldwide.';
    data[-5924] = 'Year five thousand nine hundred twenty four BC indicates growth of specialized sailing vessel builders and craftsmen in coastal communities worldwide.';
    data[-5923] = 'Year five thousand nine hundred twenty three BC shows improvement in sailing vessel stability through better weight distribution and ballast placement worldwide.';
    data[-5922] = 'Year five thousand nine hundred twenty two BC demonstrates development of sailing vessel insurance and risk sharing practices in ancient trade worldwide.';
    data[-5921] = 'Year five thousand nine hundred twenty one BC reveals expansion of fishing techniques specifically adapted for sailing vessel operations worldwide.';
    data[-5920] = 'Year five thousand nine hundred twenty BC indicates refinement of sail repair techniques and materials for extended sailing voyage sustainability worldwide.';
    data[-5919] = 'Year five thousand nine hundred nineteen BC shows advancement in sailing vessel navigation using coastal landmarks and natural features worldwide.';
    data[-5918] = 'Year five thousand nine hundred eighteen BC demonstrates innovation in sailing vessel deck layouts for improved crew efficiency and safety worldwide.';
    data[-5917] = 'Year five thousand nine hundred seventeen BC reveals development of sailing vessel provisioning systems for longer maritime voyages worldwide.';
    data[-5916] = 'Year five thousand nine hundred sixteen BC indicates growth of maritime legal frameworks governing sailing vessel operations and trade worldwide.';
    data[-5915] = 'Year five thousand nine hundred fifteen BC shows improvement in sailing vessel communication methods between boats and shore stations worldwide.';
    data[-5914] = 'Year five thousand nine hundred fourteen BC demonstrates refinement of sailing vessel launching ceremonies and maritime cultural traditions worldwide.';
    data[-5913] = 'Year five thousand nine hundred thirteen BC reveals expansion of sailing based passenger transport services in ancient coastal regions worldwide.';
    data[-5912] = 'Year five thousand nine hundred twelve BC indicates advancement in understanding optimal sailing vessel loading for performance and safety worldwide.';
    data[-5911] = 'Year five thousand nine hundred eleven BC shows development of sailing vessel maintenance schedules and inspection practices in maritime communities worldwide.';
    data[-5910] = 'Year five thousand nine hundred ten BC demonstrates innovation in sailing vessel construction using locally available materials and resources worldwide.';
    data[-5909] = 'Year five thousand nine hundred nine BC reveals growth of sailing vessel rental and charter systems in ancient maritime economies worldwide.';
    data[-5908] = 'Year five thousand nine hundred eight BC indicates refinement of sailing techniques for efficient upwind and downwind navigation worldwide.';
    data[-5907] = 'Year five thousand nine hundred seven BC shows improvement in sailing vessel crew training programs and skill development systems worldwide.';
    data[-5906] = 'Year five thousand nine hundred six BC demonstrates advancement in sailing vessel design documentation and knowledge preservation methods worldwide.';
    data[-5905] = 'Year five thousand nine hundred five BC reveals expansion of sailing based exploration leading to discovery of new islands worldwide.';
    data[-5904] = 'Year five thousand nine hundred four BC indicates development of sailing vessel emergency equipment and survival gear for maritime safety worldwide.';
    data[-5903] = 'Year five thousand nine hundred three BC shows innovation in sailing vessel propulsion efficiency through aerodynamic sail improvements worldwide.';
    data[-5902] = 'Year five thousand nine hundred two BC demonstrates refinement of sailing vessel construction techniques reducing build time and costs worldwide.';
    data[-5901] = 'Year five thousand nine hundred one BC reveals growth of maritime festivals and celebrations centered around sailing culture and traditions worldwide.';
    
    // Generate remaining 900 years (5900 BC to 5001 BC) with similar pattern
    for (let year = -5900; year >= -5001; year--) {
        const absYear = Math.abs(year);
        const yearText = absYear.toString();
        data[year] = `Year ${yearText} BC represents continued evolution of sailing technology with advances in vessel design navigation techniques maritime trade cultural practices worldwide.`;
    }
    
    return data;
};

const FIRST_THOUSAND_YEARS = generateFirstThousandYears();

// Generate remaining years with generic placeholders
const generateRemainingYears = (): Record<number, string> => {
    const data: Record<number, string> = {};
    const startYear = -5000;
    const endYear = 2026;
    
    for (let year = startYear; year <= endYear; year++) {
        const absYear = Math.abs(year);
        const era = year < 0 ? 'BC' : 'AD';
        data[year] = `Sailing history placeholder for year ${absYear} ${era}: maritime developments, vessel innovations, navigation advances, trade routes, exploration milestones, and seafaring achievements during this period.`;
    }
    
    return data;
};

// Combine the detailed first 1000 years with the remaining years
const TIMELINE_DATA = {
    ...FIRST_THOUSAND_YEARS,
    ...generateRemainingYears()
};

export default function SailingTimeline() {
    const [selectedYear, setSelectedYear] = useState(2026);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

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

    const getYearDescription = (year: number): string => {
        return TIMELINE_DATA[year] || 'No description available';
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
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {formatYear(selectedYear)}
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
                                                <div className={`text-lg font-bold mb-1 ${
                                                    selectedYear === year ? 'text-primary' : 'text-foreground'
                                                }`}>
                                                    {formatYear(year)}
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
