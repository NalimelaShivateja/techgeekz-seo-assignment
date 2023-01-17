import {Link} from 'react-router-dom'
import {FaRupeeSign} from 'react-icons/fa'
import './index.css'
import '../ServicesSection/index.css'

const pricingList = [
  {
    id: 0,
    colorShade: '#1fa9e0',
    priceName: 'Basic',
    price: 5000,
    seo: true,
    payPerClick: true,
    mobileOptimization: false,
    socialMedia: false,
    reputation: false,
    webDevelopment: false,
  },
  {
    id: 1,
    colorShade: '#e0d91f',
    priceName: 'Pro',
    price: 7000,
    seo: true,
    payPerClick: true,
    mobileOptimization: true,
    socialMedia: true,
    reputation: false,
    webDevelopment: false,
  },
  {
    id: 2,
    colorShade: '#1fe055',
    priceName: 'Pro Plus',
    price: 9000,
    seo: true,
    payPerClick: true,
    mobileOptimization: true,
    socialMedia: true,
    reputation: true,
    webDevelopment: true,
  },
]

const PricingSection = () => (
  <div style={{padding: '120px 10px 80px 10px'}}>
    <h1 className="sectionHeading">Pricing Plans</h1>
    <ul>
      {pricingList.map(x => (
        <li className="shadow" key={x.id}>
          <h1 style={{backgroundColor: x.colorShade}} className="price-plan">
            {x.priceName}
          </h1>
          <div className="image-and-service-container">
            <img
              src={
                x.seo
                  ? 'https://www.freepnglogos.com/uploads/tick-png/check-mark-tick-vector-graphic-21.png'
                  : 'https://www.freeiconspng.com/thumbs/cross-png/red-cross-png-33.png'
              }
              alt="rightorwrong"
              className="right-or-wrong-image"
            />
            <p className="serviceDescription" style={{textAlign: 'left'}}>
              Search Engine Optimization
            </p>
          </div>
          <div className="image-and-service-container">
            <img
              src={
                x.payPerClick
                  ? 'https://www.freepnglogos.com/uploads/tick-png/check-mark-tick-vector-graphic-21.png'
                  : 'https://www.freeiconspng.com/thumbs/cross-png/red-cross-png-33.png'
              }
              alt="rightorwrong"
              className="right-or-wrong-image"
            />
            <p className="serviceDescription" style={{textAlign: 'left'}}>
              Pay Per Click
            </p>
          </div>
          <div className="image-and-service-container">
            <img
              src={
                x.mobileOptimization
                  ? 'https://www.freepnglogos.com/uploads/tick-png/check-mark-tick-vector-graphic-21.png'
                  : 'https://www.freeiconspng.com/thumbs/cross-png/red-cross-png-33.png'
              }
              alt="rightorwrong"
              className="right-or-wrong-image"
            />
            <p className="serviceDescription" style={{textAlign: 'left'}}>
              Mobile Optimization
            </p>
          </div>
          <div className="image-and-service-container">
            <img
              src={
                x.socialMedia
                  ? 'https://www.freepnglogos.com/uploads/tick-png/check-mark-tick-vector-graphic-21.png'
                  : 'https://www.freeiconspng.com/thumbs/cross-png/red-cross-png-33.png'
              }
              alt="rightorwrong"
              className="right-or-wrong-image"
            />
            <p className="serviceDescription" style={{textAlign: 'left'}}>
              Social Media Management
            </p>
          </div>
          <div className="image-and-service-container">
            <img
              src={
                x.reputation
                  ? 'https://www.freepnglogos.com/uploads/tick-png/check-mark-tick-vector-graphic-21.png'
                  : 'https://www.freeiconspng.com/thumbs/cross-png/red-cross-png-33.png'
              }
              alt="rightorwrong"
              className="right-or-wrong-image"
            />
            <p className="serviceDescription" style={{textAlign: 'left'}}>
              Reputation Management
            </p>
          </div>
          <div className="image-and-service-container">
            <img
              src={
                x.webDevelopment
                  ? 'https://www.freepnglogos.com/uploads/tick-png/check-mark-tick-vector-graphic-21.png'
                  : 'https://www.freeiconspng.com/thumbs/cross-png/red-cross-png-33.png'
              }
              alt="rightorwrong"
              className="right-or-wrong-image"
            />
            <p className="serviceDescription" style={{textAlign: 'left'}}>
              E Commerce and Web Development
            </p>
          </div>

          <h1 className="sectionHeading" style={{fontSize: '20px'}}>
            <FaRupeeSign />
            {x.price}/<span style={{fontSize: '15px'}}>mo</span>
          </h1>
          <Link to={`/purchase-plans/${x.id}`}>
            <button type="button" className="priceButton">
              BUY NOW
            </button>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default PricingSection
