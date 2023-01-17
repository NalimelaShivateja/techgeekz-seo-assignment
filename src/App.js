import {Switch, BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import PaymentsPage from './components/PaymentsPage'
import ScrollToTop from './components/ScrollToTop'
import EachService from './components/EachService'
import PricingRoute from './components/PricingRoute'
import AllServices from './components/AllServices'
import AllBlogs from './components/AllBlogs'
import ContactUs from './components/ContactUs'
import EachBlog from './components/EachBlog'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={AllServices} />
        <Route exact path="/services/:id" component={EachService} />
        <Route exact path="/pricing" component={PricingRoute} />
        <Route exact path="/purchase-plans/:id" component={PaymentsPage} />
        <Route exact path="/blogs" component={AllBlogs} />
        <Route exact path="/blogs/:id" component={EachBlog} />
        <Route exact path="/contact" component={ContactUs} />
        <Route component={NotFound} />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
)

export default App
