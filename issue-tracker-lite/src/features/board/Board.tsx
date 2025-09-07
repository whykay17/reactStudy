import { Column } from "./Column";
import type { Issue } from "../issues/types";
import { useLocalStorage } from "../../lib/useLocalStorage";
import { useState } from "react";

export function Board() {
  const [newTitle, setNewTitle] = useState("");
  const [newAssignee, setNewAssignee] = useState("");
  const [issues, setIssues] = useLocalStorage<Issue[]>("issues",[
    {
      id: crypto.randomUUID(),
      title: "Setup project skeleton",
      assignee: "Alice",
      priority: "low",
      status: "Backlog",
    },
    {
      id: crypto.randomUUID(),
      title: "Add routing",
      assignee: "Bob",
      priority: "high",
      status: "In-Progress",
    },
  ])

  function addIssue(title: string, assignee: string, priority: Issue['priority']) {
    const newIssue: Issue = {
      id: crypto.randomUUID(),
      title,
      assignee,
      priority,
      status: 'Backlog'
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        padding: "16px",
      }}
    >
      <input type="text" placeholder="Title" id="new-issue-title" value={newTitle} onChange={e => setNewTitle(e.target.value)}/>
      <input type="text" placeholder="Assignee" id="new-issue-assignee" value={newAssignee} onChange={e=> setNewAssignee(e.target.value)}/>

      <button onClick={() => addIssue(newTitle,newAssignee, "med")}>Add Issue</button>
    </div>
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "16px",
        background: "black",
        minHeight: "100vh",
      }}
    >
      {['Backlog', 'In-Progress', 'Done'].map((col) => (
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
