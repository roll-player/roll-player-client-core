import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles/RPButton.css'

class RPButton extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hovered: false
    }
  }

  hoverStart () {
    this.setState({hovered: true})
  }

  hoverEnd () {
    this.setState({hovered: false})
  }

  renderChildren (props) {
    let { children } = props

    let newProps = { hovered: this.state.hovered }

    // it feels like there should be an easier way to do this
    let passed = React.Children.map(children, child => {
      if (typeof (child) !== 'string') {
        return React.cloneElement(child, newProps)
      }
      return React.createElement('span', newProps, child)
    })

    return (
      <div className={props.styles.wrapped}>
        {passed}
      </div>
    )
  }

  render () {
    let { action, disabled, size } = this.props
    let sizeStyle = `${size}${this.state.hovered ? 'Hovered' : ''}`
    let children = this.renderChildren(this.props)

    return (
      <button
        styleName={sizeStyle}
        disabled={disabled}
        onClick={action}
        onMouseEnter={this.hoverStart.bind(this)}
        onMouseLeave={this.hoverEnd.bind(this)}>
        {children}
      </button>
    )
  }
}

RPButton.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]).isRequired,
  action: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool,
  size: React.PropTypes.oneOf(['small', 'medium', 'large'])
}

RPButton.defaultProps = {
  size: 'medium'
}

export default CSSModules(RPButton, styles)
