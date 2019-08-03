import Components from './index'
import SbEditable from 'storyblok-react'
import React  from 'react'

export default (props) => (
  <SbEditable content={props.content}>
    <div className="grid">
      {props.content.columns.map((blok) =>
        Components(blok)
      )}
    </div>
  </SbEditable>
)
