import React from 'react'

import { Image, Reveal } from 'semantic-ui-react'

const UnitImage = () => (
    <div>

        <Reveal animated='move left' >
            <Reveal.Content visible>
                <Image src='https://media.bloomsbury.com/rep/bj/9780747583622.jpg' fluid rounded />
            </Reveal.Content>
            <Reveal.Content hidden>

                <div>
                    “I therefore claim to show, not how men think in myths, but how myths operate in men’s minds without their being aware of the fact.”
                    <p>– Claude Levi-Strauss</p>
                </div>


            </Reveal.Content>
        </Reveal>
    </div>
)




export default UnitImage
