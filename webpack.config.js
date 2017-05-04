/**
 * Created by slashhuang on 17/5/4.
 */

const path =require('path')
const fs = require('fs')
const webpack = require('webpack')
const contextFilePath = path.resolve(__dirname,'example')
module.exports = {
    entry: fs.readdirSync(contextFilePath).reduce((pre,cur)=>{
       let baseName = path.basename(cur,'.js')
       let fullPath = path.resolve(contextFilePath,cur)
       if(fs.statSync(fullPath).isDirectory()){
            pre[baseName] = path.resolve(fullPath,'index.js')
       }else{
            pre[baseName] = fullPath
       }
       return pre
    },{}),
    output: {
        publicPath:'/dist/',
        path: path.join(__dirname,'dist'),
        filename: "[name].js"
    },
    resolve: {
        extensions: [ '.js', '.jsx']
    },
    plugins:[
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {   test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
        ]
    }
};
