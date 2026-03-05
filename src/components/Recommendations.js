import { useState } from 'react';

export default function Recommendations() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const recommendations = [
    {
      company: "migrasia",
      id: 1,
      name: "Salma Khaled",
      position: "AI/ML Engineer @ Migrasia",
      excerpt: '"Edbert consistently demonstrated professionalism, intellectual curiosity, and a strong work ethic."',
      full: `
        <p><strong>To Whom It May Concern,</strong></p>
        
        <p>I am pleased to write this letter of recommendation for Edbert Widjaja, who interned with me
        at Migrasia Global Limited Solutions from 07/02/2025 to 23/04/2025. During his internship,
        Edbert consistently demonstrated professionalism, intellectual curiosity, and a strong work ethic.</p>
        
        <p>As an AI/ML Engineer and Technology Consultant at Migrasia, I had the pleasure of supervising
        and collaborating closely with Edbert on several key projects. These included implementing and
        fine-tuning a machine translation application for Bahasa Indonesia speakers—achieving
        excellent performance—as well as contributing to various AI research projects aligned with our
        organizational goals. Additionally, Edbert helped update our organization's website by
        integrating research data and building interactive visualizations using React and Node.js. He also
        designed a Retrieval-Augmented Generation (RAG) pipeline to support an AI-powered grant
        application tool, which is now a foundational piece of our internal operations.</p>
        
        <p>Edbert approaches each task with enthusiasm and discipline. He was quick to acquire new skills
        and always contributed meaningfully to the team. One of his standout qualities is his ability to
        manage time effectively—balancing internship responsibilities alongside his university
        coursework and exams. He communicates openly to clarify expectations and demonstrates strong
        critical thinking in determining how to tackle technical challenges. Edbert is also highly
        receptive to feedback and shows a genuine eagerness to improve and explore unfamiliar tools
        and frameworks.</p>
        
        <p>Beyond his technical abilities, Edbert is an excellent communicator and team player. He engages
        thoughtfully with colleagues, asks insightful questions, and embraces collaboration. I was
        particularly impressed by his ability to deliver strong results even when working with new
        technologies for the first time. He is also highly adaptable and open to exploring new ideas and
        projects, which makes him an ideal candidate for dynamic and innovation-driven environments.</p>
        
        <p>I have no doubt that Edbert will bring the same level of commitment, creativity, and intelligence
        to any future endeavor. I strongly recommend him for roles in research or AI/ML engineering,
        and I am confident he will be a valuable asset to any team or institution.</p>

        <p>Please feel free to contact me at salma@migrasia.org should you require any further information.</p>
        
        <p><strong>Sincerely,<br>
        Salma Khaled Ali<br>
        Technology Consultant<br>
        Migrasia Global Limited Solutions</strong></p>
      `
    },
    {
      company: "naxon",
      id: 2,
      name: "Jarvis Sindhuse Apaitan",
      position: "Chief Operating Officer @ Naxon.ai",
      excerpt: '"I have full confidence that Edbert will bring the same level of dedication and impact to any future opportunity he pursues."',
      full: `
        <p><strong>To Whom It May Concern,</strong></p>

        <p>I am pleased to write this reference letter for Edbert Widjaja, who interned at Naxon from 1st
            May to 23rd June, contributing meaningfully to our Machine Learning and AI development
            efforts.</p>
        
        <p>During his internship, Edbert worked closely with our Machine Learning Engineer on the MCP
            (Model Context Protocol) and Model Configuration Pipeline project—a critical component of our AI agent infrastructure.
            His responsibilities included supporting model tuning workflows, improving data preprocessing
            logic, and assisting in performance evaluations of various ML configurations. Edbert's ability to
            grasp complex technical requirements and translate them into actionable tasks made him a
            valuable contributor to the project.</p>
        
        <p>I have full confidence that Edbert will bring the same level of dedication and impact to any future
            opportunity he pursues. I strongly recommend him and would be happy to provide further
            information upon request.</p>
        
        <p><strong>Sincerely,<br>
        Jarvis Sindhuse Apaitan<br>
        Founder / Chief Operating Officer<br>
        Naxon</strong></p>
      `
    },
    {
      company: "chinotech",
      id: 3,
      name: "Vincent Pang",
      position: "Chief Technology Officer @ Chinotech International Limited",
      excerpt: "We sincerely recommend Edbert to be hired for with related positions in AI",
      full: `
        <p><strong>To whom it may concern,</strong></p>

        <p>This is to certify that Edbert Widjaja, with HKID F#####, is being offered a
        position of Software Intern during the period of 16th December, 2024 to 17th January,
        2025. During the internship, Edbert has been involved in the A.I. project responsible
        for the predictive maintenance development.</p>
        
        <p>We sincerely recommend Edbert to be hired with related positions.</p>
        
        
        <p><strong>Yours sincerely,<br>
        Vincent Pang<br>
        Director / Chief Technology Officer<br>
        Chinotech International Limited</strong></p>
      `
    }
  ];

  return (
    <section className="recommendations" id="recommendations">
      <h2 className="heading">Recommendation <span>Letters</span></h2>
      
      <div className="recommendations-container">
        {recommendations.map(rec => (
          <div className="recommendation-item" key={rec.id}>
            <div className="recommendation-header">
              <div className="recommender-info">
                <h3>{rec.name}</h3>
                <p>{rec.position}</p>
              </div>
            </div>
            <div className="recommendation-content">
              {!expanded[rec.id] ? (
                <div className="recommendation-excerpt">
                  <p>{rec.excerpt}</p>
                </div>
              ) : (
                <div 
                  className="recommendation-full" 
                  dangerouslySetInnerHTML={{ __html: rec.full }}
                />
              )}
              <button 
                className="view-more-btn btn" 
                onClick={() => toggleExpand(rec.id)}
              >
                {expanded[rec.id] ? 'View Less' : 'View More'}
              </button>
              <a 
                href={`/recommendation_${rec.company}.pdf`} 
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Letter (PDF)
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}