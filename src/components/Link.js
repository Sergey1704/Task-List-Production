import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
    <div className="flat-radio-item">
        <input id={children}
            name="filter-radio"
            type="radio"
            onClick={onClick}
            defaultChecked={active}
            style={{ cursor: 'pointer' }}
        />
        <label htmlFor={children}>
            {children}
        </label>
    </div>
)

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link
