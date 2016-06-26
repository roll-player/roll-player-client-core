jest.mock('../../src/components/styles/RPButton.css')
jest.unmock('../../src/components/RPButton')

import React from 'react'
import { findDOMNode } from 'react-dom'
import { renderIntoDocument } from 'react-addons-test-utils'

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

  it("should properly render a string as it's child", () => {
    const props = {
      children: 'Hello',
      action: () => {}
    }

    const button = createRPButton(props)
    const buttonNode = findDOMNode(button)

    expect(buttonNode.textContent).toEqual(props.children)
  })
})
