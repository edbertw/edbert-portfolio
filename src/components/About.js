import Image from 'next/image';

export default function About() {
    const skills = [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Linux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
      { name: 'Github Actions', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C++/C', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/c/c-plain.svg' },
      { name: 'R', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/r/r-original.svg' },
      { name: 'Bash', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/bash/bash-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'},
      { name: 'PyTorch', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg' },
      { name: 'Tensorflow', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Keras', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/keras/keras-original.svg' },
      { name: 'Scikit-Learn', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'Pandas', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/pandas/pandas-original.svg' },
      { name: 'Matplotlib', icon: 'https://github.com/devicons/devicon/raw/master/icons/matplotlib/matplotlib-original.svg' },
      { name: 'Plotly', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/plotly/plotly-original.svg' },
      { name: 'LangChain', icon: '/src/langchain-color.svg' },
      { name: 'Django', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/django/django-plain.svg' },
      { name: 'Django REST Framework', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/djangorest/djangorest-original.svg' },
      { name: 'Flask', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg' },
      { name: 'FastAPI', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/fastapi/fastapi-original.svg' },
      { name: 'Postman', icon: 'https://github.com/devicons/devicon/raw/master/icons/postman/postman-original.svg' },
      { name: 'Hugging Face', icon: 'https://huggingface.co/front/assets/huggingface_logo.svg' },
      { name: 'Docker', icon: 'https://github.com/devicons/devicon/raw/v2.16.0/icons/docker/docker-original.svg' },
      { name: 'Streamlit', icon: 'https://github.com/devicons/devicon/raw/master/icons/streamlit/streamlit-original.svg' },
      { name: 'Google Cloud Platform', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Firebase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg' },
      { name: 'Supabase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg' },
    ];
 
    return (
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="heading">About<span> Edbert</span></h2>
          <h3>Aspiring Data Scientist, ML Engineer and Software Engineer</h3>
          <p>Experience with building smart and AI-powered data systems, real-time dynamic and interactive dashboards, agentic AI and LLM applications utilizing state-of-the-art frameworks and tools, web development and full-stack containerized applications ready for deployment.</p>
        </div>
        <div className="about-img">
          <Image src="/src/2906282.jpg" alt="About Edbert" width={600} height={200}/>
        </div>
       
        <div className="skills-section">
          <h3>Technical <span>Skills</span></h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <Image src={skill.icon} alt={skill.name} width={200} height={200} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
