import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
const Spoller = ({ isMobile, title, list, onClick, selectedItemId }) => {
    const transitionWrapperRef = useRef(null);
    const { id, label } = title;
    return (
        <div className={`spoller${selectedItemId ? " _open" : ""}`}>
            {isMobile ? (
                <>
                    <div
                        className="spoller__title"
                        id={id}
                        onClick={() => {
                            onClick(id);
                        }}
                    >
                        {label}
                    </div>
                    <CSSTransition
                        in={selectedItemId}
                        timeout={200}
                        classNames="my-node"
                        mountOnEnter
                        nodeRef={transitionWrapperRef}
                    >
                        <div
                            ref={transitionWrapperRef}
                            className="transition-wrapper"
                        >
                            {selectedItemId && (
                                <ul className="spoller__list">
                                    {list.map(({ to, label }) => (
                                        <li
                                            key={to}
                                            className="spoller__paragraph"
                                        >
                                            <NavLink
                                                className="spoller__link"
                                                to={to}
                                            >
                                                {label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </CSSTransition>
                </>
            ) : (
                <>
                    <div className="spoller__title" id={id}>
                        {label}
                    </div>
                    <ul className="spoller__list">
                        {list.map(({ to, label }) => (
                            <li key={to} className="spoller__paragraph">
                                <NavLink className="spoller__link" to={to}>
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};
Spoller.propTypes = {
    isMobile: PropTypes.bool,
    title: PropTypes.object,
    list: PropTypes.array,
    onClick: PropTypes.func,
    selectedItemId: PropTypes.bool
};
export default Spoller;
