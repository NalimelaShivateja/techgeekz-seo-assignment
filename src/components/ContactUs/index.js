import Header from '../Header'
import FooterSection from '../FooterSection'
import '../ServicesSection/index.css'
import './index.css'

const ContactUs = () => (
  <div>
    <Header />
    <div style={{padding: '120px 0px 0px 0px'}}>
      <h1 className="sectionHeading">
        Schedule a FREE digital strategy session
      </h1>
      <div className="images-and-para-container">
        <div className="m-3 text-center">
          <img
            className="contact-images"
            src="https://www.revondigital.com/wp-content/uploads/2016/09/Have-a-Clue.png"
            alt="contact"
          />
          <p className="serviceDescription">
            Have an amazing idea you want to implement?
          </p>
        </div>
        <div className="m-3 text-center">
          <img
            className="contact-images"
            src="https://www.revondigital.com/wp-content/uploads/2016/09/No-Clue.png"
            alt="contact"
          />
          <p className="serviceDescription">
            Have no clue on where to even start?
          </p>
        </div>
      </div>
      <div className="contact-form-container">
        <form className="contact-us-form">
          <h1 className="serviceDescription">
            Whatever your requirement is, we’re here to help! Simply fill-out
            the form below; we’ll make sure to get back to you as soon as
            possible!
          </h1>
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
    <FooterSection />
  </div>
)

export default ContactUs
