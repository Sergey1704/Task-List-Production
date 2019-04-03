import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
    <div className="flat-radio-container">
        <div className="flat-radio blue">
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>
             All
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
             Active
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
             Completed
            </FilterLink>
        </div>
    </div>
)

export default Footer
