import React from 'react'

const Footer = () => {
    return (
        <section id="contact">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="f-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="f-right-leaf" />

            <div className="content">
                <h2>
                    Where to Find Us
                </h2>

                <div>
                    <h3 >
                        Visit our store
                    </h3>
                    <p>
                        456, Raq Blvd. #404, Los Angeles, CA 90210
                    </p>
                </div>
                <div>
                    <h3 >
                        Contact us
                    </h3>
                    <p>
                        (555) 987-6543
                    </p>
                    <p>
                         hello@jsmcocktail.com
                    </p>
                </div>
                <div>
                    <h3 >
                        Open every day
                    </h3>
                    <p>
                        Mon-Thu : 11:00am - 12am <br/> Fri : 11:00am - 2am <br/> Sat : 9:00am - 2am <br/> Sun : 9:00am - 1 am
                    </p>
                </div>
                <div>
                    <h3 >
                        Socials
                    </h3>

                </div>
            </div>

            <img src='/images/footer-drinks.png' alt="drinks" className="drink-img" />
        </section>
    )
}
export default Footer
