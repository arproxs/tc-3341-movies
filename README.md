## Roadmap

This is a TDD exercise! Write tests for a feature before making a feature. Follow "Red, Green, Refactor" convention.

## User features

_Admin (a)_ and _Normal (n)_ users have no distinction, no permission logic needed.

**Features:**

- (n) get a list of movies (title, year) by id
- (n) get a list of screenings with session info (timestamp, tickets: total/left) and moviet info (title, year)
- (n) get a list of tickets/bookings they have made
- (n) book a movie screening (only if tickets available)
- (a) create a screening for a movie (add timestamp and ticket count)
- (a) delete screenings if they are empty (no bookings)
- (a) change ticket count (not bellow already booked or 1)

## Tech. requirements

1. User and Admin inputs should be validated
2. DB schema changes only throuhg migrations
3. Unit and Integration testing coverage at 80-95%
4. Follow standard commit convention: "Commit early, commit often"

## Setup

**Note:** For this exercise, we have provided an `.env` file with the database connection string. Normally, you would not commit this file to version control. We are doing it here for simplicity and given that we are using a local SQLite database.

## Migrations

Before running the migrations, we need to create a database. We can do this by running the following command:

```bash
npm run migrate:latest
```

## Running the server

In development mode:

```bash
npm run dev
```

In production mode:

```bash
npm run start
```

## Updating types

If you make changes to the database schema, you will need to update the types. You can do this by running the following command:

```bash
npm run generate-types
```
