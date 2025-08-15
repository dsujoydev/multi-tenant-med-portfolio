CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"full_name" text NOT NULL,
	"username" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
