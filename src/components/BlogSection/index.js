import {Link} from 'react-router-dom'
import {BiRightArrowAlt} from 'react-icons/bi'

import './index.css'
import '../ServicesSection/index.css'
import '../IntroBlock/index.css'

const BlogsList = [
  {
    id: 0,
    domain: 'Google',
    Heading: 'How to Fix Core Web Vitals Page Experience?',
    Description: `The Core Web vitals started last year August. 
      With 87% of Websites FAILING Googles Core Web Vitals now is the time to set this as a top priority 
      for your development team or your current SEO Company....`,
    imgUrl:
      'https://img.freepik.com/premium-vector/medical-check-up-good-blood-pressure-tech-laptop-computer-flat-cartoon-icon_212005-602.jpg',
  },
  {
    id: 1,
    domain: 'Web Design',
    Heading:
      'Google’s mobile-first world is here. So how to you get you ranked?',
    Description: `Google recently stated they are going to split the mobile index from the desktop one. 
      What’s more, the mobile index will become Google’s primary index. This means mobile users will get Google’s freshest....`,
    imgUrl:
      'https://img.freepik.com/premium-vector/web-ui-ux-design-web-development-concept-web-design-application-design-coding-web-building-white-background-3d-vector-illustration_145666-1590.jpg',
  },
  {
    id: 2,
    domain: 'Internet Marketing',
    Heading: 'AI Internet Marketing: Does AI work for SEO in 2022?',
    Description:
      'Big Tech SEO is now using AI (Machine Learning), aligning with Google’s known SEO scoring signals complementing our Award-winning SEO Optimization. We have a process of looking....',
    imgUrl:
      'https://img.freepik.com/free-vector/brain-with-digital-circuit-programmer-with-laptop-machine-learning-artificial-intelligence-digital-brain-artificial-thinking-process-concept-vector-isolated-illustration_335657-2246.jpg',
  },
  {
    id: 3,
    domain: 'Search Engine',
    Heading: 'How to Improve your SEO? – Interview with Garry Grant',
    Description: `How to Improve your SEO –7 SEO Essentials To increase your Company’s Visibility (PodCast) 
      of an agency specializing in insights-driven internet marketing...`,
    imgUrl:
      'https://img.freepik.com/free-vector/seo-analytics-team-concept-illustration_114360-9205.jpg',
  },
  {
    id: 4,
    domain: 'Internet Marketing',
    Heading: 'What are Google Analytics Events?',
    Description: `Page speed has been the central discussion for the SEO community lately, 
    with much impetus given to Google’s new speed metric, WebVitals. Google and other 
      search engines have been vocal that user engagement is a significant ranking ...`,
    imgUrl:
      'https://img.freepik.com/free-vector/setup-analytics-concept-illustration_114360-1438.jpg',
  },
  {
    id: 5,
    domain: 'Web Design',
    Heading: `We reduced our page load time by 8 seconds. Here’s how we did it!!`,
    Description: `At the beginning of October, we saw drastic fluctuations in our page speed. 
    To fix this, we implemented several changes that reduced our page load time dramatically...`,
    imgUrl:
      'https://img.freepik.com/free-vector/website-creator-concept-illustration_114360-2766.jpg',
  },
]

const BlogSection = props => {
  const {endIndex, showViewMoreButton} = props
  return (
    <div style={{padding: '120px 0 100px 0', textAlign: 'center'}}>
      <h1 className="sectionHeading">Our Blogs</h1>
      <ul className="servicesList">
        {BlogsList.slice(0, endIndex).map(x => (
          <li className="servicesListItems shadow p-3" key={x.id}>
            <img src={x.imgUrl} alt="blogs" className="blog-images" />
            <p className="domain-name">{x.domain}</p>
            <h1 className="serviceName">{x.Heading}</h1>
            <p className="serviceDescription">{x.Description}</p>
            <Link to={`/blogs/${x.id}`} className="read-more-links">
              READ MORE <BiRightArrowAlt />
            </Link>
          </li>
        ))}
      </ul>
      {showViewMoreButton ? (
        <Link to="/blogs">
          <button type="button" className="get-started-button">
            More Blogs
          </button>
        </Link>
      ) : null}
    </div>
  )
}
export default BlogSection
