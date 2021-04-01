# nimbella-postgresql

How to use:

Set the following environment variables on the shell. 
Change `<change-here>` with the corresponding values:

```
export HIBOT_DBHOST=<change-here>
export HIBOT_DBPORT=5432
export HIBOT_DBNAME=<change-here>
export HIBOT_DBUSER=postgres
export HIBOT_DBPASS=<change-here>
```

then deploy with 

```
nim project deploy .
```

finally test with 

```
nim action invoke hibot/query
```

or with an url with

```
curl $(nim action get hibot/query --url)
```
