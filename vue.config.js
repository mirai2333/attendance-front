module.exports = {
    publicPath: '',
    devServer: {
        proxy: {
            '/attendance': {target: 'http://192.168.1.5:8081'},
        }
    }
};