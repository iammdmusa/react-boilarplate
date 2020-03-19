import React from 'react'
import Layout from '../src/components/Layout/index'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Layout',
  component: Layout,
  decorators: [withKnobs, storyFn => <div>{storyFn()}</div>]
}

export const NavigationDefault = () => (
  <>
    <Layout>
      <div className='container'>
        <div className='p-6'>
          <h1 className='text-4xl'>Welcome to Layout </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            assumenda fugit ex dolore dolor saepe doloribus aspernatur, nihil
            nisi atque, voluptatem in magnam corporis? Obcaecati, itaque. Harum
            alias repudiandae debitis.
          </p>
        </div>
      </div>
    </Layout>
  </>
)
