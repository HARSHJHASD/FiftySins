export default (name: string) => {
    // Regular expression pattern to match email format
    const pattern = /^[a-zA-Z\s]+$/;
    // check if the name is empty or not in the format a-z or A-Z
    if (!name || !pattern.test(name)) {
        return false;
    }
    return true;
};
