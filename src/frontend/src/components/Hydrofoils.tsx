import { ArrowUp, Gauge, Cpu, Leaf } from 'lucide-react';

export default function Hydrofoils() {
    return (
        <section id="hydrofoils" className="py-16 md:py-24">
            <div className="container">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Hydrofoils</h2>
                    <div className="mb-12 space-y-4 text-lg text-muted-foreground">
                        <p>
                            Hydrofoils represent one of the most significant innovations in modern sailing technology. These
                            underwater wings attach beneath a sailboat's hull, generating lift as the boat moves through the
                            water. When sufficient speed is reached, the hydrofoil lifts the entire hull above the water's
                            surface, dramatically reducing drag and enabling unprecedented speeds and efficiency. This
                            technology has transformed competitive sailing and is increasingly finding applications in
                            recreational and commercial vessels.
                        </p>
                        <p>
                            The principle behind hydrofoils is elegantly simple yet remarkably effective: just as an airplane
                            wing generates lift in air, a hydrofoil generates lift in water. As the boat accelerates, water
                            flows over the foil's curved surface, creating a pressure difference that lifts the hull clear of
                            the water. This "flying" state eliminates wave-making resistance and reduces friction to just the
                            small surface area of the foil itself. The result is a vessel that glides smoothly above the
                            water, achieving higher speeds with less energy while offering a remarkably stable and efficient
                            ride that's revolutionizing our understanding of what's possible under sail.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-ocean/10 to-background p-6">
                            <ArrowUp className="mb-3 h-8 w-8 text-ocean" />
                            <h3 className="mb-2 text-lg font-semibold">Lift and Efficiency</h3>
                            <p className="text-sm text-muted-foreground">
                                Hydrofoils generate powerful lift that raises the hull completely out of the water, eliminating
                                wave-making resistance and hull friction. This dramatic reduction in drag allows sailboats to
                                achieve remarkable efficiency, sailing faster while using less energy and creating minimal wake.
                            </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-sunrise/10 to-background p-6">
                            <Gauge className="mb-3 h-8 w-8 text-sunrise" />
                            <h3 className="mb-2 text-lg font-semibold">Speed Advantages</h3>
                            <p className="text-sm text-muted-foreground">
                                By lifting above the water's surface, hydrofoil-equipped sailboats can reach speeds that were
                                previously impossible for displacement hulls. Modern foiling sailboats routinely exceed twice
                                the wind speed, with some racing vessels achieving speeds over 50 knots under sail.
                            </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-sunrise/10 to-background p-6">
                            <Cpu className="mb-3 h-8 w-8 text-sunrise" />
                            <h3 className="mb-2 text-lg font-semibold">Technological Design</h3>
                            <p className="text-sm text-muted-foreground">
                                Modern hydrofoils incorporate advanced materials like carbon fiber and sophisticated
                                engineering to optimize lift, minimize drag, and ensure structural integrity under extreme
                                loads. Computer-aided design and testing have refined foil shapes to maximize performance
                                across varying conditions.
                            </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-gradient-to-br from-ocean/10 to-background p-6">
                            <Leaf className="mb-3 h-8 w-8 text-ocean" />
                            <h3 className="mb-2 text-lg font-semibold">Environmental Benefits</h3>
                            <p className="text-sm text-muted-foreground">
                                The exceptional efficiency of hydrofoils translates to reduced fuel consumption for hybrid
                                vessels and enables purely wind-powered boats to maintain higher average speeds. This
                                technology offers a pathway toward faster, more sustainable marine transportation with minimal
                                environmental impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
