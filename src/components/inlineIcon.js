import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles/inlineIcon.css'

class InlineIcon extends React.Component {
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

InlineIcon.propTypes = {
  icon: React.PropTypes.element.isRequired,
  iconSize: React.PropTypes.oneOf(['small', 'medium', 'large']),
  children: React.PropTypes.element.isRequired
}

InlineIcon.defaultProps = {
  iconSize: 'medium'
}

export default CSSModules(InlineIcon, styles)
