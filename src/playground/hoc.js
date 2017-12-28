import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponet) => {
    return (props) => (
        <div>
            {props.idAdmin &&<p>This is private info. please don't share </p>}
            <WrappedComponet {...props} />
        </div>
    );
};  

const requireAthentication = (WrappedComponet) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponet {...props}/>
            ) : (
                <p>please Login to viwe info</p>
            )}
        </div>
    );
};
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" /> , document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" /> , document.getElementById('app'));