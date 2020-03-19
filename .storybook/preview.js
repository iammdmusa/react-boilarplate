import '../styles/index.css'
import { addParameters, addDecorator } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import PreviewContainer from './PreviewContainer'

addDecorator(storyFn => <PreviewContainer>{storyFn()}</PreviewContainer>)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})
