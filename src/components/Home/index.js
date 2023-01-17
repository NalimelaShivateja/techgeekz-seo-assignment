import Header from '../Header'
import IntroBlock from '../IntroBlock'
import ServicesSection from '../ServicesSection'
import AboutUs from '../AboutUs'
import './index.css'
import BlogSection from '../BlogSection'
import ContactUsSection from '../ContactUsSection'
import FooterSection from '../FooterSection'

const Home = () => (
  <div>
    <Header />
    <IntroBlock />
    <ServicesSection endIndex="3" showViewAllServices />
    <AboutUs />
    <ContactUsSection />
    <BlogSection endIndex="3" showViewMoreButton />
    <FooterSection />
  </div>
)

export default Home
