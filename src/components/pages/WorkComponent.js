import React from 'react';

import WorkItem from '../molecules/WorkItem/WorkItemComponent';
import WorkHeading from '../atoms/WorkHeading/WorkHeadingComponent';

const Work = () => {
    return (
        <React.Fragment>
            <WorkHeading></WorkHeading>
            <WorkItem></WorkItem>
        </React.Fragment>
    );
}

export default Work;