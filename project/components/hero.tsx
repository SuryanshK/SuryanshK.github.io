'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [text, setText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const roles = ['Computer Science Student', 'Full Stack Developer', 'AI Enthusiast', 'Problem Solver'];

    // Typewriter effect
    useEffect(() => {
        const currentRole = roles[currentIndex];
        let i = 0;
        setText('');

        const typeInterval = setInterval(() => {
            if (i < currentRole.length) {
                setText(currentRole.slice(0, i + 1));
                i++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    const deleteInterval = setInterval(() => {
                        if (i > 0) {
                            setText(currentRole.slice(0, i - 1));
                            i--;
                        } else {
                            clearInterval(deleteInterval);
                            setCurrentIndex((prev) => (prev + 1) % roles.length);
                        }
                    }, 50);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(typeInterval);
    }, [currentIndex]);

    // Particle animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            color: string;
        }> = [];

        const colors = ['#06b6d4', '#8b5cf6', '#f97316', '#10b981'];

        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 3 + 1,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.fill();
            });

            // Draw connections
            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach((b) => {
                    const distance = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 - distance / 1000})`;
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
            />

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                        Suryansh Khranger
                    </h1>
                    <div className="text-2xl md:text-3xl font-light text-gray-300 mb-8 h-12">
                        <span className="border-r-2 border-cyan-400 pr-1 animate-pulse">
                            {text}
                        </span>
                    </div>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Passionate about creating innovative solutions through code.
                        Exploring the intersection of technology and creativity to build
                        the future, one algorithm at a time.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                        <Download className="mr-2 h-5 w-5" />
                        Download Resume
                    </Button>
                    <Button variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                        View Projects
                    </Button>
                </div>

                <div className="flex justify-center space-x-6">
                    <a href="#" className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:scale-110 transition-transform duration-300">
                        <Github className="h-6 w-6" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 text-white hover:scale-110 transition-transform duration-300">
                        <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="#" className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-cyan-500 text-white hover:scale-110 transition-transform duration-300">
                        <Mail className="h-6 w-6" />
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="h-8 w-8 text-cyan-400" />
            </div>
        </section>
    );
};

export default function Home() {
    return <HeroSection />;
}