import Image from 'next/image';

export default function Education() {
    const education = [
        {
            institution: "The University of Hong Kong",
            location: "Hong Kong",
            degree: "Bachelor of Engineering in Data Science, Minor in Finance",
            period: "2023 – 2027",
            gpa: "3.83/4.3",
            image: "/src/hku.jpg",
            details: [
                "Core coursework: Intro to Data Science, Data Structures and Algorithms, Probability and Statistics, Machine Learning, Statistical Learning, Artificial Intelligence, Database Management Systems (MySQL), Object-Oriented Programming (Java)",
                "Minor coursework: Financial Accounting, Microeconomics, Macroeconomics, Corporate Finance",
                "Hackathons: Alibaba International Global E-Commerce Challenge 2024, Inter-University Generative AI Hackathon for Social Development Goals 2024, Morgan Stanley Asia Code To Give Hackathon 2025",
                "Extracurriculars: HKU Data Science Association Executive Committee (2024-2025)"
            ]
        },
        {
            institution: "King's College London",
            location: "London, United Kingdom",
            degree: "HKU WorldWide Exchange Program, Data Science",
            period: "Jan 2026 – Jun 2026",
            gpa: "_",
            image: "/src/kcl.png",
            details: [
                "Core coursework: Linear Statistical Analysis, Algorithmic Finance, Information Security, Principles of Marketing"
            ]
        }
    ];
 
    const awards = [
        {
            title: "HKU Worldwide Exchange Scholarship",
            institution: "The University of Hong Kong",
            year: "February 2026",
            description: "HKD 14,000 Jointly funded by Reaching Out Award and Lee Shau Kee Scholarships for Student Enrichment"
        },
        {
            title: "Dean's  Honours List",
            institution: "The University of Hong Kong",
            year: "August 2025",
            description: "AY 2023-2024"
        },
        {
            title: "HKU Belt and Road Scholarship (2023-2027)",
            institution: "The University of Hong Kong",
            year: "2023-2027",
            description: "Full-tuition Scholarship, tenable for up to 4 years"
        }
    ];

    return (
        <section className="education" id="education">
            <h2 className="heading">Education</h2>
            
            <div className="education-container">
                {education.map((edu, index) => (
                    <div className="education-item" key={index}>
                        <div className="education-header">
                            <div className="institution-info">
                                <div className="institution-logo">
                                    <Image 
                                        src={edu.image} 
                                        alt={`${edu.institution} logo`} 
                                        width={80} 
                                        height={80}
                                        className="university-logo"
                                    />
                                </div>
                                <div className="institution-details">
                                    <h3>{edu.institution}</h3>
                                    <p>{edu.location}</p>
                                </div>
                            </div>
                            <div className="degree-info">
                                <h4>{edu.degree}</h4>
                                <p>{edu.period}</p>
                                <div className="gpa-info">
                                    <span className="gpa-label">GPA:</span>
                                    <span className="gpa-value">{edu.gpa}</span>
                                </div>
                            </div>
                        </div>
                        <ul className="education-details">
                            {edu.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="awards-section">
                <h3>Awards & <span>Recognition</span></h3>
                <div className="awards-container">
                    {awards.map((award, index) => (
                        <div className="award-item" key={index}>
                            <div className="award-header">
                                <h4>{award.title}</h4>
                                <p className="award-institution">{award.institution}</p>
                                <p className="award-year">{award.year}</p>
                            </div>
                            <p className="award-description">{award.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
