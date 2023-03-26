import { useEffect } from "react";
import { OverlayScrollbars } from "overlayscrollbars";

const useScrollbar = (root) => {
    useEffect(() => {
        let scrollbars;

        if (root.current) {
            scrollbars = OverlayScrollbars(root.current, {});
        }

        return () => {
            if (scrollbars) {
                scrollbars.destroy();
            }
        };
    }, [root]);
};

export { useScrollbar };
