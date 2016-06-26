jest.mock('../../src/components/styles/app.css')
jest.unmock('../../src/components/app')

import React from 'react'
import { findDOMNode } from 'react-dom'
import { renderIntoDocument } from 'react-addons-test-utils'

import App from '../../src/components/app'

const createApp = () => renderIntoDocument(<App />)
describe('App', () => {
  it('renders something', () => {
    const app = createApp()
    const appNode = findDOMNode(app)

    expect(appNode.textContent).not.toBeNull()
  })
})
