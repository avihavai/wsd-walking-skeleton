# Walking skeleton

This is a walking skeleton -- a starting point for working on the course
assignments -- for the free online Web Software Development course available at
[https://wsd.cs.aalto.fi/](https://wsd.cs.aalto.fi/).

## Contents

The walking skeleton has a simple Deno application that starts on port `7777`.
The application responds to queries with the message `Hello world!`. Launching
the walking skeleton starts the Deno application, a PostgreSQL server, and a
database migration process (Flyway).

## Starting and shutting down

The walking skeleton is used with Docker Compose.

- To start the walking skeleton, open up the terminal in the folder that
  contains the `docker-compose.yml` file and type `docker-compose up`.
- To stop the walking skeleton, press `ctrl+C` (or similar) in the same terminal
  where you wrote the command `docker-compose up`. Another option is to open up
  a new terminal and navigate to the folder that contains the
  `docker-compose.yml` file, and then write `docker-compose stop`.

## Watching for changes

The walking skeleton by default watches for changes in the Deno code and
restarts the application whenever needed. There is a
[bug](https://github.com/denoland/deno/issues/6966), however, that leads to this
functionality not working in Windows Subsystem for Linux. When working with WSL,
stop and start the container between changes.

## Database

When the walking skeleton is up and running, you can access the PostgreSQL
database from the terminal using the following command:

```
docker exec -it database-server psql -U username database
```

This opens up `psql` console, where you can write SQL commands.

## Database migrations

When the walking skeleton is started, Flyway is used to run the SQL commands in
the database migration files that reside in the `flyway/sql`-folder. If a
database exists, Flyway checks that the schema corresponds to the contents of
the database migration files.

If you need new database tables or need to alter the schema, the correct
approach is to create a new migration file and start the walking skeleton.
Another approach is to modify the existing migration file -- if you do this, the
migrations fail, however.

If you end up altering the migration files (or the schema in the database), you
can clean up the database (remove the existing database tables) by stopping the
containers and the related volumes -- with the database data -- with the command
`docker-compose down`. When you launch the walking skeleton again after this,
the database is newly created based on the migration files.

## Deno cache

When we launch a Deno application, Deno loads any dependencies that the
application uses. These dependencies are then stored to the local file system
for future use. The walking skeleton uses the `app-cache`-folder for storing the
dependencies. If you need to clear the cache, empty the contents of the folder.

## The project.env file

Database and Deno cache configurations are entered in the `project.env` file,
which Docker uses when starting the walking skeleton. If you deploy the
application, you naturally do not wish to use the file in this repository.
Instead, create a new one that is -- as an example -- only available on the
server where the application is deployed. Another option is to use secrets --
we'll discuss these briefly in the course, where this walking skeleton is used.

## VSCode configurations

The walking skeleton also comes with a few default VSCode settings. These
settings can be found in the `settings.json` file in the `.vscode` folder. By
default, we assume that you have the VSCode Deno plugin.
