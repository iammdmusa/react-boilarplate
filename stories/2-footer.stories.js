import React from 'react'
import Footer from '../src/components/Footer'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Footer',
  component: Footer,
  decorators: [withKnobs, storyFn => <div>{storyFn()}</div>]
}

export const FooterDefault = () => <Footer onClick={action('onClick')} />
