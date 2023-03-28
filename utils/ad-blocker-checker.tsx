export default function AdBlockerCheck() {
    const isAdBlockerActive = () => {
        const testElement = document.createElement('div');
        testElement.innerHTML = '&nbsp;';
        testElement.className = 'adsbox';

        document.body.appendChild(testElement);
        const isBlocked = testElement.offsetHeight === 0;

        document.body.removeChild(testElement);
        return isBlocked;
    };

    const isPopupBlockerActive = () => {
        const testWindow = window.open('', '', 'width=1,height=1');
        const isBlocked =
            !testWindow ||
            testWindow.closed ||
            testWindow.outerWidth === 0 ||
            testWindow.outerHeight === 0;

        if (testWindow) {
            testWindow.close();
        }
        return isBlocked;
    };

    return isAdBlockerActive() || isPopupBlockerActive();
}
