export function ProjectVisual({ visual }) {
  if (visual === "vela") {
    return (
      <>
        <div className="visual-wash vela-wash" aria-hidden="true" />
        <div className="vela-copy">
          care
          <br />
          without
          <br />
          <i>the wait.</i>
        </div>
        <div className="vela-orb" aria-hidden="true" />
        <div className="vela-note">
          same-day
          <br />
          <b>support</b>
        </div>
      </>
    );
  }

  if (visual === "form") {
    return (
      <>
        <div className="visual-wash form-wash" aria-hidden="true" />
        <div className="form-logo">
          form<span>&</span>found
        </div>
        <p className="form-tagline">objects with intent</p>
        <div className="form-object form-a" aria-hidden="true" />
        <div className="form-object form-b" aria-hidden="true" />
      </>
    );
  }

  return (
    <>
      <div className="visual-wash sonder-wash" aria-hidden="true" />
      <div className="sonder-building" aria-hidden="true" />
      <div className="sonder-sun" aria-hidden="true" />
      <div className="sonder-copy">
        SØNDER
        <br />
        <i>HOUSE</i>
      </div>
    </>
  );
}
