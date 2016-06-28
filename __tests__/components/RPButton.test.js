jest.mock('../../src/components/styles/RPButton.css')
jest.unmock('../../src/components/RPButton')

import React from 'react'
import { spy } from 'sinon'
import { findDOMNode } from 'react-dom'
import {
  renderIntoDocument,
  Simulate
} from 'react-addons-test-utils'

import RPButton from '../../src/components/RPButton'

const createRPButton = props => renderIntoDocument(<RPButton {...props} />)

describe('RPButton', () => {
  it('should have an initial state', () => {
    const props = {
      children: 'Hello',
      action: () => {}
    }
    const button = createRPButton(props)

    expect(button.state.hovered).toEqual(false)
  })

  it('should properly render a string as its child', () => {
    const props = {
      children: 'Hello',
      action: () => {}
    }

    const button = createRPButton(props)
    const buttonNode = findDOMNode(button)

    expect(buttonNode.textContent).toEqual(props.children)
  })

  it('should properly render an element as its child', () => {
    const children = React.createElement('div', null, 'hello')

    const props = {
      children,
      action: () => {}
    }

    const button = createRPButton(props)
    expect(button.props.children).toEqual(<div>hello</div>)
  })

  describe('hovered', () => {
    let button, clickAction

    beforeEach(() => {
      clickAction = spy()
      const props = {
        children: ({hovered}) => (<div>{hovered}</div>),
        action: clickAction
      }

      button = createRPButton(props)
    })

    it('should set hovered to true when the mouse enters', () => {
      button.hoverStart()
      expect(button.state.hovered).toEqual(true)
    })

    it('should set hovered to false when the mouse exits', () => {
      button.hoverEnd()
      expect(button.state.hovered).toEqual(false)
    })

    it('should pass the hovered state to its children', () => {
      button.hoverStart()
      expect(button.state.hovered).toEqual(true)
    })

    it('should call the onClick action', () => {
      const buttonNode = findDOMNode(button)
      Simulate.click(buttonNode)

      expect(clickAction.called).toEqual(true)
    })
  })
})
