export default (ifsc: string) => {
    // Regular expression pattern to match IFSC format
    const pattern = /^[A-Za-z]{4}\d{7}$/;
    // check if the IFSC is empty or not in the format a-z or A-Z and 0-9 and length of 11
    if (!ifsc || !pattern.test(ifsc)) {
        return false;
    }
    return true;
};
