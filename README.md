# Poetry & Essays Portfolio

A personal website for publishing original poetry, essays, and a curated collection of favorite poems.
Built with **Next.js**, **Prisma**, and **PostgreSQL**.

---

## Overview

This site functions as a small digital notebook for writing and sharing:

* Original poetry
* Essays and reflections
* A curated poetry collection from authors I admire

It also includes a private **admin interface** used to create, edit, and manage posts.

---

## Features

* Publish **poems and blog posts**
* Curated **poetry collection page**
* **Markdown rendering** for writing content
* Animated hover effects and custom styling
* Admin panel for creating and deleting posts
* PostgreSQL database managed with Prisma

---

## Tech Stack

* **Framework:** Next.js
* **Database ORM:** Prisma
* **Database:** PostgreSQL
* **Deployment:** Vercel
* **Styling:** Tailwind CSS
* **Content Rendering:** React Markdown

---

## Project Structure

```
app/
  blog/
  poems/
  collection/
  admin/
  api/

components/
lib/
prisma/
public/
```

Key areas:

* `app/poems` – poems list and poem pages
* `app/blog` – essays/blog posts
* `app/collection` – curated poetry collection
* `app/admin` – content management interface
* `app/api` – server routes for creating and deleting posts

---

## Local Development

Clone the repository:

```
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

Install dependencies:

```
npm install
```

Create an `.env` file and add your database connection:

```
DATABASE_URL=your_database_connection_string
```

Run the development server:

```
npm run dev
```

The site will be available at:

```
http://localhost:3000
```

---

## Database Setup

Prisma is used to manage the database schema.

Push schema changes to the database:

```
npx prisma db push
```

Open the Prisma database GUI:

```
npx prisma studio
```

---

## Deployment

The site is deployed using **Vercel**.

Steps:

1. Push the repository to GitHub
2. Import the project into Vercel
3. Add environment variables (DATABASE_URL)
4. Deploy

---

## Author

Created as a personal creative space for writing, reflection, and poetry.

---
