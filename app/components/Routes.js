module.exports = [
        {
            path: '/home',
            component: require('./Home'),
        },
        {
            path: '/converter',
            component: require('./Converter'),
        },
        {
            path: '*',
            redirect: '/home'
        }
];
