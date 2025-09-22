import { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const response = await fetch('https://script.google.com/macros/s/AKfycbypWKYV87eQLG7fzQ3DfHLjCVGssMFj_ErJol9n9sWDKUA_hIaLLJw90d4KKl1hRULR/exec', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      setMessage('Message sent successfully');
      e.target.reset();
      setTimeout(() => setMessage(''), 5000);
    } else {
      setMessage('Error sending message');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact<span> Me!</span></h2>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="text" name="Name" placeholder="Full Name" required />
          <input type="email" name="Email Address" placeholder="Email Address" required />
        </div>
        <div className="input-box">
          <input type="tel" name="Mobile Number" placeholder="Mobile Number" />
          <input type="text" name="Email Subject" placeholder="Email Subject" required />
        </div>
        <textarea name="Your Message" cols="30" rows="10" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
        </button>
      </form>
      {message && <span id="msg">{message}</span>}
    </section>
  );
}