import Header from '../Header'
import FooterSection from '../FooterSection'
import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="not-found-main-container">
      <h1 className="error-code">404</h1>
      <h1 className="status-code">PAGE NOT FOUND</h1>
      <p className="msg">
        Sorry, we could not find the page you are looking for.
      </p>
    </div>
    <FooterSection />
  </div>
)

export default NotFound
