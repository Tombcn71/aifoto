"use client"
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import Image from 'next/image'
export default () => {

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slides: {
                perView: 5,
            },
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )


    return (
        <div ref={sliderRef} className="keen-slider sm-text-center">
            <div className="keen-slider__slide"><Image
                alt="Original photo of a room with roomGPT.io"
                src="/first.jpg"
                className=" h-35 "
                width={200}
                height={200}
                priority
            /></div>
            <div className="keen-slider__slide"><Image
                alt="Original photo of a room with roomGPT.io"
                src="/second.jpg"
                className=" h-35 "
                width={200}
                height={200}
                priority
            /></div>
            <div className="keen-slider__slide"><Image
                alt="Original photo of a room with roomGPT.io"
                src="/third.jpg"
                className=" h-35 "
                width={200}
                height={200}
                priority
            /></div><div className="keen-slider__slide"><Image
                alt="Original photo of a room with roomGPT.io"
                src="/fourth.jpg"
                className=" h-35 "
                width={200}
                height={200}
                priority
            /></div>
            <div className="keen-slider__slide"><Image
                alt="Original photo of a room with roomGPT.io"
                src="/fifth.jpg"
                className=" h-35 "
                width={200}
                height={200}
                priority
            /></div> <div className="keen-slider__slide"><Image
                alt="Original photo of a room with roomGPT.io"
                src="/fifth.jpg"
                className=" h-35 "
                width={200}
                height={200}
                priority
            /></div>





        </div>
    )
}