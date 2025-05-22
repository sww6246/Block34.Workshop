import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();

async function seedEmployees() {
  await db.connect();

  await createEmployee("Ricky Burgers", '1999-01-01', 50000)
  await createEmployee("Jack Manskin", '1994-10-01', 65000)
  await createEmployee("Jim Skilowitz", '1990-02-12', 75000)
  await createEmployee("Ja Shart", '1992-22-04', 45000)
  await createEmployee("Fleep Florpman", '1993-01-01', 95000)

  await db.end();
  console.log("🌱 Database seeded.");
}
