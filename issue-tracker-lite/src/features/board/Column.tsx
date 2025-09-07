import { IssueCard} from '../issues/Issues';
import type { Issue } from '../issues/types';

type ColumnProps = {
  title: Issue["status"];
  issues: Issue[];
  onMove: (id: string, newStatus: Issue["status"]) => void;
  onDelete: (id: string) => void;
};

export function Column({ title, issues, onMove, onDelete }: ColumnProps) {
  return (
    <div
      style={{
        flex: 1,
        padding: "8px",
        background: "#777777ff",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {issues.map((issue) => (
        <IssueCard
          key={issue.id}
          issue={issue}
          onMove={onMove}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}