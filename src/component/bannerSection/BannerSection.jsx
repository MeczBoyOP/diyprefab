import React from 'react'

import ImagePath from '../../assets/ImagePath'
import { Container } from 'reactstrap'

const BannerSection = ({ title, description }) => {
    return (
        <div className="banner-pattern-wrapper">
            <Container>
                <div className="banner-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </Container>
        </div>
    )
}

export default BannerSection