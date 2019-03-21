module.exports = {
    publicPath: '',
    devServer: {
        proxy: {
            '/attendance': {target: 'http://mall.qszhuang.com/attendance'},
        }
    }
};