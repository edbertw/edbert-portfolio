export default function Experience() {
    const experiences = [
      {
        company: "Langya AI Limited",
        location: "Hong Kong",
        position: "Cloud / Software Engineer Intern",
        period: "Jun 2025 – Aug 2025",
        details: [
          "Designed a custom API Gateway routing to 30+ protected multimodal AI API endpoints using Node.js, Express, FastAPI and Cloud Firestore Database",
          "Deployed all REST endpoints on GCP Compute Engine with Nginx proxy as well as serverless architectures (Firebase Functions, Cloud Run)",
          "Utilize AWS SigV4 token signing on Google Cloud Storage (GCS) Private Buckets through Cloud CDN and HTTPS Cloud Load Balancing for serving of 5+ static assets. Achieved low-latency delivery and enhanced asset security",
          "Led full-stack initiatives to automate in-house developed LLM’s high-volume file fetch, processing and uploads with Google, Dropbox and Azure OAuth 2.0 "
        ]
      },
      {
        company: "Naxon.ai",
        location: "Jakarta, Indonesia",
        position: "LLM Engineer Intern",
        period: "May 2025 – Jun 2025",
        details: [
          "Applied multi-agent networks for an Adaptive RAG chatbot with G-Sheets Model Context Protocol (MCP) server integration, assembled through LangGraph, Azure OpenAI and PostgreSQL for memory handling, automating 85% of spreadsheet workflows",
          "Designed a multi-agent RAG system that enhances its replies through automatic changes in system prompt and ChromaDB knowledge base"
        ]
      },
      {
        company: "Migrasia",
        location: "Hong Kong",
        position: "Data Scientist Intern",
        period: "Feb 2025 – Apr 2025",
        details: [
          "Built 8 domain-adapted Neural Machine Translation (NMT) system by fine-tuning Gemma2 SEA-LION 9B, optimizing LLM operations by over 80% with quantized LoRA and lifting average BLEU score by 24.4. Outperforming OpenAI's GPT-4o by 200%",
          "Attempted to solve the domain adaptation problem by aggregating multiple samples of parallel corpus datasets found from 8 cutting-edge NMT research, through degrees of sentence formality and length",
          "Performed literature review on LLM Misalignment and jailbreaking issues, focusing on cultural and low-resource languages, by analyzing existing comprehensive benchmarks. Assisted in preparing proposal to Open Philanthropy Technical AI Safety Research grant",
          "Integrated dynamic data analytics dashboard from PowerBI, Chart.js and React.js to company website. Boosted web traffic and engagement by 30%",
          "Devised and designed a full-stack Agentic AI grant writer system, utilizing RAG technologies (ChromaDB, OpenAI, LangChain), frontend technologies (HTML/CSS/JS), Django and Django REST Framework and Git/GitHub for streamlined version control. Raised internal efficiency by 75%"
        ]
      },
      {
        company: "Chinotech International Limited",
        location: "Hong Kong",
        position: "Data Scientist Intern",
        period: "Jan 2025 – Jan 2025",
        details: [
          "Engineered large-scale data migration to IoT platform (Thingsboard) via Shell Script, HTTP REST API, MQTT, enabling real-time dashboard integration to Thingsboard. Enabled 55% more anomalies detected",
          "Developed and deployed ML and statistical-based (Prophet by Facebook, Fourier Transform, Random Forest, Linear Regression, ARIMA, SARIMAX) predictive analytics solutions for toilet utilities consumption in Hong Kong International Airport and unsupervised algorithms (DBSCAN, K-Means) for anomaly detection system through Trendz Analytics (Thingsboard) with AWS EC2, Docker and PostgreSQL",
          "Gave a final presentation on outcomes of the project and prototype to several stakeholders as well as infrastructure suggestions"
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