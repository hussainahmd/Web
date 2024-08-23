import React, { ReactNode } from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'

type ButtonProps = {
    children: ReactNode
    className: string
    href: string
    white: boolean
    px: string
}
const Button = ({ children, href, white, px, className }: ButtonProps) => {

    const classes = `button relative infline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`

    const spanClasses = 'relative z-10'

    const renderButton = () => (
        <button className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    )

    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>

    )

    return href ? renderLink() : renderButton()
    return (
        <div>
            <h1>Button</h1>
            {children}
        </div>
    )
}

export default Button