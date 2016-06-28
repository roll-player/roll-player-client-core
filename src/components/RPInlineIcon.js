import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles/RPInlineIcon.css'

class RPInlineIcon extends React.Component {
  render () {
    let { children, icon, iconSize } = this.props

    return (
      <div styleName='container'>
        <div styleName={iconSize}>
          {icon}
        </div>
        {children}
      </div>
    )
  }
}

RPInlineIcon.propTypes = {
  icon: React.PropTypes.element.isRequired,
  iconSize: React.PropTypes.oneOf(['small', 'medium', 'large']),
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string
  ]).isRequired
}

RPInlineIcon.defaultProps = {
  iconSize: 'medium'
}

export default CSSModules(RPInlineIcon, styles)
