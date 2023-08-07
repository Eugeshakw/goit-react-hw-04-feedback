import React from "react";
import PropTypes from 'prop-types';
const Notifications = ({message})=> {
    return <p>{message}</p>
}

export default Notifications;

Notifications.propTypes={
    message: PropTypes.string.isRequired,
}
