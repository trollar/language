export const define = {
    name: "define",
    exec: function (statement) {
        const words = statement.split(' ');
        const name = words[1].slice(0, -1);
        const value = words[2];
    
        return 'let ' + name + ' = ' + value + ';';
    }
}