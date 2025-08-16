import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey(), // Clerk userId
  email: text("email").notNull(),
  fullName: text("full_name").notNull(),
  username: text("username").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const organizations = pgTable("organizations", {
  id: text("id").primaryKey(), // Clerk organization ID
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  createdBy: text("created_by").notNull(), // Clerk userId
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
