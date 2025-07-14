'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const education = [
    {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Alberta',
        location: 'Edmonton, Alberta, Canada',
        period: '2022 - Present',
        gpa: '3.8/4.0',
        status: 'In Progress',
        coursework: [
            'Data Structures & Algorithms',
            'Software Engineering',
            'Database Systems',
            'Computer Networks',
            'Machine Learning',
            'Web Development',
            'Operating Systems',
            'Computer Graphics'
        ],
        achievements: [
            'Dean\'s List',
            'Outstanding Student in Computer Science',
            'Scholarship Recipient'
        ]
    },
    {
        degree: 'High School Diploma',
        institution: 'Lillian Osborne High School',
        location: 'Edmonton, Alberta, Canada',
        period: '2018 - 2022',
        gpa: '3.9/4.0',
        status: 'Completed',
        coursework: [
            'IB Computer Science HL',
            'IB Mathematics Analysis and Approaches SL',
            'IB Physics SL',
            'IB English Language & Literature HL',
            'IB Global Politics HL',
            'IB French SL'
        ],
        achievements: [
            'Honors with Distinction',
            'International Baccalaureate Award Recipient',
            'Science Fair Winner (1st Place)',
            'Programming Competition Finalist'
        ]
    }
];

const certifications = [
    {
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        date: 'March 2023',
        status: 'Active',
        image: '/assets/AWS-logo.png',
        description: 'Demonstrates cloud fluency and foundational AWS knowledge.',
    },
    {
        name: 'Google IT Support Professional Certificate',
        issuer: 'Google',
        date: 'January 2023',
        status: 'Active',
        image: '/assets/Google.jpg',
        description: 'Demonstrated competency in Google Information Technology',
    },
    {
        name: 'Leaders in Training',
        issuer: 'City of Edmonton',
        date: 'July 2022',
        status: 'Active',
        image: '/assets/LeadersInTrainingLogo.jpeg',
        description: 'Government Youth Leadership Initiative Program',
    },
];

const EducationCard = ({ edu, index }: { edu: typeof education[0], index: number }) => (
    <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        <CardHeader>
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors mb-2">
                        {edu.degree}
                    </CardTitle>
                    <div className="space-y-2">
                        <div className="flex items-center text-muted-foreground">
                            <BookOpen className="h-4 w-4 mr-2 text-cyan-400" />
                            <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                            <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2 text-orange-400" />
                            <span>{edu.period}</span>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <Badge
                        className={`mb-2 ${edu.status === 'In Progress' ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-cyan-500/40 text-cyan-300' : 'bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/40 text-green-300'}`}
                    >
                        {edu.status}
                    </Badge>
                    <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        GPA: {edu.gpa}
                    </div>
                </div>
            </div>
        </CardHeader>

        <CardContent className="space-y-6">
            <div>
                <h3 className="font-semibold text-cyan-400 mb-3 flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Relevant Coursework
                </h3>
                <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                        <Badge
                            key={course}
                            variant="secondary"
                            className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20 text-cyan-300"
                        >
                            {course}
                        </Badge>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-purple-400 mb-3 flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    Achievements
                </h3>
                <ul className="space-y-1">
                    {edu.achievements.map((achievement) => (
                        <li key={achievement} className="text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3" />
                            {achievement}
                        </li>
                    ))}
                </ul>
            </div>
        </CardContent>
    </Card>
);

const CertificationCard = ({ cert, index }: { cert: typeof certifications[0], index: number }) => (
    <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className="font-bold text-foreground group-hover:text-orange-400 transition-colors mb-2">
                        {cert.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                </div>
                <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/40 text-green-300">
                    {cert.status}
                </Badge>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2 text-orange-400" />
                <span>Issued: {cert.date}</span>
            </div>
        </CardContent>
    </Card>
);

export default function Education() {
    // Track the currently open accordion item
    const [open, setOpen] = useState<string | undefined>(certifications[0]?.name);

    // Find the image for the currently open item
    const activeCert = certifications.find(cert => cert.name === open);

    return (
        <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/20" id="education" >
            < div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" >
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Education & Certifications
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        My academic journey and professional development in computer science
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Academic Background
                    </h2>
                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <div
                                key={edu.degree}
                                style={{
                                    animationDelay: `${index * 200}ms`,
                                    animation: 'fadeInUp 0.6s ease-out forwards'
                                }}
                            >
                                <EducationCard edu={edu} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                        Professional Certifications
                    </h2>
                    {/* Container */}
                    <div className="w-full flex flex-col md:flex-row items-stretch justify-center min-h-[350px] max-h-[450px] overflow-hidden">

                        {/* Left: Fixed-size image area */}
                        <div className="md:w-1/2 w-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center p-4">
                            <div className="w-full h-full max-h-[400px] flex items-center justify-center">
                                {activeCert && (
                                    <img
                                        src={activeCert.image}
                                        alt={activeCert.name}
                                        className="w-full h-full object-contain rounded-xl shadow-2xl transition-all duration-300"
                                    />
                                )}
                            </div>
                        </div>
                        {/* Right: Accordion */}
                        <div className="md:w-1/2 w-full flex flex-col justify-center">
                            <Accordion.Root
                                type="single"
                                collapsible
                                value={open}
                                onValueChange={setOpen}
                                className="w-full space-y-0"
                            >
                                {certifications.map((cert) => (
                                    <Accordion.Item
                                        key={cert.name}
                                        value={cert.name}
                                        className="border border-border/50 rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm"
                                    >
                                        <Accordion.Header>
                                            <Accordion.Trigger className="flex w-full items-center justify-between px-8 py-6 text-xl font-semibold text-left transition-colors hover:bg-accent/30 group">
                                                <span>
                                                    {cert.name}
                                                    <span className="block text-base font-normal text-muted-foreground">
                                                        {cert.issuer}
                                                    </span>
                                                </span>
                                                <ChevronDown
                                                    className="h-6 w-6 ml-2 transition-transform duration-200 group-data-[state=open]:rotate-180"
                                                    aria-hidden
                                                />
                                            </Accordion.Trigger>
                                        </Accordion.Header>
                                        <Accordion.Content className="px-8 pb-6 pt-0 text-muted-foreground data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up text-lg">
                                            <div className="flex items-center text-base mb-2">
                                                <Calendar className="h-5 w-5 mr-2 text-orange-400" />
                                                <span>Issued: {cert.date}</span>
                                            </div>
                                            <div>
                                                <span className="inline-block rounded bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/40 text-green-300 px-3 py-1 text-sm font-medium">
                                                    {cert.status}
                                                </span>
                                            </div>
                                            {cert.description && (
                                                <div className="mt-3 text-base text-muted-foreground">
                                                    {cert.description}
                                                </div>
                                            )}
                                        </Accordion.Content>
                                    </Accordion.Item>
                                ))}
                            </Accordion.Root>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}