module.exports = [
        {
            path: '/home',
            component: require('./Home'),
            meta: {title: 'SailLibre HomePage'}
        },
        {
            path: '/converter',
            component: require('./Converter'),
            meta: {title: 'Distance converter'}
        },
        {
            path: '*',
            redirect: '/home'
        }
];
