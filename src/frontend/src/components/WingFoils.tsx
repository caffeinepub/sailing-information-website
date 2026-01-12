import { Zap, Wind, Lightbulb, TrendingUp } from 'lucide-react';

export default function WingFoils() {
    return (
        <section id="wing-foils" className="py-16 md:py-24">
            <div className="container">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Wing Foils</h2>
                    <div className="mb-12 space-y-4 text-lg text-muted-foreground">
                        <p>
                            Wing foiling represents the cutting edge of wind-powered water sports, combining elements of
                            sailing, surfing, and kiteboarding into an exhilarating new discipline. Using a handheld
                            inflatable wing to harness the wind and a hydrofoil board that lifts above the water's surface,
                            wing foiling offers a unique sensation of flight over water. This innovative sport has rapidly
                            gained popularity among sailors and water sports enthusiasts seeking new challenges and
                            experiences on the water.
                        </p>
                        <p>
                            What makes wing foiling particularly compelling is its blend of accessibility and advanced
                            technology. The sport draws directly from sailing principles—understanding wind direction,
                            harnessing wind power, and reading water conditions—while incorporating modern hydrofoil
                            technology that reduces drag and enables remarkable speeds. As the board rises on its foil,
                            riders experience an almost surreal gliding sensation, freed from the friction and chop of the
                            water's surface. This fusion of traditional wind wisdom and contemporary innovation creates a
                            thrilling new way to connect with the elements.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-ocean/10 to-background p-6">
                            <Zap className="mb-3 h-8 w-8 text-ocean" />
                            <h3 className="mb-2 text-lg font-semibold">Speed and Agility</h3>
                            <p className="text-sm text-muted-foreground">
                                Wing foiling delivers exceptional speed and maneuverability as the hydrofoil lifts the board
                                above the water, dramatically reducing drag and allowing riders to reach thrilling velocities
                                while carving smooth, dynamic turns with minimal resistance.
                            </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-sunrise/10 to-background p-6">
                            <Wind className="mb-3 h-8 w-8 text-sunrise" />
                            <h3 className="mb-2 text-lg font-semibold">Freedom Over Water</h3>
                            <p className="text-sm text-muted-foreground">
                                Experience the sensation of flying above the water's surface, gliding effortlessly over waves
                                and chop. The hydrofoil creates a smooth, stable ride that feels like floating, offering a
                                unique perspective and connection with the wind and water.
                            </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-sunrise/10 to-background p-6">
                            <Lightbulb className="mb-3 h-8 w-8 text-sunrise" />
                            <h3 className="mb-2 text-lg font-semibold">Modern Wind Technology</h3>
                            <p className="text-sm text-muted-foreground">
                                Wing foiling represents the latest evolution in wind-powered sports, combining inflatable wing
                                technology with advanced hydrofoil design. This innovative equipment is portable, efficient,
                                and opens new possibilities for harnessing wind energy on the water.
                            </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-ocean/10 to-background p-6">
                            <TrendingUp className="mb-3 h-8 w-8 text-ocean" />
                            <h3 className="mb-2 text-lg font-semibold">Learning Curve</h3>
                            <p className="text-sm text-muted-foreground">
                                While wing foiling requires dedication to master, it offers a progressive learning path that
                                rewards persistence. Sailors with wind-reading experience often find the transition intuitive,
                                and each session brings noticeable improvement and new achievements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
