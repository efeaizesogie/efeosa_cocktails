import React from 'react'

const Menu = () => {
    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="m-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="m-right-leaf" />

            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>
        </section>
    )
}
export default Menu
