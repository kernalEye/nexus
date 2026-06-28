# ARCHITECTURE.md

# Developer Observability Platform

> Last Updated: Version 1 - Authentication Phase

---

# Project Vision

We are building a simplified Developer Observability Platform inspired by products like Sentry, Datadog and New Relic.

This project is built primarily for:

* Learning backend engineering
* Learning distributed systems
* Learning SaaS architecture
* Learning GraphQL
* Learning NestJS
* Learning PostgreSQL
* Learning Redis
* Learning Docker
* Learning System Design
* Interview preparation

This project is **NOT** intended to compete with commercial observability platforms.

---

# Technology Stack

## Frontend

* Next.js
* TypeScript
* TailwindCSS
* Apollo Client

---

## Backend

* NestJS
* GraphQL
* Prisma ORM

---

## Database

PostgreSQL

Development:

Local PostgreSQL

Future:

Docker PostgreSQL running on Ubuntu VM

---

## Future Technologies

* Redis
* BullMQ
* Kafka
* ClickHouse
* OpenTelemetry
* Kubernetes
* AI Root Cause Analysis

---

# Architecture Philosophy

The project should always follow:

Presentation Layer

↓

Business Layer

↓

Data Access Layer

↓

Database

Business logic must never exist inside GraphQL resolvers.

Resolvers should only:

* Validate request
* Call Service
* Return response

---

# Version 1 Scope

Authentication

Tenant Management

Project Management

API Keys

Error Tracking

Dashboard

Everything else is out of scope.

---

# Current Database

Tables

* users
* tenants
* tenant_users
* refresh_tokens

Future

* projects
* api_keys
* errors
* logs
* metrics

---

# Authentication Design

Authentication Method

JWT

Access Token

Refresh Token

---

## Access Token

Contains:

* userId
* tenantId
* role

Example

{
"sub": 1,
"tenantId": 1,
"role": "OWNER"
}

Purpose

Fast authorization.

Current design intentionally stores tenantId and role.

Future versions may remove them.

Expiration

15 minutes

---

## Refresh Token

Contains

{
"sub": 1,
"sessionId": "UUID"
}

Stored inside database.

Expiration

30 days

Purpose

Generate new access tokens.

---

# Authentication Flow

Register

↓

Create User

↓

Create Default Tenant

↓

Create Tenant Membership

↓

Return Success

---

Login

↓

Verify Email

↓

Verify Password

↓

Generate Access Token

↓

Generate Refresh Token

↓

Store Refresh Session

↓

Return Tokens

---

Refresh Token

↓

Validate Token

↓

Validate Session

↓

Generate New Tokens

↓

Revoke Old Session

↓

Store New Session

↓

Return Tokens

---

Logout

↓

Validate Refresh Token

↓

Revoke Session

↓

Logout Successful

---

# User Roles

Current Roles

OWNER

DEVELOPER

Permission system is postponed.

Role-based authorization only.

Future:

* ADMIN
* VIEWER
* CUSTOM ROLES
* PERMISSIONS

---

# Tenant Strategy

Current Design

One user belongs to one tenant.

Database is designed to support multiple tenants in the future through tenant_users.

No schema redesign should be required later.

---

# GraphQL Modules

Auth Module

Responsibilities

* Register
* Login
* Refresh
* Logout
* Me

---

User Module

Responsibilities

* Current User
* User Profile

---

Tenant Module

Responsibilities

* Create Tenant
* List Tenants

---

Future Modules

Project Module

API Key Module

Error Module

Dashboard Module

Metrics Module

Log Module

Notification Module

AI Module

---

# Folder Philosophy

Every module should contain

module

resolver

service

dto

entities

guards

decorators

constants

interfaces

exceptions

No module should directly access another module's database logic.

Communication happens through services.

---

# Current Development Order

Authentication

↓

Tenants

↓

Projects

↓

API Keys

↓

SDK

↓

Error Tracking

↓

Dashboard

↓

Logs

↓

Metrics

↓

Redis

↓

BullMQ

↓

Kafka

↓

OpenTelemetry

↓

AI

---

# Current Decisions

JWT contains:

* userId
* tenantId
* role

Refresh tokens stored in database.

Passwords stored as bcrypt hash.

GraphQL only.

REST API will not be used.

Prisma is the only way to access PostgreSQL.

Manual SQL should be avoided except for debugging.

Local PostgreSQL during development.

Docker PostgreSQL after Version 1.

---

# Coding Rules

Never put business logic inside GraphQL Resolver.

Never access Prisma directly from Resolver.

Always use Services.

Always validate DTOs.

Always hash passwords.

Never expose passwordHash.

Never expose refreshToken.

Always return typed GraphQL objects.

---

# Naming Rules

Modules

PascalCase

Services

PascalCase

DTO

PascalCase

Database

snake_case

GraphQL

camelCase

---

# Git Workflow

main

↓

develop

↓

feature/auth

↓

feature/tenant

↓

feature/project

↓

feature/api-key

↓

feature/errors

Every feature requires Pull Request review before merge.

---

# Future Improvements

Database driven permissions.

Permission Groups.

Redis Session Cache.

Rate Limiting.

Email Verification.

Forgot Password.

OAuth Login.

Invite Users.

Multiple Organizations.

Audit Logs.

Soft Deletes.

Background Jobs.

Kafka Event Streaming.

Distributed Tracing.

AI Incident Investigation.

---

# Important Rule

Do not optimize for Version 5 while building Version 1.

Build the simplest architecture that satisfies the current requirements while leaving room for future improvements.

Every architectural decision should be documented in this file before implementation.

This file is the single source of truth for the project architecture.
