import React from 'react';
import classes from './NotFound.module.css'
const NotFound = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className={classes['error-template']}>
                    <h1>Oops!</h1>
                    <h2>
                        404 Not Found</h2>
                    <div>
                        Sorry, an error has occured, Requested page not found!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;