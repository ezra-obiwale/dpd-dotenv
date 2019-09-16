(function (Context) {
    require('dotenv').config()
    Context.prototype.env = function (name, def) {
        const value = process.env[name] || process.env[name.toUpperCase()] || def
        try {
            return eval(value)
        } catch (e) {
            return value
        }
    }
})(require('deployd/lib/context'))
