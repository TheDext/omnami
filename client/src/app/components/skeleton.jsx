import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
    <ContentLoader
        className="skeleton"
        speed={2}
        width="100%"
        // height={427}
        backgroundColor="#f3f3f3"
    >
        {/* <rect x="0" y="0" rx="24" ry="24" width="100%" height="427" /> */}
        <rect x="0" y="0" width="100%" className="skeleton__body"/>
    </ContentLoader>
);

export default Skeleton;
