export const esmimport = {
    name: "import",
    exec: function (statement) {
        const words = statement.split(' ');
        const imported = words[1].slice(1, -1);
        const from = words[3];

        return `import ${imported} from ${from};`;
    }
}