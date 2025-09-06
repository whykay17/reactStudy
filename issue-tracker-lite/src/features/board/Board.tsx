import { Column } from "./Column";

export function Board() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "16px",
        background: "black",
        minHeight: "100vh",
      }}
    >
      <Column title="Backlog" />
      <Column title="In Progress" />
      <Column title="Done" />
    </div>
  );
}
