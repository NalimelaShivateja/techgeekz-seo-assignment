import {GrMail} from 'react-icons/gr'
import {IoCall} from 'react-icons/io5'
import {ImLocation2} from 'react-icons/im'
import {BsFillCaretRightFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import '../AboutUs/index.css'
import './index.css'

const FooterSection = () => (
  <div className="footer-main-container">
    <div className="about-company m-2">
      <h1 className="sectionHeading">Big Tech SEO</h1>
      <p className="serviceDescription">
        Big Tech SEO is an industry-leading SEO / PPC <br />
        and website optimization
        <br />
        company based in High tech city, Hyderabad, Telangana.
      </p>
    </div>
    <div className="m-2">
      <h1
        className="sectionHeading"
        style={{fontSize: '22px', textAlign: 'left'}}
      >
        Contact Info
      </h1>
      <p className="serviceDescription">
        <span style={{color: '#E01F47', fontSize: '25px'}}>
          <GrMail />
        </span>
        {'  '}sales@bigtechseo.com
      </p>
      <p className="serviceDescription">
        <span style={{color: '#E01F47', fontSize: '25px'}}>
          <IoCall />
        </span>
        {'  '}+91 6303634218
      </p>
      <p className="serviceDescription">
        <span style={{color: '#E01F47', fontSize: '25px'}}>
          <ImLocation2 />
        </span>
        {'  '}High tech city, Hyderabad
      </p>
    </div>
    <div className="services-container m-2">
      <h1
        className="sectionHeading"
        style={{fontSize: '22px', textAlign: 'left'}}
      >
        Services
      </h1>
      <Link
        className="serviceDescription service-hover"
        style={{textDecoration: 'none'}}
        to="/services/0"
      >
        <span style={{color: '#E01F47', fontSize: '25px'}}>
          <BsFillCaretRightFill />
        </span>
        {'  '}
        SEO
      </Link>
      <Link
        className="serviceDescription service-hover "
        style={{textDecoration: 'none'}}
        to="/services/1"
      >
        <span style={{color: '#E01F47', fontSize: '25px'}}>
          <BsFillCaretRightFill />
        </span>
        {'  '}
        Pay Per Click Advertising
      </Link>
      <Link
        className="serviceDescription service-hover"
        style={{textDecoration: 'none'}}
        to="/services/2"
      >
        <span style={{color: '#E01F47', fontSize: '25px'}}>
          <BsFillCaretRightFill />
        </span>
        {'  '}
        Mobile Optimization
      </Link>
      <Link
        className="serviceDescription service-hover"
        style={{textDecoration: 'none'}}
        to="/services/3"
      >
        <span style={{color: '#E01F47', fontSize: '25px'}}>
          <BsFillCaretRightFill />
        </span>
        {'  '}
        Social Media Management
      </Link>
      <Link
        className="serviceDescription service-hover"
        style={{textDecoration: 'none'}}
        to="/services/4"
      >
        <span style={{color: '#E01F47', fontSize: '25px'}}>
          <BsFillCaretRightFill />
        </span>
        {'  '}
        Reputation Management
      </Link>
      <Link
        className="serviceDescription service-hover"
        style={{textDecoration: 'none'}}
        to="/services/5"
      >
        <span style={{color: '#E01F47', fontSize: '25px'}}>
          <BsFillCaretRightFill />
        </span>
        {'  '}
        Web Development
      </Link>
    </div>
  </div>
)
export default FooterSection
