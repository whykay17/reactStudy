import type { Issue } from "./types";

type IssueCardProps = {
  issue: Issue;
  onMove: (id: string, newStatus: Issue["status"]) => void;
  onDelete: (id: string) => void;
};

export function IssueCard({ issue, onMove, onDelete }: IssueCardProps) {
  return (
    <div
      style={{
        background: "#333",
        padding: "8px",
        borderRadius: "6px",
        marginBottom: "8px",
      }}
    >
      <h4>{issue.title}</h4>
      <p>Assigned: {issue.assignee}</p>
      <p>Priority: {issue.priority}</p>

      <div style={{ display: "flex", gap: "4px" }}>
        {["Backlog", "In-Progress", "Done"]
          .filter((s) => s !== issue.status)
          .map((s) => (
            <button key={s} onClick={() => onMove(issue.id, s as Issue["status"])}> {s}
            </button>
          ))}
        <button onClick={() => onDelete(issue.id)}>Delete</button>
      </div>
    </div>
  );
}
