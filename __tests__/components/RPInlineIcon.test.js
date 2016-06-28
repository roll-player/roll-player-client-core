jest.mock('../../src/components/styles/RPInlineIcon.css')
jest.unmock('../../src/components/RPInlineIcon')

import React from 'react'
import { shallow } from 'enzyme'
import RPInlineIcon from '../../src/components/RPInlineIcon'

describe('RPInlineIcon', () => {
  describe('icon', () => {
    it('should wrap the icon in the correct size', () => {
      const control = shallow(
        <RPInlineIcon icon={<div>Hello</div>} iconSize={'small'}>
          Text
        </RPInlineIcon>
      )

      const icon = control.find('.small')
      expect(icon.length).toEqual(1)
      expect(icon.contains(<div>Hello</div>)).toEqual(true)
    })

    it('should use the default to the default props size', () => {
      const control = shallow(
        <RPInlineIcon icon={(<div>Hello</div>)}>
          Text
        </RPInlineIcon>
      )

      const icon = control.find(`.${RPInlineIcon.defaultProps.iconSize}`)
      expect(icon.contains(<div>Hello</div>)).toEqual(true)
    })
  })

  describe('children', () => {
    it('should render a string', () => {
      const control = shallow(
        <RPInlineIcon icon={(<div>Hello</div>)}>
          Text
        </RPInlineIcon>
      )

      expect(control.contains('Text')).toEqual(true)
    })

    it('should render an element', () => {
      const control = shallow(
        <RPInlineIcon icon={(<div>Hello</div>)}>
          <div>This is a Child</div>
        </RPInlineIcon>
      )

      expect(control.contains(<div>This is a Child</div>)).toEqual(true)
    })
  })
})
