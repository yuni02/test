
import babel from 'rollup-plugin-babel';
export default{
    input: 'pub/js/index.js',
    output:{
        file: 'pub/js/bundle.js',
        format: 'iife'
    },
    plugins:[
babel({
    exclude: 'node_modules/**',
})
    ]
};