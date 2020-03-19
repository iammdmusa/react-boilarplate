import React from 'react'
import Navigation from '../src/components/Navigation/index'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Navigation',
  component: Navigation,
  decorators: [withKnobs, storyFn => <div>{storyFn()}</div>]
}

export const NavigationDefault = () => <Navigation />
