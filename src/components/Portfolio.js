import Image from 'next/image';

export default function Portfolio() {
    const projects = [
      {
        title: "STOCK NAVIGATOR",
        description: "A one-stop, AI-integrated stock analytics platform for enthusiasts. Click to learn more",
        image: "/src/stock.avif",
        link: "https://github.com/edbertw/STOCKNAVIGATOR"
      },
      {
        title: "Morgan Stanley Code To Give 2025 - DinoLearn",
        description: "An AI-powered mobile application to support English learning for children",
        image: "/src/ms_ctg.jpeg",
        link: "https://github.com/Strengthless/ms-hackathon-2025-team8"
      },
      {
        title: "Grade Your IELTS!",
        description: "Experimenting different NLP/ML/DL frameworks for automated essay grading. Click to learn more",
        image: "/src/essay.jpg",
        link: "https://github.com/edbertw/Grade-Your-IELTS"
      },
      {
        title: "SignBOT",
        description: "Inclusivity for the deaf. Connecting communication bridges. Click to learn more",
        image: "/src/sign.avif",
        link: "https://github.com/LaviniaThosatriavi/NexusAI_SignBOT"
      },
      {
        title: "TEXT-2-IMAGE",
        description: "MERN-stack application for synthetic image generation. Click to learn more",
        image: "/src/image_gen.jpg",
        link: "https://github.com/edbertw/TEXT-2-IMAGE"
      },
      {
        title: "Real-Estate Price Prediction",
        description: "ML and Data Preprocessing Pipelines. Click to learn more",
        image: "/src/house.jpeg",
        link: "https://github.com/edbertw/Real-Estate-Price-Prediction-System"
      },
      {
        title: "Sentiment Detection",
        description: "Deep Learning to predict sentiment. Click to learn more",
        image: "/src/sentiment.png",
        link: "https://github.com/edbertw/Sentiment-Detection-System-"
      }
    ];
  
    return (
      <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest<span> Projects</span></h2>
        <div className="portfolio-container">
          {projects.map((project, index) => (
            <div className="portfolio-box" key={index}>
              <Image src={project.image} alt={project.title} width={350} height={350} />
              <div className="portfolio-layer">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <i className='bx bx-link-external'></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <h2 className="heading">
          Click <a href="https://github.com/edbertw" style={{ color: '#007bff', textDecoration: 'underline' }}>here</a> to see more
        </h2>
      </section>
    );
  }