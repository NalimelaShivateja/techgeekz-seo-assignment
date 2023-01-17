import {Component} from 'react'
import {AiTwotoneLike, AiTwotoneDislike} from 'react-icons/ai'
import Header from '../Header'
import FooterSection from '../FooterSection'

import './index.css'
import '../ServicesSection/index.css'

const BlogsList = [
  {
    id: 0,
    domain: 'Google',
    Heading: 'How to Fix Core Web Vitals Page Experience?',
    Description:
      'The Core Web vitals started last year August. With 87% of Websites FAILING Googles Core Web Vitals now is the time to set this as a top priority for your development team or your current SEO Company....',
    imgUrl:
      'https://img.freepik.com/free-vector/tiny-cardiology-doctor-nurse-examining-heart-blood-pressure-prescribing-treatment-medical-cardiovascular-checkup-flat-vector-illustration-anatomy-hospital-heart-diseases-health-care-concept_74855-20963.jpg',
  },
  {
    id: 1,
    domain: 'Web Design',
    Heading:
      'Google’s mobile-first world is here. So how to you get you ranked?',
    Description:
      'Google recently stated they are going to split the mobile index from the desktop one. What’s more, the mobile index will become Google’s primary index. This means mobile users will get Google’s freshest....',
    imgUrl:
      'https://img.freepik.com/free-vector/cartoon-web-design-background_52683-70879.jpg',
  },
  {
    id: 2,
    domain: 'Internet Marketing',
    Heading: 'AI Internet Marketing: Does AI work for SEO in 2022?',
    Description:
      'SEO Inc. is now using AI (Machine Learning), aligning with Google’s known SEO scoring signals complementing our Award-winning SEO Optimization. We have a process of looking....',
    imgUrl:
      'https://cdn-banid.nitrocdn.com/jtoEXwJZhjmNasdLmCjvdUWBqSEcRPCr/assets/images/optimized/rev-f763c97/wp-content/uploads/2022/01/AdobeStock_238248428-scaled.jpeg',
  },
  {
    id: 3,
    domain: 'Search Enginee',
    Heading: 'How to Improve your SEO? – Interview with Garry Grant',
    Description:
      'How to Improve your SEO –7 SEO Essentials To increase your Company’s Visibility (PodCast) Improve your Search Engine Optimization (SEO) Interview with Garry Grant | RSS.com Garry Grant is the founder of SEOinc, an agency specializing in insights-driven internet marketing...',
    imgUrl:
      'https://cdn-banid.nitrocdn.com/jtoEXwJZhjmNasdLmCjvdUWBqSEcRPCr/assets/images/optimized/rev-dc00aab/wp-content/uploads/2022/02/PageSpeed-Insights.png',
  },
  {
    id: 4,
    domain: 'Internet Marketing',
    Heading: 'What are Google Analytics Events?',
    Description: `Page speed has been the central discussion for the SEO community lately, with much impetus given to Google’s new speed metric, WebVitals. Google and other 
      search engines have been vocal that user engagement is a significant ranking factor for quite some time. So naturally, web admins have been trying to reach the best page 
      speed score since then. The optimization efforts are based on a...`,
    imgUrl:
      'https://cdn.seoinc.net/wp-content/uploads/2020/10/Podcast-Ft-image-1.jpg',
  },
  {
    id: 5,
    domain: 'Web Design',
    Heading: `We reduced our page load time by 8 seconds. Here’s how we did it!!`,
    Description: `At the beginning of October, SEO Inc. saw drastic fluctuations in our page speed. To fix this, we implemented several changes that reduced our page load time dramatically. Just an FYI, all of our SEO Services include page speed optimization. This graph shows the load time for one of our pages, before and after the changes we made on October 11th: As you can see...`,
    imgUrl: 'https://cdn.seoinc.net/2016/10/clock-split-1.png',
  },
]

