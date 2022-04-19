export const log = {
    name: "log",
    exec: function (statement) {
        return `console.${statement};`;
    }
}