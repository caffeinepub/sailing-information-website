import { Heart, Users, Trophy, Sparkles } from 'lucide-react';

export default function WhyPeopleSail() {
    const reasons = [
        {
            icon: Heart,
            title: 'Freedom and Escape',
            description:
                'Sailing offers an unparalleled sense of freedom—the ability to leave the shore behind and venture into open waters, away from the noise and demands of daily life. The rhythmic motion of the boat, the sound of water against the hull, and the vast horizon create a meditative experience that allows sailors to disconnect from stress and reconnect with themselves.'
        },
        {
            icon: Sparkles,
            title: 'Challenge and Mastery',
            description:
                'The complexity of sailing provides endless opportunities for learning and growth. From understanding weather patterns and navigation to mastering sail trim and boat handling, sailing challenges both mind and body. Each voyage presents new situations that demand problem-solving, quick thinking, and adaptability, making every experience unique and rewarding.'
        },
        {
            icon: Users,
            title: 'Community and Camaraderie',
            description:
                'The sailing community is known for its welcoming spirit and shared passion. Whether racing alongside competitors who become friends, cruising with family, or joining a yacht club, sailing creates bonds through shared experiences. The tradition of sailors helping one another, exchanging stories, and celebrating the sea together forms a global community united by their love of the water.'
        },
        {
            icon: Trophy,
            title: 'Adventure and Exploration',
            description:
                'Sailing opens doors to places that remain inaccessible by land, from secluded coves and pristine beaches to remote islands and distant shores. The journey itself becomes the destination, with each passage offering the thrill of discovery. Whether exploring local waters or embarking on ocean crossings, sailors experience the world from a unique perspective that few others know.'
        }
    ];

    return (
        <section id="why-sail" className="bg-muted/30 py-16 md:py-24">
            <div className="container">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Why People Love Sailing</h2>
                    <p className="mb-12 text-lg text-muted-foreground">
                        Sailing captivates millions around the world for reasons as diverse as the sailors themselves. Yet
                        certain themes emerge that explain the enduring appeal of this ancient practice.
                    </p>

                    <div className="space-y-8">
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={index}
                                    className="group rounded-lg border border-border/50 bg-background p-6 transition-all hover:border-ocean/50 hover:shadow-md"
                                >
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ocean/10 text-ocean transition-colors group-hover:bg-ocean/20">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
                                            <p className="text-muted-foreground">{reason.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
