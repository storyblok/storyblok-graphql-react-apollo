import SbEditable from 'storyblok-react'
import React  from 'react'

export default (props) => (
  <SbEditable content={props.content}>
    <div className="column feature">
      {props.content.name}
    </div>
  </SbEditable>
)
