'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-cyan-400">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                Name
                            </label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-background/50 border-border/50 focus:border-cyan-400 transition-colors"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                Email
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-background/50 border-border/50 focus:border-cyan-400 transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                            Subject
                        </label>
                        <Input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            className="bg-background/50 border-border/50 focus:border-cyan-400 transition-colors"
                            placeholder="What's this about?"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                            Message
                        </label>
                        <Textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-background/50 border-border/50 focus:border-cyan-400 transition-colors resize-none"
                            placeholder="Tell me about your project or just say hello!"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white transition-all duration-300 transform hover:scale-105"
                        size="lg"
                    >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

const ContactInfo = () => {
    const contactDetails = [
        {
            icon: Mail,
            label: 'Email',
            value: 'suryansh.khranger@email.com',
            href: 'mailto:suryansh.khranger@email.com',
            color: 'text-cyan-400'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+1 (825) 343-8253',
            href: 'tel:+18253438253',
            color: 'text-purple-400'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Edmonton, AB, Canada',
            href: 'https://maps.app.goo.gl/UbjyaHW6hPA8RBtV7',
            color: 'text-orange-400'
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com/SuryanshK',
            color: 'text-gray-400 hover:text-white'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/suryansh-khranger-1806b5249',
            color: 'text-blue-400 hover:text-blue-300'
        },
    ];

    return (
        <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-400">Get in touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                    I'm always open to discussing new opportunities, interesting projects,
                    or just having a conversation about technology. Feel free to reach out!
                </p>

                <div className="space-y-4">
                    {contactDetails.map((detail) => (
                        <a
                            key={detail.label}
                            href={detail.href}
                            className="flex items-center space-x-3 group hover:bg-accent/50 p-3 rounded-lg transition-all duration-200"
                        >
                            <div className={`p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 group-hover:scale-110 transition-transform`}>
                                <detail.icon className={`h-5 w-5 ${detail.color}`} />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">{detail.label}</p>
                                <p className="font-medium text-foreground group-hover:text-cyan-400 transition-colors">
                                    {detail.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default function Contact() {
    return (
        <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/20" id="contact">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Let's Connect
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Have a project in mind or just want to chat about technology? I'd love to hear from you!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    <div className="h-full" style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}>
                        <ContactForm />
                    </div>
                    <div className="h-full" style={{ animationDelay: '200ms', animation: 'fadeInUp 0.6s ease-out forwards' }}>
                        <ContactInfo />
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50 max-w-2xl mx-auto">
                        <CardContent className="p-8">
                            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Response Time
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                I typically respond to messages within 24 hours. For urgent matters,
                                feel free to call or connect with me on LinkedIn for faster communication.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}