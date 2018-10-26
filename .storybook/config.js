import React from 'react'
import { configure, addDecorator } from '@storybook/react'

import '../public/assets/css/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import '../public/assets/css/fontawesome-all.css'
import '../public/assets/css/main.css'
import Container from './StoryContainer'

addDecorator(story => <Container story={story} />)

function loadStories () {
  require('../src/stories')
}

configure(loadStories, module)
