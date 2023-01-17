import './index.css'
import '../ServicesSection/index.css'

const ContactUsSection = () => (
  <div className="main-container">
    <div className="contact-description">
      <h1 className="sectionHeading">Ready to collaborate? Get in Touch</h1>
      <p className="serviceDescription">
        Big Tech SEO is an SEO Company and Paid Search experts aiming to help
        businesses improve their online presence in search and social media to
        acquire new customers, increase revenue and build their brand online.
      </p>
    </div>
    <div>
      <form>
        <label htmlFor="nameInput" className="serviceDescription">
          Name*
        </label>
        <input type="text" id="nameInput" />
        <label htmlFor="emailInput" className="serviceDescription">
          Email*
        </label>
        <input type="email" id="emailInput" />
        <label htmlFor="urlInput" className="serviceDescription">
          Website URL*
        </label>
        <input type="url" id="urlInput" />
        <label htmlFor="numberInput" className="serviceDescription">
          Phone*
        </label>
        <input type="text" id="numberInput" />
        <button className="get-started-button" type="button">
          Submit
        </button>
      </form>
    </div>
  </div>
)

export default ContactUsSection
