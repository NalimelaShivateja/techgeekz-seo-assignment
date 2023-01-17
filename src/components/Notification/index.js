import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'

class Notification extends Component {
  render() {
    const {children} = this.props
    return (
      <div>
        {children}
        <GrFormClose />
      </div>
    )
  }
}

export default Notification
