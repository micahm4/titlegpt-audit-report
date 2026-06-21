// App.tsx
// TitleGPT.ai — Dev entrypoint for the audit report UI
// Micah Muir · Frontend Intern · June 2026
//
// This file wires the hardcoded Susan audit data to the display component
// so you can run `npm run dev` and see the full report immediately.
//
// When Metin's backend is ready:
//   1. Fetch the AuditReport JSON from his endpoint
//   2. Pass it as the `report` prop instead of susanAudit
//   3. Delete this file's import of reportData

import { TitleGptAuditReport } from "./TitleGptAuditReport";
import { susanAudit } from "./reportData";

export default function App() {
  return <TitleGptAuditReport report={susanAudit} />;
}
