import React from 'react'
import { Parallax, Background } from 'react-parallax';


export const ParallaxSingle = ({staticContent, motionContent}) => (
    <div>
        <Parallax strength={300}>
            <div>{motionContent}</div>
            <Background className="custom-bg">
                {staticContent}
            </Background>
        </Parallax>
    </div>
)

export const ParallaxFilter = (img, content) => (
    <Parallax
    blur={10}
    bgImage={img}
    bgImageAlt="the cat"
    strength={200}
>
    Put some text content here - even an empty div with fixed dimensions to have a height
    for the parallax.
    <div style={{ height: '200px' }} />
</Parallax>
)