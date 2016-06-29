jest.mock('../../src/components/styles/RPButton.css')
jest.unmock('../../src/components/RPButton')

import React from 'react'
import { spy } from 'sinon'
import { shallow } from 'enzyme'
import RPButton from '../../src/components/RPButton'

const createRPButton = props => shallow(<RPButton {...props} />)

const getChildFromWrapper = node => node.children('.wrapper').children()

describe('RPButton', () => {
  it('should have an initial state', () => {
    const props = {
      children: 'Hello',
      action: spy()
    }
    const button = createRPButton(props)
    expect(button.state('hovered')).toEqual(false)
  })

  it('should properly render a string as its child', () => {
    const props = {
      children: 'Hello',
      action: spy()
    }

    const button = createRPButton(props)
    expect(button.contains(props.children)).toEqual(true)
  })

  it('should properly render an element as its child', () => {
    const children = (<div className='child' />)

    const props = {
      children,
      action: spy()
    }

    const button = createRPButton(props)
    const grandChild = getChildFromWrapper(button)

    // since we wrap the child in a container to handle positioning
    // we should look at known properties on the child, since it
    // won't be exactly identical to the child we render in
    expect(grandChild.props().className).toEqual('child')
  })

  it('it should set the disabled state', () => {
    const button = createRPButton({
      children: 'Hello',
      action: spy(),
      disabled: true
    })

    expect(button.props().disabled).toEqual(true)
  })

  describe('styling', () => {
    it('should set the correct size state', () => {
      const button = createRPButton({
        children: 'Hello',
        action: spy(),
        size: 'small'
      })

      expect(button.props().className).toEqual('small')
    })
  })

  describe('hovered', () => {
    let button, action

    beforeEach(() => {
      action = spy()
      const children = (<div className='child'>Hello</div>)
      const props = {
        children,
        action
      }

      button = createRPButton(props)
    })

    it('should set hovered to true when the mouse enters', () => {
      button.simulate('mouseEnter')
      expect(button.state('hovered')).toEqual(true)
    })

    it('should set hovered to false when the mouse exits', () => {
      button.simulate('mouseLeave')
      expect(button.state('hovered')).toEqual(false)
    })

    it('should pass the hovered state to its children', () => {
      button.simulate('mouseEnter')
      expect(getChildFromWrapper(button).props().hovered).toEqual(true)

      button.simulate('mouseLeave')
      expect(getChildFromWrapper(button).props().hovered).toEqual(false)
    })

    it('should call the onClick action', () => {
      button.simulate('click')
      expect(action.called).toEqual(true)
    })

    it('should append Hovered style', () => {
      const button = createRPButton({
        children: 'Hello',
        action: spy(),
        size: 'small'
      })

      button.simulate('mouseEnter')
      expect(button.props().className).toEqual('smallHovered')
    })

    it('should remove the Hovered append', () => {
      const button = createRPButton({
        children: 'Hello',
        action: spy(),
        size: 'small'
      })

      button.simulate('mouseEnter')
      button.simulate('mouseLeave')
      expect(button.props().className).toEqual('small')
    })
  })
})
