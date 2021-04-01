const initOptions = {/* options as documented http://vitaly-t.github.io/pg-promise/module-pg-promise.html */};
const pgp = require('pg-promise')(initOptions);

function main(args) {
    const url = `postgres://${args.dbuser}:${args.dbpass}@${args.dbhost}:${args.dbport}/${args.dbname}`
    console.log(url)
    const db = pgp(url)
    return db.any("select * from asset")
    .then(result => ({ "body": result}) )
    .catch(err => ({ "body": {"error": err}}))
}

module.exports.main = main
