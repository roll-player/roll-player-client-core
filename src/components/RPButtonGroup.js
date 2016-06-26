import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles/RPButtonGroup.css'

class RPButtonGroup extends React.Component {
  render () {
    let { children, direction } = this.props

    let buttons = React.Children.map(children, child => {
      return (
        <div className={this.props.styles[`${direction}Margin`]}>{child}</div>
      )
    })

    return (
      <div styleName={direction}>
        {buttons}
      </div>
    )
  }
}

RPButtonGroup.propTypes = {
  direction: React.PropTypes.oneOfType(['horizontal', 'vertical'])
}

RPButtonGroup.defaultProps = {
  direction: 'horizontal'
}

export default CSSModules(RPButtonGroup, styles)
