import { message as snackbar } from 'antd';

// these are custom snackbar messages
const showSuccessSnackbar = (message: string) => {
    snackbar.success(message);
};
const showErrorSnackbar = (message: string) => {
    snackbar.error(message);
};
const showWarningSnackbar = (message: string) => {
    snackbar.warning(message);
};
const showInfoSnackbar = (message: string) => {
    snackbar.info(message);
};
export default (type: string, content: string) => {
    switch (type) {
        case 'success':
            showSuccessSnackbar(content);
            break;
        case 'error':
            showErrorSnackbar(content);
            break;
        case 'warning':
            showWarningSnackbar(content);
            break;
        case 'info':
            showInfoSnackbar(content);
            break;
        default:
            showInfoSnackbar(content);
            break;
    }
};
