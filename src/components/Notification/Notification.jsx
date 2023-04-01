import PropTypes from 'prop-types';
import style from './Notification.module.css';

export const Notification = ({message}) => {
    return (
        <p className={style.message}>{message}</p>
    )
}

Notification.protoType = {
    message: PropTypes.string.isRequired,
}