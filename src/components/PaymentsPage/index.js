import {useParams} from 'react-router-dom'
import {FaRupeeSign} from 'react-icons/fa'
import Header from '../Header'
import './index.css'
import '../AboutUs/index.css'
import FooterSection from '../FooterSection'

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
    backgroundColor: '#e9f9ff',
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
    backgroundColor: '#fdffe8',
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
    backgroundColor: '#e8ffef',
  },
]

const PaymentsPage = () => {
  const {id} = useParams()
  const x = pricingList[id]
  return (
    <div>
      <Header />
      <div className="heading-and-forms">
        <h1 className="sectionHeading">
          Purchase{' '}
          <span style={{color: `${x.colorShade}`}}>
            {pricingList[id].priceName}
          </span>{' '}
          Plan
        </h1>
        <div className="payment-container-and-details-container">
          <div className="details-form">
            <div className="user-details-form">
              <input
                type="text"
                placeholder="Name"
                className="user-details-inputs"
              />
              <input
                type="text"
                placeholder="Email"
                className="user-details-inputs"
              />
              <input
                type="text"
                placeholder="Website URL"
                className="user-details-inputs"
              />
              <input
                type="text"
                placeholder="Mobile"
                className="user-details-inputs"
              />
            </div>
            <div className="user-details-form mt-5">
              <div className="payment-heading-and-image">
                <img
                  src="https://www.pngkey.com/png/full/196-1968868_major-credit-card-logos-credit-debit-card-logo.png"
                  alt="card-logos"
                  className="credit-card-logos-image"
                />
              </div>
              <input
                type="text"
                placeholder="Card Number"
                className="user-details-inputs"
              />
              <input
                type="text"
                placeholder="Name On Card"
                className="user-details-inputs"
              />
              <input
                type="text"
                placeholder="Expiration Date(MM/YY)"
                className="user-details-inputs"
              />
              <input
                type="text"
                placeholder="CVV/CVC"
                className="user-details-inputs"
              />
              <button
                type="button"
                className="get-started-button payment-button"
              >
                Pay Now
              </button>
            </div>
          </div>
          <div
            className="plan-details-container"
            style={{backgroundColor: `${x.backgroundColor}`}}
          >
            <h1 className="sectionHeading" style={{fontSize: '20px'}}>
              Plan Details
            </h1>
            <ul>
              <li key={x.id}>
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

                <h1 className="sectionHeading">
                  <FaRupeeSign />
                  {x.price}/<span style={{fontSize: '15px'}}>mo</span>
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  )
}

export default PaymentsPage
