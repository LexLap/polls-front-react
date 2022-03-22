import React from 'react';

const NavBar = (props) => {

    return(
        <div id="nav-container">

            <div className={props.currentPage > 1?"button": "button disabled"}
                onClick={()=>{
                    if(props.currentPage > 1) props.setCurrentPage(props.currentPage - 1)
                }}
                >
                Prev
            </div>

            <div className={props.pollsData.complete? "button disabled":"button"}
                onClick={()=>{
                    if(!props.pollsData.complete) props.setCurrentPage(props.currentPage + 1)
                }}
            >
                Next
            </div>

        </div>
    );
};

export default NavBar;