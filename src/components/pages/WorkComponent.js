import React from 'react';

import PortfolioItem from '../molecules/portfolio-item/PortfolioItemComponent';
import WorkHeading from '../atoms/WorkHeading/WorkHeadingComponent';

const Work = () => {
    return (
        <React.Fragment>
            <WorkHeading></WorkHeading>
            <PortfolioItem></PortfolioItem>
            <PortfolioItem></PortfolioItem>
        </React.Fragment>
    );
}

export default Work;