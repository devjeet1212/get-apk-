import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const apps = pgTable("apps", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  category: text("category").notNull(),
  type: text("type").notNull(),
  rating: real("rating").notNull(),
  description: text("description").notNull(),
  version: text("version").notNull(),
  size: text("size").notNull(),
  imageUrl: text("image_url").notNull(),
  modType: text("mod_type").notNull(),
  downloads: integer("downloads").notNull().default(0),
});

export const insertAppSchema = createInsertSchema(apps).omit({
  id: true,
});

export type InsertApp = z.infer<typeof insertAppSchema>;
export type App = typeof apps.$inferSelect;
