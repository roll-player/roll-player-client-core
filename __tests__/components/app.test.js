jest.mock('../../src/components/styles/app.css')
jest.unmock('../../src/components/app')

import React from 'react'
import { shallow } from 'enzyme'

import App from '../../src/components/app'

describe('App', () => {
  it('renders some content', () => {
    const app = shallow(<App />)
    expect(app).not.toBeNull()
  })
})
