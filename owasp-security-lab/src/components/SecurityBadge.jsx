function SecurityBadge({ secure }) {
  return (
    <div
      className={
        secure
          ? "badge badge-safe"
          : "badge badge-danger"
      }
    >
      {secure
        ? "✅ Sistema Seguro"
        : "⚠ Sistema Vulnerable"}
    </div>
  );
}

export default SecurityBadge;