const path = require('path');
 
module.exports = {
    entry: './src/main/index.ts',
    output: {
        filename: 'dist/index.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
               test: /\.vue$/,
               loader: 'vue-loader'
            }
             
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
          },
        extensions: ['.tsx', '.ts', '.js', '.vue', '.json']
    },
};
