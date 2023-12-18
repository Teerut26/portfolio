import React from 'react'

export default function FooterCopy() {
    return (
        <div className="flex gap-2">
            <div>&copy; {new Date().getFullYear()}</div>
            <div>-</div>
            <div>Teerut Portfolio</div>
        </div>
    )
}
