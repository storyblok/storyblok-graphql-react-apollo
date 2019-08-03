import SbEditable from 'storyblok-react'
import React  from 'react'

export default (props) => (
  <SbEditable content={props.content}>
    <div className="teaser">
      {props.content.headline}
    </div>
  </SbEditable>
)
