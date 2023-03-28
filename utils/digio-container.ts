declare let Digio: any;

const digioPopup = (requestId, Identifier, accessToken) => {
    // this is a test component to test the digio iframe
    const Options = {
        environment: 'sandbox',
        is_iframe: true,
        logo: 'https://www.linkpicture.com/q/Large-1536-768.png',
        theme: {
            primaryColor: '#141414',
            secondaryColor: '#92FFF7'
        }
    };
    const digio = new Digio(Options);

    function init() {
        digio.init();
    }

    function submit() {
        digio.submit(requestId, Identifier, accessToken);
    }

    return {
        init,
        submit
    };
};

// use the component in the page like this
// const component = digio(KID230311120859896DTB1XBCH69K9MQ, 'email');
// component.init();
// component.submit();
export default digioPopup;
