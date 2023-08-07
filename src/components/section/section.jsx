import React from "react"
import PropTypes from 'prop-types';
const Section = ({tittle, children}) => {
    return (
        <>
        <h2>{tittle}</h2>
         {children}
        </>
    )
}


export default Section;

Section.propTypes={
    tittle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}