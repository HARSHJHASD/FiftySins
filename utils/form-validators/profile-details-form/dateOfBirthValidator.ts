export default (dob: string) => {
    // Regular expression pattern to match yyyy-mm-dd format
    const pattern = /^\d{4}-\d{2}-\d{2}$/;

    // Check if the DOB is empty or not in the format yyyy-mm-dd
    if (!dob || !pattern.test(dob)) {
        return false;
    }

    // Parse the DOB string into a Date object
    const dobDate = new Date(dob);

    // Check if the DOB is a valid date
    if (Number.isNaN(dobDate.getTime())) {
        return false;
    }

    // Check if the DOB is in the past
    if (dobDate > new Date()) {
        return false;
    }

    // Return true if the DOB passes all checks
    return true;
};
