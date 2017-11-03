import React from 'react'

import BrainTools from './BrainTools'

const title = 'Brain Hacking Automation Tools'

function action() {
  return {
    chunks: ['brainTools'],
    title,
    path: '/tools',
    description:
      'Hack your brain with an internet connection and a small screen',
    component: (
      <BrainTools title={title} />
    ),
  }
}

export default action
