import {Component} from 'react'
import FooterSection from '../FooterSection'
import '../AboutUs/index.css'
import Header from '../Header'
import './index.css'

const eachServiceInfo = [
  {
    heading: 'What Is SEO – Search Engine Optimization?',

    description: `SEO stands for “search engine optimization.” In simple terms, it means the process of improving your site to increase its visibility when people search for products or services related to your business in Google, Bing, and other search engines. The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business.
      Search engines such as Google and Bing use bots to crawl pages on the web, going from site to site, collecting information about those pages and putting them in an index. Think of the index like a giant library where a librarian can pull up a book (or a web page) to help you find exactly what you’re looking for at the time.

Next, algorithms analyze pages in the index, taking into account hundreds of ranking factors or signals, to determine the order pages should appear in the search results for a given query.

Our SEO success factors can be considered proxies for aspects of the user experience. It’s how search bots estimate exactly how well a website or web page can give the searcher what they’re searching for. `,

    imgUrl:
      'https://img.freepik.com/free-vector/seo-isometric-concept-with-monitoring-traffic-symbols-isolated_1284-32006.jpg',
  },
  {
    heading: 'What Is Pay-Per-Click Advertising?',
    description: `PPC is an online advertising model in which advertisers pay each time a user clicks on one of their online ads.

There are different types of PPC ads, but one of the most common types is the paid search ad. These ads appear when people search for things online using a search engine like Google – especially when they are performing commercial searches, meaning that they’re looking for something to buy. This could be anything from a mobile search (someone looking for “pizza near me” on their phone) to a local service search (someone looking for a dentist or a plumber in their area) to someone shopping for a gift (“Mother’s Day flowers”) or a high-end item like enterprise software. All of these searches trigger pay-per-click ads.

In pay-per-click advertising, businesses running ads are only charged when a user actually clicks on their ad, hence the name “pay-per-click.”

Other forms of PPC advertising include display advertising (typically, serving banner ads) and remarketing.`,
    imgUrl:
      'https://img.freepik.com/free-vector/ppc-advertising-managers-work-with-websites-ppc-campaign-pay-per-click-model-internet-marketing-tools-search-engine-advertising-concept-pinkish-coral-bluevector-isolated-illustration_335657-2279.jpg?',
  },
  {
    heading: 'What is Mobile Optimization?',
    description: `With mobile phones now well outstripping desktop computers in sheer number as well as usage, mobile responsive design has shifted from being a ‘nice to have’ to becoming instrumental in web design. 

Further, it’s clear that even responsive design is no longer enough. In order to convert more website visitors into customers, online retailers need to keep up with digital transformation, and make sure their sites are optimized for mobile. 

Mobile optimization is the process of adjusting your website content to ensure visitors accessing the site from mobile devices have an experience customized to that device.”

Rather than simply compressing or rearranging content on a screen, a mobile-optimized site is designed entirely for a smaller screen user’s experience. `,
    imgUrl:
      'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?w=2000',
  },
  {
    heading: 'What is social media management?',
    description: `Social media management is the process of analyzing social media audiences and developing a strategy that’s tailored to them, creating and distributing content for social media profiles, monitoring online conversations, collaborating with influencers, providing community service, and monitoring, measuring, and reporting on social media performance and ROI.

All these tasks, which were once marginalized by businesses, have now stepped into the limelight of companies’ marketing strategies.

Why? Because social media provides great money-making opportunities – on the condition you manage your social channels in an organized, efficient way.`,
    imgUrl:
      'https://img.freepik.com/free-vector/hand-drawn-illustration-people-with-smartphone-marketing_52683-66659.jpg',
  },
  {
    heading: 'What is Reputation Management?',
    description: `Reputation management, originally a public relations term, refers to the influencing, controlling, enhancing, or concealing of an individual's or group's reputation. The growth of the internet and social media led to growth of reputation management companies, with search results as a core part of a client's reputation.[1] Online reputation management, sometimes abbreviated as ORM, focuses on the management of product and service search engine results.[2] Ethical grey areas include mug shot removal sites, astroturfing customer review sites, censoring complaints, and using search engine optimization tactics to influence results. In other cases, the ethical lines are clear; some reputation management companies are closely connected to websites that publish unverified and libelous statements about people.[3] Such unethical companies charge thousands of dollars to remove these posts – temporarily – from their websites.[3]

This field of public relations has developed extensively, with the growth of the internet and social media the advent of reputation management companies. The overall outlook of search results has become an integral part of what defines "reputation" and reputation management now exists under two spheres: online and offline reputation management.`,
    imgUrl:
      'https://img.freepik.com/free-vector/pr-managers-internet-marketers-coworking-online-reputation-management-product-service-search-results-digital-space-representation-concept_335657-88.jpg',
  },
  {
    heading: 'What is E-Commerce and Web Development?',
    description: `E-commerce website design involves designing, building, and fine-tuning your e-commerce website to improve performance, drive sales, and make your e-commerce portal a place that people want to come to and use. Millions of e-commerce websites exist, and billions of consumers use them every day.

Many of these e-commerce sites flounder because of poor design choices. An e-commerce website requires both front and back-end development. Your site needs a modern look and feel, as well as a high level of easy usability on any device, whether it be a laptop or a mobile phone. If you want a successful e-commerce business, then you need professional e-commerce website development.`,
    imgUrl:
      'https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg',
  },
]

class EachService extends Component {
  triggerBack = () => {
    const {history} = this.props
    history.goBack()
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div>
        <Header />
        <div style={{padding: '120px 10px 100px 10px'}} className="text-center">
          <h1 className="sectionHeading ">{eachServiceInfo[id].heading}</h1>
          <div className="about-us-description-and-image-container">
            <img
              src={eachServiceInfo[id].imgUrl}
              className="service-images"
              alt="service-pics"
            />
            <p className="serviceDescription service-info">
              {eachServiceInfo[id].description}
            </p>
          </div>

          <button
            onClick={this.triggerBack}
            type="button"
            className="get-started-button"
          >
            Back
          </button>
        </div>
        <FooterSection />
      </div>
    )
  }
}

export default EachService
