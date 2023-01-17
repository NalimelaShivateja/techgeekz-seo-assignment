import {Component} from 'react'
import './index.css'
import {BiRightArrowAlt} from 'react-icons/bi'

// const triggerOnClick = () => {
//   window.scroll({
//     bottom: document.body.scrollHeight, // or document.scrollingElement || document.body
//     left: 0,
//     behavior: 'smooth',
//   })
// }

const scrollToBottom = () => {
  window.scrollTo(0, 700)
}

const tempList = ['Traffic', 'Revenue', 'Leads']
let x = 0

class IntroBlock extends Component {
  state = {changingCaption: 'Traffic'}

  componentDidMount() {
    this.changeCaptions()
  }

  changeCaptions = () => {
    setInterval(() => {
      if (x + 1 === 3) {
        x = 0
      } else {
        x += 1
      }
      this.setState({changingCaption: [tempList[x]]})
    }, 1500)
  }

  render() {
    const {changingCaption} = this.state
    return (
      <div className="intro-block">
        <h1 className="intro-title">
          We Generate More <br />
          <span style={{color: '#E12F47'}}>{changingCaption}</span>
        </h1>
        <p className="intro-para">
          An SEO Company , Creating Custom SEO Services , <br />
          PPC Management And Internet Marketing Services Since 1997
        </p>
        <button
          type="button"
          className="get-started-button"
          onClick={scrollToBottom}
        >
          Get Started
          <BiRightArrowAlt style={{marginBottom: '5px', fontSize: '20px'}} />
        </button>
      </div>
    )
  }
}

export default IntroBlock
