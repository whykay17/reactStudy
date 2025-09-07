import { Column } from "./Column";
import type { Issue } from "../issues/types";
import { useState } from "react";

export function Board() {
  const [issues, setIssues] = useState<Issue[]>([
    {
      id: crypto.randomUUID(),
      title: "Setup project skeleton",
      assignee: "Alice",
      priority: "low",
      status: "backlog",
    },
    {
      id: crypto.randomUUID(),
      title: "Add routing",
      assignee: "Bob",
      priority: "high",
      status: "inprogress",
    },
  ]);

  function addIssue(title: string, assignee: string, priority: Issue['priority']) {
    const newIssue: Issue = {
      id: crypto.randomUUID(),
      title,
      assignee,
      priority,
      status: 'backlog'
    };
    setIssues((prev) => [newIssue, ...prev]);
  }

  function moveIssue(id: string, status:Issue['status']) {
    setIssues((prev) =>
      prev.map((issue) => (issue.id === id ? { ...issue, status: status } : issue)));
  }

  function deleteIssue(id: string) {
    setIssues((prev) => prev.filter((i) => i.id !== id));
  }

  return (<>
    < button onClick={() => addIssue("New Issue", "Charlie", "med")}>Add Random Issue</button>
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "16px",
        background: "black",
        minHeight: "100vh",
      }}
    >
      {['backlog', 'inprogress', 'done'].map((col) => (
        <Column 
          key={col}
          title= {col as Issue['status']}
          issues = {issues.filter((i)=> i.status === col)}
          onMove={moveIssue}
          onDelete={deleteIssue}
        />
      ))}
    </div>
  </>
  )
}
