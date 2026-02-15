import Image from 'next/image';

export default function Experience() {
    const experiences = [
      {
        company: "Morgan Stanley",
        location: "Hong Kong",
        position: "Incoming Summer Technology Analyst",
        period: "Jun 2026 – Aug 2026",
        logo: "/src/morgan_stanley.jpg",
        details: [
          "Institutional Securities Technology"
        ]
      },
      {
        company: "Langya AI Limited",
        location: "Hong Kong",
        position: "Software Engineer Intern",
        period: "Jun 2025 – Aug 2025",
        logo: "/src/langya.webp",
        details: [
          "Designed a custom API Gateway routing to 30+ protected Vertex AI API endpoints using Node.js, Express, FastAPI and Cloud Firestore Database",
          "Deployed all REST endpoints on GCP's Compute Engine with Nginx proxy as well as serverless architectures (Firebase Cloud Functions, GCP's Cloud Run)",
          "Utilize AWS SigV4 token signing on Google Cloud Storage (GCS) Private Buckets through Cloud CDN and Cloud Load Balancing for serving of 5+ static assets. Achieved low-latency delivery and enhanced asset security",
          "Led full-stack initiatives to automate in-house developed LLM’s high-volume file fetch, processing and uploads with Google, Dropbox and Azure OAuth 2.0 "
        ]
      },
      {
        company: "Naxon.ai",
        location: "Jakarta, Indonesia",
        position: "Machine Learning Engineer Intern",
        period: "May 2025 – Jun 2025",
        logo: "/src/naxon.jpeg",
        details: [
          "Applied multi-agent networks for an Adaptive RAG chatbot with Google Sheets Model Context Protocol (MCP) server integration, assembled through LangGraph, Azure OpenAI, PostgreSQL for memory handling and Flask for REST APIs",
          "Designed a multi-agent RAG system that enhances its replies through automatic changes in system prompt and ChromaDB knowledge base"
        ]
      },
      {
        company: "Migrasia",
        location: "Hong Kong",
        position: "Machine Learning Engineer Intern",
        period: "Feb 2025 – Apr 2025",
        logo: "/src/migrasia.png",
        details: [
          "Built multiple domain-adapted Neural Machine Translation (NMT) system by fine-tuning Gemma2 SEA-LION 9B, optimizing LLM operations by over 80% with quantized LoRA and lifting average BLEU score by 24.4. Outperformed OpenAI's GPT-4o by 200%",
          "Attempted to solve the domain adaptation translation issue by aggregating multiple samples of parallel corpus datasets found from 8 cutting-edge NMT research, through degrees of sentence formality and length",
          "Integrated dynamic data analytics dashboard from PowerBI, Chart.js and React.js to company website. Boosted web traffic and engagement by 30%",
          "Collaborated in an agile team to deliver a full-stack AI grant writer utilizing RAG pipelines (OpenAI Embeddings, LangChain, ChromaDB, etc), JavaScript, Django REST Framework and Git for streamlined version control"
        ]
      },
      {
        company: "Chinotech International Limited",
        location: "Hong Kong",
        position: "Data Scientist Intern",
        period: "Jan 2025 – Jan 2025",
        logo: "/src/chinotech.png",
        details: [
          "Ran large-scale telemetry data migration to Thingsboard IoT via Shell Scripting, REST APIs and MQTT Pub/Sub pattern, enabling 55% more cross-platform anomalies detected",
          "Established and deployed Machine Learning-based predictive (Trendz) analytics platform with AWS EC2, Docker, OpenJDK and PostgreSQL JDBC, allowing for firm-wide adoption"
        ]
      }
    ];

    return (
      <section className="experience" id="experience">
        <h2 className="heading">Recent <span>Experiences</span></h2>
        
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-header">
                <div className="company-info">
                  {exp.logo ? (
                    <div className="company-logo">
                      <Image src={exp.logo} alt={`${exp.company} logo`} width={48} height={48} className="company-logo-img" />
                    </div>
                  ) : (
                    <div className="company-logo-fallback" aria-hidden="true">
                      {exp.company.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase()}
                    </div>
                  )}
                  <h3>{exp.company}</h3>
                  <p>{exp.location}</p>
                </div>
                <div className="position-info">
                  <h4>{exp.position}</h4>
                  <p>{exp.period}</p>
                </div>
              </div>
              <ul className="experience-details">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }