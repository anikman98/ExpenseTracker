import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react' 

const Pagination = ({links}) => {
  return (
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            {
                links.map((link, index) => {
                    return (
                        <li key={index} className={`page-item ${link.url === null && "disabled"} ${link.active && "active"}`}>
                            <InertiaLink className='page-link' href={link.url || "#"}>
                                    {link.label === "&laquo; Previous" ? "Previous" : (link.label === "Next &raquo;" ? "Next" : link.label)}
                            </InertiaLink>
                        </li>
                    )
                })
            }
            
        </ul>
    </nav>
  )
}

export default Pagination
