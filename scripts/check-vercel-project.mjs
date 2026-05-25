import { readFileSync } from "node:fs";

const expected = {
  orgId: "team_Vn4uSVkIUPXgWhcjgIfJGils",
  projectId: "prj_Tz7xLfZS27tB3JBRXj2wxgkqsm8B",
  projectName: "agency-website",
};

const project = JSON.parse(readFileSync(".vercel/project.json", "utf8"));
const mismatches = Object.entries(expected).filter(
  ([key, value]) => project[key] !== value,
);

if (mismatches.length > 0) {
  console.error("This directory is linked to the wrong Vercel project.");
  for (const [key, value] of mismatches) {
    console.error(`Expected ${key}=${value}, received ${project[key]}`);
  }
  process.exit(1);
}

console.log(
  "Vercel project OK: agency-website -> agency.flooencer.com",
);
