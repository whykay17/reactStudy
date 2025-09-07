import type { Issue } from "./types";

export function IssueCard({
  issue,
  onMove,
  onDelete,
}: {
  issue: Issue;
  onMove: (id: string, status: Issue["status"]) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div
      style={{
        padding: 8,
        border: "1px solid #ddd",
        marginBottom: 8,
        borderRadius: 8,
      }}
    >
      <strong>{issue.title}</strong>
      <div style={{ marginTop: 8 }}>
        {issue.status !== "backlog" && (
          <button onClick={() => onMove(issue.id, "backlog")}>Backlog</button>
        )}
        {issue.status !== "inprogress" && (
          <button onClick={() => onMove(issue.id, "inprogress")}>
            In Progress
          </button>
        )}
        {issue.status !== "done" && (
          <button onClick={() => onMove(issue.id, "done")}>Done</button>
        )}
        <button onClick={() => onDelete(issue.id)}>Delete</button>
      </div>
    </div>
  );
}
