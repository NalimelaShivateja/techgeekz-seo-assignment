import {Link} from 'react-router-dom'
import {BiRightArrowAlt} from 'react-icons/bi'
import './index.css'

const servicesList = [
  {
    id: 0,
    serviceName: 'Search Engine Optimization',
    serviceImgUrl:
      'https://cdn.seoinc.net/2019/07/SEO-Service-Icon-compressor.png',
    serviceDescription:
      'Professional SEO services are perfected from 25+ years of experience, ensuring sites of all sizes will achieve higher rankings on Google and other search engines.',
    color: '#f200ff',
  },
  {
    id: 1,
    serviceName: 'Pay Per Click Advertising',
    serviceImgUrl:
      'https://cdn.seoinc.net/2019/07/PPC-Advertising-Icon-compressor.png',
    serviceDescription:
      'PPC Advertising and PPC Management is personally tailored to your business, including paid search methods that will achieve growth and ROI.',
    color: '#2000ff',
  },
  {
    id: 2,
    serviceName: 'Mobile Optimization',
    serviceImgUrl:
      'https://cdn.seoinc.net/2019/07/Mobile-Optimization-Icon-compressor.png',
    serviceDescription:
      'Big Tech SEO provides expert mobile optimization with responsive web design, ad targeting, and improved organic, local, national, and international visibility.',
    color: '#00e8ff',
  },
  {
    id: 3,
    serviceName: 'Socia Media Management',
    serviceImgUrl:
      'https://cdn.seoinc.net/2019/07/Social-Media-Management-Icon-compressor.png',
    serviceDescription:
      'Big Tech SEO will manage your social media profiles on various platforms. Our team is driven to create results in higher impressions, audience growth, traction, and increase overall online presence.',
    color: '#00ff4b',
  },
  {
    id: 4,
    serviceName: 'Reputation Management',
    serviceImgUrl:
      'https://cdn.seoinc.net/2019/07/Reputation-Management-Icon-compressor.png',
    serviceDescription:
      'Control what the public views about your business. Big Tech SEO will proactively monitor and migrate all social media content, search results, and more.',
    color: '#ffff00',
  },
  {
    id: 5,
    serviceName: 'E-Commerce and Web Development',
    serviceImgUrl: 'https://cdn.seoinc.net/2019/07/Web-ic-compressor.png',
    serviceDescription:
      'Draw in high-converting leads with responsive web designs. Our team has extensive experience in Wordpress, Shopify, Magento, Drupal and various languages.',
    color: '#ff8e00',
  },
]

const ServicesSection = props => {
  const {endIndex, showViewAllServices} = props
  return (
    <div className="service-section-main-container">
      <h1 className="sectionHeading">Our Services</h1>
      <div>
        <ul className="servicesList">
          {servicesList.slice(0, endIndex).map(x => (
            <li
              className={`servicesListItems shadow p-3 rounded service-hover-${x.id}`}
              style={{borderBottom: `4px solid ${x.color}`}}
              key={x.id}
            >
              <img src={x.serviceImgUrl} alt="service" />
              <h1 className="serviceName">{x.serviceName}</h1>
              <p className="serviceDescription">{x.serviceDescription}</p>
              <Link to={`/services/${x.id}`} className="know-more">
                Know In Detail <BiRightArrowAlt />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {showViewAllServices ? (
        <Link to="/services">
          <button type="button" className="get-started-button">
            View All
          </button>
        </Link>
      ) : null}
    </div>
  )
}

export default ServicesSection
