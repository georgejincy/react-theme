import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button, Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('React-demo', module)
  .add('Button with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('Button with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
