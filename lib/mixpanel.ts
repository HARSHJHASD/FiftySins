/* eslint-disable import/no-extraneous-dependencies */
import mixpanel from 'mixpanel-browser';

const Mixpanel = mixpanel.init(process.env.MIXPANEL_TOKEN, {
    debug: true,
    ignore_dnt: true
});

export default Mixpanel;
