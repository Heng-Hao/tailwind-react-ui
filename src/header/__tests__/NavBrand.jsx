import React from 'react'
import { shallow } from 'enzyme'

import { component as NavBrand } from '../NavBrand'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(<NavBrand {...props}>Tailwind React</NavBrand>)

  return {
    props,
    wrapper,
  }
}

describe('NavBrand', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
