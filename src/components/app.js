import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles/app.css'
import RPButton from './RPButton'
import RPButtonGroup from './RPButtonGroup'
import InlineIcon from './inlineIcon'

class App extends React.Component {
  render () {
    let clickAction = () => {
      window.alert('you clicked me!')
    }

    let nestedContent = (
      <InlineIcon icon={(<img src='https://placehold.it/40/40' />)}>
        <span>Roll</span>
      </InlineIcon>
    )

    let NestedHoveredContent = ({ hovered }) => {
      let text = hovered ? 'isHovered' : 'notHovered'
      return (
        <div>
          {text}
        </div>
      )
    }

    let disabled = true

    // I'd like to somehow make the item's self documenting
    return (
      <div>
        <h1>Roll Player Button</h1>
        <p styleName='section'>Buttons can have different sizes</p>
        <div styleName='example'>
          <RPButtonGroup>
            <RPButton size='small' action={clickAction}>small</RPButton>
            <RPButton size='medium' action={clickAction}>medium</RPButton>
            <RPButton size='large' action={clickAction}>large</RPButton>
          </RPButtonGroup>
        </div>
        <p styleName='section'> Buttons can contain other elements</p>
        <div styleName='example'>
          <RPButton size='large' action={clickAction}>
            {nestedContent}
          </RPButton>
        </div>
        <p styleName='section'> Buttons send hovered to the child as a prop </p>
        <div styleName='example'>
          <RPButton size='large' action={clickAction}>
            <NestedHoveredContent />
          </RPButton>
        </div>
        <p styleName='section'> Buttons can be disabled </p>
        <div styleName='example'>
          <RPButton action={clickAction} disabled={disabled}>
            Disabled
          </RPButton>
        </div>
      </div>
    )
  }
}

export default CSSModules(App, styles)
