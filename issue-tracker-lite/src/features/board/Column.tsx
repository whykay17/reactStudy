import { IssueCard} from '../issues/Issues';

type ColumnProps = {
  title: string;
};

export function Column({ title }: ColumnProps) {
  return (
    <div style={{ flex: 1, padding: "8px", background: "#777777ff", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      {/* Hardcoded cards for now */}
      <IssueCard title="Setup project skeleton" assignedTo="Alice" priority="low" />
      <IssueCard title="Add routing" assignedTo="Bob" priority="high" />
    </div>
  );
}