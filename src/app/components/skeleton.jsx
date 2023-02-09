import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
    <ContentLoader
        speed={2}
        width={400}
        height={412}
        viewBox="0 0 400 450"
        backgroundColor="#fde9ce"
        foregroundColor="#ffffff"
    >
        <circle cx="157" cy="126" r="91" />
        <rect x="47" y="218" rx="7" ry="7" width="191" height="24" />
        <rect x="53" y="254" rx="5" ry="5" width="181" height="15" />
        <rect x="33" y="275" rx="15" ry="15" width="218" height="70" />
        <rect x="31" y="361" rx="15" ry="15" width="61" height="46" />
        <rect x="124" y="356" rx="15" ry="15" width="130" height="48" />
    </ContentLoader>
);

export default Skeleton;
