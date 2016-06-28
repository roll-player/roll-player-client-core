jest.mock('../../src/components/styles/RPButtonGroup.css')
jest.unmock('../../src/components/RPButtonGroup')

import React from 'react'
import { spy } from 'sinon'
import { shallow } from 'enzyme'

import RPButtonGroup from '../../src/components/RPButtonGroup'
import RPButton from '../../src/components/RPButton'

describe('RPButtonGroup', () => {
  it('should render its children', () => {
    const buttonGroup = shallow(
      <RPButtonGroup>
        <RPButton>Hello</RPButton>
        <RPButton>Hello Again</RPButton>
      </RPButtonGroup>
    )

    expect(buttonGroup.find(RPButton).length).toEqual(2)
  })

  it('should default to horizontal layout', () => {
    const buttonGroup = shallow(
      <RPButtonGroup>
        <RPButton action={spy}>Hello</RPButton>
        <RPButton action={spy}>Hello Again</RPButton>
      </RPButtonGroup>
    )

    expect(buttonGroup.find('.horizontal')).not.toBeNull()
  })

  it('should use the passed in layout direction', () => {
    const buttonGroup = shallow(
      <RPButtonGroup direction='vertical'>
        <RPButton action={spy}>Hello</RPButton>
      </RPButtonGroup>
    )

    expect(buttonGroup.find('.vertical')).not.toBeNull()
  })

  it('should put the children into the wrapper', () => {
    const buttonGroup = shallow(
      <RPButtonGroup direction='vertical'>
        <RPButton action={spy}>Hello</RPButton>
        <RPButton action={spy}>Hello</RPButton>
      </RPButtonGroup>
    )

    const wrapper = buttonGroup.find('.vertical')
    expect(wrapper.find(RPButton).length).toEqual(2)
  })

  it('should wrap the children with a margin class', () => {
    const buttonGroup = shallow(
      <RPButtonGroup direction='vertical'>
        <RPButton action={spy}>Hello</RPButton>
        <RPButton action={spy}>Hello</RPButton>
      </RPButtonGroup>
    )

    expect(buttonGroup.find('.verticalMargin').length).toEqual(2)
  })
})
