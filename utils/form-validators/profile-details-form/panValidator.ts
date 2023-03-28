export default (pan: string) => {
    // Regular expression pattern to match PAN format
    const pattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    // check if the PAN is empty or not in the format A-Z 0-9
    if (!pan || !pattern.test(pan)) {
        return false;
    }
    return true;
};
