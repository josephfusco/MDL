import React from 'react'
import { mount } from 'enzyme'
import { JSDOM } from 'jsdom'
import Toggle from './react'

const jsdom = new JSDOM('<!doctype html><html><body><div id="app">Mount here</div></body></html>')
const { window } = jsdom

describe('Toggle', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      checked: jest.fn(),
      onChange: jest.fn(),
      onSearch: jest.fn(),
      value: '',
      name: 'toggle'
    }

    wrapper = mount(<Toggle {...props} />, {
      attachTo: window.document.querySelector('#app'),
    })
  })

  describe('with snapshots', () => {
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('with user actions', () => {
    it('should display when clicking the toggle button', () => {
      console.log(props);
      wrapper.find('input').simulate('click')
      expect(wrapper.find('input').prop('value')).toEqual(true)
    })
  })
})
