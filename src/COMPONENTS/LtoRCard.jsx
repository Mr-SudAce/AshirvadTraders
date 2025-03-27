import React, { memo } from 'react';
import { UseLeftRightCard } from "../index.jsx";
const LtoRCard = memo(() => {
    return (
        <UseLeftRightCard
            heading="Dynamic Heading"
            description="This is a sample description for the left-to-right card component."
            redirectlink="/learn-more"
            imgUrl="https://picsum.photos/id/123/720"
        />
    );
});

export default LtoRCard;
