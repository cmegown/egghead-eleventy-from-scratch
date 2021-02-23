module.exports = (config) => {
    
    config.addWatchTarget('./src/css/src/');
    config.addPassthroughCopy('./src/css/dist');

    config.addFilter('randomPost', (arr) => {
        arr.sort(() => {
            return 0.5 - Math.random();
        });

        return arr.slice(0, 1);
    });
    
    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    }
}