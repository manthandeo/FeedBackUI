import React from 'react'
import  PropTypes from 'prop-types';


export default function Button({children,version,type,isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps={
    version:'Primary',
    type:'button',
    isDisabled:false,

}

Button.propTypes={
    children: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
}