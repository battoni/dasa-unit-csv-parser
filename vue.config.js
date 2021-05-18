const path = require('path');

function resolveSrc(_path) {
    return path.join(__dirname, _path);
}

module.exports = {
    filenameHashing: false,
    configureWebpack: {
        devtool: 'source-map',
        entry: [
            './src/sass/styles.sass',
            './src/main.js'
        ],
        output: {
            filename: '[name].[hash].js',
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            alias: {}
        },
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [
                        resolveSrc('src'),
                    ],
                    loader: 'babel-loader'
                },
            ],
        }
    },
    css: {
        sourceMap: process.env.NODE_ENV !== 'production',
        loaderOptions: {
            sass: {
                prependData: '@import src/sass/variables'
            }
        }
    }
};
