import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="container">
      <h2>Contactez-nous</h2>
      <p>N&apos;hésitez pas à nous contacter pour toute question ou demande de renseignements.</p>

      <form>
        <div className="form-group">
          <label htmlFor="company">Société :</label>
          <input type="text" id="company" name="company" />
        </div>

        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Adresse e-mail :</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Votre message :</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
