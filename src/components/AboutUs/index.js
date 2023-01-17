import {Link} from 'react-router-dom'
import '../ServicesSection/index.css'
import './index.css'
import '../IntroBlock/index.css'

const AboutUs = () => (
  <div style={{padding: '80px 20px 80px 20px'}}>
    <h1 className="sectionHeading">About Us</h1>
    <div className="about-us-description-and-image-container">
      <p className="serviceDescription about-us-description">
        Since 1997, Big Tech SEO has been one of the world’s leading
        professional SEO Companies. Our team is passionate about delivering the
        best range of Internet Marketing strategies to drive your company toward
        revenue-generating initiatives. As a result, Big Tech SEO has achieved
        recognition as a Clutch 2022 Top Internet Marketing Company, Inc. 500
        member, a finalist for SEO Agency of the Year by the Landy Awards, and
        selected as a Top Enterprise SEO Company six years running (2017-2023).
        Big Tech SEO AI Optimization Services (New for 2023) is now using AI
        (Machine Learning) in creating content regarding SEO scoring signals to
        complement our Award-winning SEO optimization. We have a process of
        looking at first-page results and getting the scoring from the top site
        averages. Big Tech SEO have always been and continues to break the
        barriers in innovation as the Premier SEO Company.
      </p>
      <div className="about-us-image-and-button-container">
        <img
          src="https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg"
          alt="aboutus"
          className="about-us-image"
        />
        <Link to="/contact">
          <button type="button" className="get-started-button">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  </div>
)
export default AboutUs
