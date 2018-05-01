import React from 'react';

import WorkItem from '../molecules/WorkItem/WorkItemComponent';
import WorkHeading from '../atoms/WorkHeading/WorkHeadingComponent';

class Work extends React.Component {
    componentWillMount() {
        document.title = 'Maxwell Lynn - Work'
    }    
    
    render() {
        return (
            <React.Fragment>
                <WorkHeading></WorkHeading>
                <WorkItem></WorkItem>
            </React.Fragment>
        );
    }
}

export default Work;