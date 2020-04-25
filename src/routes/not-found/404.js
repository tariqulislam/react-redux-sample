import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ justifyContent: 'center', padding: '5%' }}>
            <div>
                <div className="content">
                    <div className="header">
                        Are you lost?
                    </div>
                    <div className="description">
                        You seem to be somewhere we don't want you to be. Restart your journey &nbsp;
                        <Link to="/">here.</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {
    NotFound as default
}