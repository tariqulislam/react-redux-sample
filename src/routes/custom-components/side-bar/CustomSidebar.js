import React from 'react';
import './CustomSidebar.css';

const CustomSidebar = ({children}) => {
    return (
        <div className="sidebar">
            {
                children.map((kid, serial) => {
                    return(
                        <div key={serial}>
                            {kid}
                        </div>
                    );
                })
            }
        </div>
    )
};

export {
    CustomSidebar as default
}