const Blogparas = [
  `“We’ll begin using page experience as part of our ranking systems beginning in mid-June 2021,” Google announced Monday on its developer blog. “However, page experience won’t play its full role as part of those systems until the end of August. You can think of it as adding flavoring to your food. Rather than add the flavor all at once into the mix, we’ll slowly add it all over this time period.”
Google went on to say that publishers should not expect “drastic changes.”
As Google has been stating since last year, the changes will consider “page experience signals” based on the three Core Web Vitals metrics. Earlier indications had noted that the change would begin taking place in May.
“We will no longer show the AMP badge icon to indicate AMP content. You can expect this change to come to our products as the page experience update begins to roll out in mid-June. We’ll continue to test other ways to help identify content with a great page experience, and we’ll keep you updated when there is more to share,” the company said in its blog post.
Another change will be the arrival of a new Page Experience report in the search console.
“This report combines the existing Core Web Vitals report with other components of the page experience signals, such as HTTPS security, absence of intrusive interstitials, safe browsing status, and mobile-friendliness,” the blog post said.
“The Page Experience report offers valuable metrics, such as the percentage of URLs with good page experience and search impressions over time, enabling you to evaluate performance quickly. You can also dig into the components of page experience signal to gain additional insights on opportunities for improvement.”
Google will also offer Signed Exchanges (SXG) on Google Search for all web pages, not just those built with AMP.
AMP has long been controversial, with some arguing that it has entailed Google taking too much control over the web.
“Our vision for page experience is to build a web ecosystem that users love—together. We’re hard at work to ensure that you have the right tools and resources available before the ranking rollout starting in mid-June 2021,” Google said.
Contact us if you want to explore what we can do for you regarding Web Vitals score as well as SEO Strategies.`,

  `Google recently stated they are going to split the mobile index from the desktop one. What’s more, the mobile index will become Google’s primary index. This means mobile users will get Google’s freshest, most up-to-date search results. Desktop won’t be left entirely out, but desktop results no longer align with Google’s primary focus.
You can bet the top mobile results will be populated with mobile-friendly sites. Can you count your site among them?
We at SEO Inc. agree with Google—having a mobile-friendly site is a top priority for anyone who does business online. We provide mobile optimization services to deliver your website to the people that matter most to you—users who find your site in the instant they think of the thing you’re selling.
Whether you have an e-commerce site or just a page with 1000+ blog posts, your website needs to be mobile-friendly.

`,

  `SEO Inc. is now using AI (Machine Learning), aligning with Google’s known SEO scoring signals complementing our Award-winning SEO Optimization. We have a process of looking at first-page results and getting the scoring from the top sites’ averages. We then manually adjust our client’s sites for optimum Google scoring signals for the best chance of reaching the first page and higher in the SERP results.
83% of early adopters have achieved at least 30% revenue increases with AI. Next, we’ve looked at the companies getting the most significant boost from AI in SEO. We’ve found that these companies are not only automating the core SEO processes but are also studying search engine AI trends and spending more on Machine Learning capabilities.
As we have seen in the past two years, the most commonly used SEO functions where AI adoption is focused are keyword research, user experience optimization, and ranking performance tracking. However, several other widespread use cases span a range of functions. For example, unlike out-of-the-box popular SAAS programs, we add more thorough analysis and customized scoring signals. In addition, all of our signals fluctuate based on Google changing algorithms and fluctuations of sites on the first page of Google.
The most successful companies spend more, but the ROI significantly increases, getting exponential revenue increases. Our SEO experts are in charge of AI-driven SEO strategies. We are slowly rolling this out to our current clients. Today, we are getting substantial lifts in visibility, traffic, leads, and revenue. In addition, clients that have implemented our methodology are far more likely to maximize their bottom line.
The demand for ML and AI in internet marketing will likely grow as machine learning systems proliferate Google’s search algorithms. We have spent two years testing and compiling results, which are significant findings. However, AI is not the end-all solution, as we still analyze every aspect of our campaigns. For example, AI is not currently used for Web Core Vitals or backlinks. Although we believe we are the best in getting sites passing for Web Core Vitals using our 25+a years of technical knowledge. If an SEO Company cant do it for their site, how can they do it for yours? Check our results as we have written several blogs on our Web Core Vitals achievements.
Implementing AI is a huge advantage, but the biggest winners will be brands that find the right balance between manual 
optimization and AI.`,

  `Garry Grant is the founder of SEOinc, an agency specializing in insights-driven internet marketing. He has over 25+ years of experience in web development and search engine optimization (SEO). Garry is also an avid public speaker who has shared his knowledge with audiences worldwide.
You must work on your SEO if you are a business owner and want the best value for your business. This is because search engine optimization (SEO) is a marketing strategy that helps increase website traffic, improve search ranking, and more online conversions. To achieve the most 
significant amount of success possible with the least amount of investment, it’s time to start looking into this effective technique that can help increase revenue and profitability.The first step to understanding your website’s performance is to create a report that identifies some key metrics. 
This report can help you better understand how users interact with your site and the overall effectiveness of your SEO efforts.
The most crucial metric is traffic, the number of individual visitors (unique IP addresses) who visit a website in a given period. The more visitors there are, the more consumers will see your business and potentially buy from you—which means more revenue!
Another essential metric is bounce rate, which measures how long visitors spend on any given page before leaving (i.e., bouncing off). A high bounce rate means users aren’t finding what they want very quickly—or even at all—and may result in lost 
sales opportunities if there isn’t enough content or information available on pages for them to stay engaged with the brand’s message long enough for conversion purposes later 
downstream from those specific pages visited by higher numbers than usual (as defined by average industry standards).`,

  `Google Analytics is a free tool that helps you see what’s going on with your web traffic. 
You can see how much time people spend on each page, where they are getting referrals to your 
website, and sometimes you can even see the keywords they used to find your site. But an often 
underused feature in Google Analytics that has tremendous value for small business owners and 
marketers: is event tracking. Let’s talk about how our SEO Services can help with your Internet 
Marketing initiatives and Google Analytics optimization. Reach out to us here.
Google Analytics Event tracking is a feature that enables you to record interactions 
with elements of your website that aren’t tracking as a standard within Google Analytics.
 You can track events manually or by using the Google Tag Manager.Check that you’ve enabled the
  correct variables selected for your event. Next, create a new tag in Google Tag Manager and change 
  the track type to the event. Next, configure your tag by adding the category, action, label, and value
   values. Finally, select the event the tag will fire on.
If you want to do this manually rather than relying on the automatic approach, you’ll add a 
custom code snippet to the link code on the items you wish to track. Then, when the item is 
clicked, the element is tracked and shows as an event in Google Analytics.
The event tracking code is made up of four elements, defined by you, to describe the user’s 
interaction with your website.`,

  `Over 80% of all websites use PHP as their programming language. Of these sites, over 97% are 
  using some version of PHP 5. Although PHP 5 was released more than a decade ago in 2006, it has 
  had many updates that have allowed it to remain in use.
We know you’ve gotten rather attached to your trusty PHP 5. Why change a good thing? After all, 
PHP 5 is plenty fast. PHP versions 5.5.0 and up have been able to take advantage of ZendOP Cache, 
a PHP accelerator that improves overall performance. But consider what you have to gain if you upgrade 
to PHP 8 as we did.
PHP 7 uses Zend Engine 3, the latest version of the open-source scripting engine used for PHP 4 and 5. 
Zend Engine 3 allows PHP 8 to boast a 200% faster code execution time and a 50% lower memory consumption rate.
Although PHP 8 is still relatively new, we’ve seen its benefits firsthand. Therefore, we highly suggest
 upgrading to experience them for yourself.
Note: Before upgrading to PHP 8, run your site through a Testing environment.
 The reason for this is to watch for any errors that may come up. You want your upgrade to go smoothly; 
 if you move forward without fixing the problems, you could be in big trouble later.`,
]

class EachBlog extends Component {
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
        <div style={{padding: '120px 30px 100px 30px'}}>
          {/* <img
            src={BlogsList[id].imgUrl}
            alt="blog"
            className="each-blog-images"
          /> */}
          <h1 className="domain-name">{BlogsList[id].domain}</h1>
          <h1 className="sectionHeading" style={{textAlign: 'left'}}>
            {BlogsList[id].Heading}
          </h1>
          <div className="profile-image-and-author-details-container">
            <img
              className="author-profile-pic"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt="author-pic"
            />
            <p className="author-name">by Shivateja - 16/01/2023</p>
          </div>
          <p className="serviceDescription" style={{width: '80vw'}}>
            {Blogparas[id].repeat(2)}
          </p>
          <div>
            <AiTwotoneLike style={{fontSize: '25px', margin: '10px'}} />
            <AiTwotoneDislike style={{fontSize: '25px', margin: '10px'}} />
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

export default EachBlog
