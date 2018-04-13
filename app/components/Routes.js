module.exports = [
        {
            path: '/home',
            component: require('./Home'),
            meta: {title: 'SailLibre HomePage'}
        },
        {
            path: '/converter',
            component: require('./Converter'),
            meta: {title: 'Unit converters'}
        },
        {
            path: '*',
            redirect: '/home'
        }
];
