'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star } from 'lucide-react';

const projects = [
    {
        title: 'Nutrilens AI',
        description: 'A mobile application built using react native, featuring user AI-powered image processing and analysis of nutritional labels.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500',
        technologies: ['Python', 'React Native', 'Stripe', 'PostgreSQL'],
        // TODO: put this in
        github: '#',
        demo: '#',
        featured: true,
    },
    {
        title: 'Realtor AI',
        description: 'Real-time Property Listing AI-powered analysis using OpenAI API integration, featuring secure payment through Stripe.',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
        technologies: ['NextJS', 'Node.js', 'Socket.io', 'OpenAI API', 'Postgress'],
        github: '#',
        // TODO: put this in
        demo: '#https://real-estate-ai-one.vercel.app',
        featured: true,
    },
    {
        title: 'Task Management System',
        description: 'Collaborative project management tool with real-time updates, kanban boards, and team collaboration features.',
        image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=500',
        technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
        // TODO: put this in
        github: '#',
        demo: '#',
        featured: false,
    },
    {
        title: 'Docu Friend',
        description: 'Desktop Application with SSL for file sharing, prioritizing privacy, security, and offline functionality',
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500',
        technologies: ['React', 'NodeJS', 'Electron.js', 'electron-store'],
        github: '#https://github.com/SuryanshK/Client_Document_Manager/tree/main',
        // TODO: put this in
        demo: '#',
        featured: false,
    },
    {
        title: 'Immigration Assistant',
        description: 'Created a mobile application using react-native for an immigration firm with features including score calculations, document checklistts, and dynamic newsfeeds.',
        // TODO: put this in
        image: 'https://images.pexels.com/photos/4164856/pexels-photo-4164856.jpeg?auto=compress&cs=tinysrgb&w=500',
        technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
        github: '#',
        demo: '#',
        featured: false,
    },
    {
        title: 'Blockchain Voting System',
        description: 'Secure and transparent voting system using blockchain technology with smart contracts and voter verification.',
        image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=500',
        technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
        github: '#',
        demo: '#',
        featured: true,
    },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => (
    <Card className={`group bg-card/50 min-h-[500px] backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${project.featured ? 'ring-2 ring-cyan-500/20' : ''}`}>
        {project.featured && (
            <div className="absolute -top-2 -right-2 z-10">
                <div className="flex items-center space-x-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Featured</span>
                </div>
            </div>
        )}

        <div className="relative overflow-hidden rounded-t-lg">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                {project.title}
            </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                    <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20 text-cyan-300"
                    >
                        {tech}
                    </Badge>
                ))}
            </div>

            <div className="flex space-x-3 pt-2">
                <Button
                    variant="outline"
                    size="sm"
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                </Button>
                <Button
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white transition-all duration-300"
                >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                </Button>
            </div>
        </CardContent>
    </Card>
);

export default function Projects() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/20" id="projects">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        My Projects
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        A showcase of my technical skills and creative problem-solving through various projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="relative"
                            style={{
                                animationDelay: `${index * 150}ms`,
                                animation: 'fadeInUp 0.6s ease-out forwards'
                            }}
                        >
                            <ProjectCard project={project} index={index} />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        <Github className="mr-2 h-5 w-5" />
                        View All on GitHub
                    </Button>
                </div>
            </div>
        </div>
    );
}