import React from 'react'
import Container from '../../../components/Container/Container';
import { Link } from 'react-router-dom';
export default function Collect() {
    const collectList = [
        {
            image: '/images/home/collect-1.png',
            link: '/san-pham/62aceda45d015cc3eebdb88b',
        },
        {
            image: '/images/home/collect-2.png',
            link: '/san-pham/62aceee85d015cc3eebdb88c',
        },
        {
            image: '/images/home/collect-3.png',
            link: '/san-pham/62acefa05d015cc3eebdb88d',
        },
    ]
    return (
        <div className="w-full bg-green-4 lg:py-20">
            <Container className="sm:flex-row flex-col items-center">
                {
                    collectList.map((collect, index) => {
                        return (

                            <div key={index} className="sm:mr-10 sm:my-0 mr-0 last:mr-0 my-10 group w-full">
                                <Link to={`${collect.link}`}>
                                    <img src={`${collect.image}`} alt="collect" className="sm:h-[200px] md:h-[250px] w-full  object-contain  group-hover:scale-105 ase-in-out transition-transform duration-500" />
                                </Link>
                            </div>
                        );
                    })
                }
            </Container>
        </div>
    )
}
