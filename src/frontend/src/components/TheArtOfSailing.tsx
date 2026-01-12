import { Palette, Gauge, BookOpen, Waves } from 'lucide-react';

export default function TheArtOfSailing() {
    return (
        <section id="art-of-sailing" className="bg-muted/30 py-16 md:py-24">
            <div className="container">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">The Art of Sailing</h2>
                    <div className="mb-12 space-y-4 text-lg text-muted-foreground">
                        <p>
                            Beyond the technical mechanics of wind and water, sailing is an art form—a delicate balance
                            between intuition and knowledge, tradition and innovation, patience and decisive action. Like
                            any art, it requires years of practice to master, yet remains endlessly rewarding at every
                            level of skill. The artistry of sailing lies in the subtle decisions that transform a
                            functional journey into an elegant dance with the elements.
                        </p>
                        <p>
                            Master sailors develop an almost sixth sense for their vessel and the conditions around them.
                            They can feel minute changes in wind pressure through the tiller, read the water's surface for
                            approaching gusts, and anticipate shifts in weather from the subtlest cloud formations. This
                            heightened awareness comes not from instruments alone, but from countless hours spent observing,
                            learning, and refining their craft. Each voyage adds to their repertoire of experience, building
                            a deep understanding that transcends mere technical knowledge.
                        </p>
                    </div>

                    <div className="mb-12 grid gap-6 sm:grid-cols-2">
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-ocean/10 to-background p-6">
                            <Palette className="mb-3 h-8 w-8 text-ocean" />
                            <h3 className="mb-2 text-lg font-semibold">Sail Trim & Balance</h3>
                            <p className="text-sm text-muted-foreground">
                                The art of adjusting sails to achieve perfect harmony between speed and control, where every
                                line tension and angle contributes to the boat's performance and grace through the water.
                            </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-sunrise/10 to-background p-6">
                            <Gauge className="mb-3 h-8 w-8 text-sunrise" />
                            <h3 className="mb-2 text-lg font-semibold">Reading the Wind</h3>
                            <p className="text-sm text-muted-foreground">
                                Developing the ability to sense wind shifts before they arrive, interpreting ripples on the
                                water and feeling pressure changes that guide strategic decisions and optimal course
                                planning.
                            </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-sunrise/10 to-background p-6">
                            <BookOpen className="mb-3 h-8 w-8 text-sunrise" />
                            <h3 className="mb-2 text-lg font-semibold">Maritime Tradition</h3>
                            <p className="text-sm text-muted-foreground">
                                Honoring centuries of seafaring wisdom passed down through generations, from knot-tying
                                techniques to navigation principles that connect modern sailors with maritime heritage.
                            </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-ocean/10 to-background p-6">
                            <Waves className="mb-3 h-8 w-8 text-ocean" />
                            <h3 className="mb-2 text-lg font-semibold">Boat Handling Finesse</h3>
                            <p className="text-sm text-muted-foreground">
                                Mastering the subtle art of steering, docking, and maneuvering with precision and
                                confidence, making complex operations appear effortless through practiced skill and timing.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg border border-ocean/20 bg-gradient-to-br from-ocean/5 to-background p-8">
                        <h3 className="mb-4 text-2xl font-semibold">The Pursuit of Excellence</h3>
                        <div className="space-y-3 text-muted-foreground">
                            <p>
                                What distinguishes sailing as an art is the endless pursuit of improvement. Even the most
                                experienced sailors continue to learn, discovering new techniques, refining their instincts,
                                and finding more efficient ways to work with their vessel. Every sail configuration, every
                                course adjustment, every response to changing conditions becomes an opportunity to practice
                                and perfect their craft.
                            </p>
                            <p>
                                The aesthetic dimension of sailing cannot be overlooked. There is genuine beauty in a
                                well-trimmed sail catching the wind just right, in the smooth arc of a perfectly executed
                                tack, in the way a skilled sailor can coax maximum performance from their boat while making
                                it look effortless. This visual and kinesthetic elegance is what draws spectators to sailing
                                competitions and what keeps sailors returning to the water season after season.
                            </p>
                            <p>
                                Ultimately, the art of sailing is about achieving harmony—between sailor and boat, between
                                vessel and elements, between ambition and respect for the sea's power. It's a lifelong
                                journey of discovery where technical mastery and artistic expression merge into a single,
                                deeply satisfying pursuit. Whether racing competitively or cruising peacefully, sailors who
                                embrace this artistic dimension find that every voyage becomes not just a trip from one
                                place to another, but a meaningful expression of skill, passion, and connection with the
                                timeless art of harnessing the wind.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
