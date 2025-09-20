# Subscription Tracker

> A service that tracks user subscriptions and sends reminders ahead of renewal dates.

---

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  

---

## Overview

Subscription Tracker is a backend project designed to manage user subscriptions, keep track of renewal dates, and send reminders ahead of those dates. It includes CRUD operations for subscriptions, middleware for request validation, and scheduling logic for reminders.

---

## Features

- CRUD functionalities for users & subscriptions  
- Validations via middleware  
- Scheduled reminders before renewal dates  
- Utilities for date calculations and formatting  
- Modular code structure (controllers, routes, models, utils)  

---

## Tech Stack

| Component | Technology |
|---|---|
| Language | JavaScript (Node.js) |
| Framework | Express |
| Database | MongooDB |
| ORM / ODM | Mongoose |
| Middleware | Custom middleware (arcjet, auth, error handling) |

---

## Getting Started

### Prerequisites

- Node.js (>= 14.x recommended)  
- A running database (e.g. PostgreSQL, MongoDB, or MySQL depending on your config)  
- (Optional) `nodemon` for local development  

### Installation

```bash
git clone https://github.com/MochaSettai/subscription-tracker.git
cd subscription-tracker
npm install
```

> Refer to the `guide.txt` for more installation setup instructions.
