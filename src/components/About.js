import Image from 'next/image';

export default function About() {
    const skills = [
      // Frontend
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },

      // Backend
      { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Django', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/django/django-plain.svg' },
      { name: 'Django REST Framework', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/djangorest/djangorest-original.svg' },
      { name: 'Flask', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg' },
      { name: 'FastAPI', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/fastapi/fastapi-original.svg' },

      // Databases
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Redis', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg' },
      // Data Science / ML
      { name: 'R', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/r/r-original.svg' },
      { name: 'C++/C', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/c/c-plain.svg' },
      { name: 'PyTorch', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg' },
      { name: 'Tensorflow', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg' },
      { name: 'Keras', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/keras/keras-original.svg' },
      { name: 'Scikit-Learn', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'Pandas', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/pandas/pandas-original.svg' },
      { name: 'Matplotlib', icon: 'https://github.com/devicons/devicon/raw/master/icons/matplotlib/matplotlib-original.svg' },
      { name: 'Plotly', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/plotly/plotly-original.svg' },
      { name: 'LangChain', icon: '/src/langchain-color.svg' },
      { name: 'Hugging Face', icon: 'https://huggingface.co/front/assets/huggingface_logo.svg' },
      { name: 'Streamlit', icon: 'https://github.com/devicons/devicon/raw/master/icons/streamlit/streamlit-original.svg' },

      // Tools / OS
      { name: 'Linux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' },
      { name: 'Bash', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/bash/bash-original.svg' },
      { name: 'Postman', icon: 'https://github.com/devicons/devicon/raw/master/icons/postman/postman-original.svg' },

      // DevOps / Cloud
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg' },
      { name: 'Github Actions', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/githubactions/githubactions-original.svg' },
      { name: 'Docker', icon: 'https://github.com/devicons/devicon/raw/v2.16.0/icons/docker/docker-original.svg' },
      { name: 'Amazon Web Services', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Google Cloud Platform', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Firebase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg' },
      { name: 'Supabase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg' },
    ];

    return (
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="heading">About<span> Edbert</span></h2>
          <h3>Aspiring AI/ML/Software Engineer</h3>
          <p>Experience building Cloud Infrastructure and Full-stack applications with rich AI / ML integrations</p>
          <p><span>Currently studying for the AWS Certified Solutions Architect Associate Exam</span></p>
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
