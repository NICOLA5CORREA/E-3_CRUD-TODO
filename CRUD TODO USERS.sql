CREATE TABLE "users" (
  "id" INT GENERATED BY DEFAULT AS IDENTITY UNIQUE PRIMARY KEY,
  "username" varchar(30) NOT NULL,
  "email" varchar(50) NOT NULL,
  "password" varchar(15) NOT NULL
);

CREATE TABLE "task" (
  "category_id" INT GENERATED BY DEFAULT AS IDENTITY UNIQUE,
  "title" varchar(20) NOT NULL,
  "description" varchar(50),
  "completed" boolean
);

CREATE TABLE "categories" (
  "id" int PRIMARY KEY,
  "name" varchar(15) NOT NULL
);

CREATE TABLE "categories_tasks" (
  "category_id" int NOT NULL,
  "task_id" int NOT NULL
);

ALTER TABLE "categories_tasks" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "categories_tasks" ADD FOREIGN KEY ("task_id") REFERENCES "task" ("category_id");

ALTER TABLE "task" ADD FOREIGN KEY ("category_id") REFERENCES "users" ("id");
