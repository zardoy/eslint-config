// these rules are first priority. Every package is checked against them on CI and even if eslint is not setup or not running lint on CI for some reason.

module.exports = {
    rules: ['node/no-unpublished-bin', 'import/no-extraneous-dependencies'],
}
