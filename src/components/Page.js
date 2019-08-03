import Components from './index'
import SbEditable from 'storyblok-react'
import React  from 'react'

export default (props) => (
  <SbEditable content={props.content}>
    <div>
      {props.content.body.map((blok) =>
        Components(blok)
      )}
    </div>
    <div className="grid">
      {props.content.teasered_products.map((product, index) =>
        <div key={index}
             className="column feature">
          <img src={product.content.image} alt={product.content.name} />
          {product.content.name}
        </div>
      )}
    </div>
  </SbEditable>
)
