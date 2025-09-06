type IssueCardProps = {
  title : string;
  assignedTo : string;
  priority : "low" | "medium" | "high";
}

export function IssueCard({title, assignedTo, priority} : IssueCardProps) {

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "8px",
        marginBottom: "8px",
        background: "red",
      }}
    >
      <h2>{title}</h2>
      <p>Asigned to: {assignedTo}</p>
      <p>Priority: {priority}</p>

    </div>
  )
}

