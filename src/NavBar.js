import React, { Fragment, useState } from "react";

const Navbar = ({nextList, previewList}) => {

    return (
        <Fragment>
            <button onClick={previewList}>Preview</button>
            <button onClick={nextList}>Next</button>
        </Fragment>
    )
};

export default Navbar;