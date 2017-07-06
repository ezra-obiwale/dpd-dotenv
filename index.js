(function (Context) {
    require('dotenv').config();
    Context.prototype.env = function (name, def) {
        return process.env[name] || process.env[name.toUpperCase()] || def;
    };
})(require('deployd/lib/context'));