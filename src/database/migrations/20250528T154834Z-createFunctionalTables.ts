import { Kysely, SqliteDatabase } from 'kysely'

/** Migration used to initialize empty database tables for the test database. */
export async function up(db: Kysely<SqliteDatabase>) {
  await db.schema
    .createTable('user')
    .ifNotExists()
    .addColumn('id', 'integer', (c) => c.primaryKey().autoIncrement().notNull())
    .addColumn('name', 'text', (c) => c.notNull())
    .addColumn('email', 'text', (c) => c.notNull().unique())
    .execute()

  await db.schema
    .createTable('screening')
    .ifNotExists()
    .addColumn('id', 'integer', (c) => c.primaryKey().autoIncrement().notNull())
    .addColumn('movie_id', 'integer', (c) =>
      c.notNull().references('movies.id')
    )
    .addColumn('seats', 'integer', (c) => c.notNull())
    .addColumn('time', 'timestamp', (c) => c.notNull())
    .execute()

  await db.schema
    .createTable('ticket')
    .ifNotExists()
    .addColumn('id', 'integer', (c) => c.primaryKey().autoIncrement().notNull())
    .addColumn('screening_id', 'integer', (c) =>
      c.notNull().references('screening.id')
    )
    .addColumn('movie_id', 'integer', (c) =>
      c.notNull().references('movies.id')
    )
    .addColumn('user_id', 'integer', (c) => c.notNull().references('user.id'))
    .execute()
}

export async function down() {
  // unnecessary, as this is the first migration, we can just delete the database
}
