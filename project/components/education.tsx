'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, BookOpen } from 'lucide-react';

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
        status: 'Active'
    },
    {
        name: 'Google IT Support Professional Certificate',
        issuer: 'Google',
        date: 'January 2023',
        status: 'Active'
    },
    {
        name: 'Leaders in Training',
        issuer: 'City of Edmonton',
        date: 'July 2022',
        status: 'Active'
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

                <div>
                    <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                        Professional Certifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={cert.name}
                                style={{
                                    animationDelay: `${(index + 2) * 150}ms`,
                                    animation: 'fadeInUp 0.6s ease-out forwards'
                                }}
                            >
                                <CertificationCard cert={cert} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </div >
    );
}