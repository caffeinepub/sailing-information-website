import { Compass, Wind, Ship } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function WhatIsSailing() {
    return (
        <section id="what-is-sailing" className="py-16 md:py-24">
            <div className="container">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">What is Sailing?</h2>
                    <div className="mb-12 space-y-4 text-lg text-muted-foreground">
                        <p>
                            Sailing is the art and science of propelling a vessel across water using the natural power of
                            the wind. At its core, sailing involves manipulating sails—large pieces of fabric attached to
                            masts—to capture wind energy and convert it into forward motion. This ancient practice has
                            evolved from a primary means of transportation and trade into both a competitive sport and a
                            beloved recreational activity.
                        </p>
                        <p>
                            The fundamental principle behind sailing is surprisingly elegant: by adjusting the angle and
                            shape of the sails relative to the wind direction, sailors can harness aerodynamic forces to
                            move in almost any direction—even upwind through a technique called tacking. The boat's keel or
                            centerboard provides resistance against sideways drift, allowing the vessel to move forward
                            rather than simply being pushed sideways by the wind.
                        </p>
                        <p>
                            Modern sailing encompasses everything from small dinghies sailed solo on calm lakes to massive
                            ocean-going yachts that can circumnavigate the globe. Whether racing competitively, cruising
                            leisurely along coastlines, or embarking on long-distance voyages, sailors share a common bond:
                            the intimate connection between human skill, natural forces, and the timeless call of the sea.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <Card className="border-ocean/20 bg-gradient-to-br from-background to-ocean/5">
                            <CardContent className="pt-6">
                                <Wind className="mb-4 h-10 w-10 text-ocean" />
                                <h3 className="mb-2 text-xl font-semibold">Wind Power</h3>
                                <p className="text-sm text-muted-foreground">
                                    Harnessing natural wind energy through carefully positioned sails to propel vessels
                                    across water.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-ocean/20 bg-gradient-to-br from-background to-ocean/5">
                            <CardContent className="pt-6">
                                <Compass className="mb-4 h-10 w-10 text-ocean" />
                                <h3 className="mb-2 text-xl font-semibold">Navigation</h3>
                                <p className="text-sm text-muted-foreground">
                                    Using skill and knowledge to chart courses, read conditions, and guide vessels safely
                                    to their destinations.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-ocean/20 bg-gradient-to-br from-background to-ocean/5">
                            <CardContent className="pt-6">
                                <Ship className="mb-4 h-10 w-10 text-ocean" />
                                <h3 className="mb-2 text-xl font-semibold">Seamanship</h3>
                                <p className="text-sm text-muted-foreground">
                                    Mastering boat handling, safety procedures, and the art of working in harmony with the
                                    elements.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
