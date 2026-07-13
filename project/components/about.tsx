'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Brain, Zap, Users } from 'lucide-react';

const skills = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'React', 'Next.js', 'Node.js',
    'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Git', 'Linux', 'Machine Learning',
    'Data Structures', 'Algorithms', 'System Design', 'Agile Development'
];

const interests = [
    { icon: Code, title: 'Software Development', description: 'Building scalable and efficient applications' },
    { icon: Brain, title: 'Artificial Intelligence', description: 'Exploring ML and deep learning technologies' },
    { icon: Zap, title: 'Performance Optimization', description: 'Making systems faster and more efficient' },
    { icon: Users, title: 'Open Source', description: 'Contributing to the developer community' },
];

export default function About() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/20" id="about">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        About Me
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        A passionate computer science student with a drive for innovation and problem-solving
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-cyan-400">My Journey</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Currently pursuing a Bachelor's degree in Computer Science, I'm passionate about
                                    leveraging technology to solve real-world problems. My journey began with a
                                    simple "Hello World" program and has evolved into a deep fascination with
                                    algorithms, system architecture, and user experience design.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    When I'm not coding, you'll find me exploring the latest tech trends,
                                    contributing to open-source projects, or mentoring fellow students in
                                    programming fundamentals.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4 text-purple-400">Philosophy</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    I believe in writing clean, maintainable code and following best practices.
                                    My approach combines technical excellence with creative problem-solving,
                                    always keeping the end user in mind. I'm committed to continuous learning
                                    and staying updated with emerging technologies.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-6 text-orange-400">Technical Skills</h2>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20 text-cyan-300 hover:scale-105 transition-transform"
                                            style={{ animationDelay: `${index * 50}ms` }}
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-6 text-green-400">Current Interests</h2>
                                <div className="space-y-4">
                                    {interests.map((interest, index) => (
                                        <div key={interest.title} className="flex items-start space-x-4 group">
                                            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 group-hover:scale-110 transition-transform">
                                                <interest.icon className="h-5 w-5 text-cyan-400" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                                                    {interest.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {interest.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}