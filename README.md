# sequelize-orm-hw — Blog API with Sequelize ORM

A backend REST API for a blog platform, built as a homework assignment to learn **Sequelize ORM** with Node.js. The whole point was to go beyond raw SQL and understand how to model data relationships through JavaScript objects — and it actually clicked.

This project implements a full data layer with migrations, models, seeders, and controllers for a blog system with Users, Posts, Comments, and Tags. No half-measures — it's properly structured.

> *Birarenze* — understanding ORMs changed how I think about backend data forever.

---

## Data Models

| Model | Description |
|-------|-------------|
| `User` | Blog authors with authentication fields |
| `Post` | Blog posts authored by users |
| `Comment` | Comments on posts by users |
| `Tag` | Tags for categorizing posts |

---

## Project Structure

```
sequelize-orm-hw/
├── config/              # Database configuration
├── controllers/         # Route handlers (CRUD logic)
│   ├── commentController.js
│   ├── postController.js
│   ├── tagController.js
│   └── userController.js
├── migrations/          # Database migration files
├── models/              # Sequelize model definitions
│   ├── comment.js
│   ├── post.js
│   ├── tag.js
│   └── user.js
├── seeders/             # Seed data for development
├── populateComments.js  # Script to seed comments
├── populatePosts.js     # Script to seed posts
└── populateTags.js      # Script to seed tags
```

---

## Tech Stack

- **Runtime:** Node.js
- **ORM:** Sequelize
- **Database:** MySQL (configurable via `config/`)
- **Pattern:** MVC (Models, Controllers, Migrations, Seeders)

---

## Setup & Running

```bash
npm install
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
node populatePosts.js   # Optional: seed via script
```

---

## What I Learned

- Defining model associations (hasMany, belongsTo, belongsToMany)
- Writing and running migrations to version database schemas
- Using seeders to populate test data
- Separating controller logic from model definitions
- Understanding eager loading and query optimization with Sequelize
