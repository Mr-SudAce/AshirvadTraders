import React, { memo } from 'react'
import { UseRightLeftCard } from "../index.jsx"
const RtoLCard = memo(() => {
    return (
        <UseRightLeftCard
            heading="Dynamic Heading"
            description="This is a sample description for the right-to-left card component."
            redirectlink="/learn-more"
            imgUrl="https://picsum.photos/id/123/720"
        />
    )
});

export default RtoLCard;