<h1 align="center" style="margin: 0;">Welcome to KiraBio</h1>

## Introduction

KiraBio is a specialized platform designed for the buying, selling, and renting of ultra-specialized medical devices used in rare conditions or unique research settings. Our mission is to connect researchers, healthcare professionals, and institutions with the necessary tools to advance medical research and improve patient care.

## Installation

<div style="color: red;">

> ⚠️ **Important**<br/>Make sure the following tools are installed on your computer:

<p align="center">

<a target="_blank" href="https://www.docker.com/get-started/">![Docker Desktop Version](https://img.shields.io/badge/Docker%20Desktop-4.19.0-black?logo=docker)</a>
<a target="_blank" href="https://nodejs.org/en">![Node.js version](https://img.shields.io/badge/Node.js-20.11.0-black?logo=nodedotjs)</a>
<a target="_blank" href="https://www.npmjs.com/">![npm Version](https://img.shields.io/badge/npm-10.2.4-black?logo=npm)</a>

</p>
</div>

<br />

## Running the Codebase

To get started with KiraBio, follow these steps:

1. **Initialize the Project:**

   ```bash
   $ pnpm run init
   ```

2. **Start Development Server:**

   ```bash
   $ pnpm run dev
   ```

   You can view your application in your browser at [http://localhost:8099](http://localhost:8099).

3. **Build for Production:**

   ```bash
   $ pnpm run build
   ```

4. **Start the Production Server:**
   ```bash
   $ pnpm run start
   ```

## Testing the Platform

If you wish to test the platform with seeded data, you can use the following admin login details:

- **Email**: test@test.com
- **Password**: password

This will allow you to access the platform as an admin and explore its features without needing to set up additional data.

## Codebase Overview

### Directory Structure

The KiraBio codebase is organized into several key directories:

- **src/**: Contains the main application code.
  - **app/**: The main application components and pages.
  - **core/**: Core functionalities, including hooks and context providers.
  - **designSystem/**: UI components and design-related files.
  - **server/**: Server-side logic, including API routes and database interactions.
  - **trpc/**: tRPC setup for type-safe API calls.

### Key Components

- **Landing Page**: The entry point of the application, showcasing features and functionalities.
- **User Authentication**: Integrated with NextAuth for user management and session handling.
- **API Integration**: Utilizes tRPC for seamless communication between the frontend and backend.
- **Database**: Uses Prisma for database management, with a PostgreSQL setup.

## Support / Stay in Touch

For any questions or support, feel free to [email us](mailto:ansht@seas.upenn.edu). We also encourage contributions and feedback from the community to improve KiraBio.

---

Thank you for using KiraBio! We hope this documentation helps you get started quickly and effectively.
# KiraBio
# KiraBio
