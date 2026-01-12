import { Sunrise, Droplets, Bird, Mountain } from 'lucide-react';

export default function AdventureAndNature() {
    return (
        <section id="adventure" className="py-16 md:py-24">
            <div className="container">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                        Sailing: Where Adventure Meets Nature
                    </h2>
                    <div className="mb-12 space-y-4 text-lg text-muted-foreground">
                        <p>
                            Sailing represents one of the most intimate ways to experience the natural world. Unlike
                            motorized vessels that dominate their environment, sailboats work in harmony with nature,
                            responding to every shift in wind and current. This creates a profound connection between
                            sailor and sea that transforms each voyage into a dialogue with the elements.
                        </p>
                        <p>
                            The adventure of sailing lies not just in reaching distant destinations, but in the journey
                            itself. Every passage is unique—shaped by weather patterns, sea conditions, and the countless
                            decisions made along the way. Sailors must read the sky for approaching weather, interpret wave
                            patterns, and adjust their course to work with nature rather than against it. This constant
                            engagement with the environment creates a heightened awareness and appreciation for the natural
                            world.
                        </p>
                    </div>

                    <div className="mb-12 grid gap-6 sm:grid-cols-2">
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-sunrise/10 to-background p-6">
                            <Sunrise className="mb-3 h-8 w-8 text-sunrise" />
                            <h3 className="mb-2 text-lg font-semibold">Spectacular Sunrises & Sunsets</h3>
                            <p className="text-sm text-muted-foreground">
                                Witness nature's most breathtaking displays from the unique vantage point of open water,
                                where horizons stretch endlessly and colors paint the sky in ways rarely seen from land.
                            </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-ocean/10 to-background p-6">
                            <Droplets className="mb-3 h-8 w-8 text-ocean" />
                            <h3 className="mb-2 text-lg font-semibold">Marine Life Encounters</h3>
                            <p className="text-sm text-muted-foreground">
                                Experience magical moments with dolphins playing in the bow wake, sea turtles surfacing
                                nearby, or whales breaching in the distance—encounters that remind us we're visitors in
                                their world.
                            </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-ocean/10 to-background p-6">
                            <Bird className="mb-3 h-8 w-8 text-ocean" />
                            <h3 className="mb-2 text-lg font-semibold">Seabird Companions</h3>
                            <p className="text-sm text-muted-foreground">
                                Share the journey with seabirds that follow in your wake, rest on your rigging, or guide
                                you toward land—ancient mariners that have accompanied sailors for millennia.
                            </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-sunrise/10 to-background p-6">
                            <Mountain className="mb-3 h-8 w-8 text-sunrise" />
                            <h3 className="mb-2 text-lg font-semibold">Coastal Wonders</h3>
                            <p className="text-sm text-muted-foreground">
                                Discover hidden coves, dramatic cliffs, and pristine beaches accessible only by water,
                                exploring coastlines from a perspective that reveals nature's artistry in full.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg border border-ocean/20 bg-gradient-to-br from-ocean/5 to-background p-8">
                        <h3 className="mb-4 text-2xl font-semibold">The Environmental Connection</h3>
                        <div className="space-y-3 text-muted-foreground">
                            <p>
                                Sailors develop a deep environmental consciousness through direct experience with the
                                ocean's health and fragility. They witness firsthand the beauty worth protecting—and
                                sometimes the impacts of pollution and climate change. This connection often transforms
                                sailors into passionate advocates for marine conservation.
                            </p>
                            <p>
                                The sustainable nature of wind-powered travel also appeals to those seeking to minimize
                                their environmental footprint. Sailing offers a way to explore the world while treading
                                lightly, using renewable energy and fostering respect for the delicate ecosystems that make
                                our oceans thrive.
                            </p>
                            <p>
                                Ultimately, sailing reminds us that we are part of nature, not separate from it. The
                                adventure lies in embracing this connection—in feeling the wind, reading the water, and
                                finding our place within the vast, beautiful, and ever-changing natural world that covers
                                most of our planet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
