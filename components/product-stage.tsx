export function ProductStage({
  index,
  label,
  status,
  text,
}: {
  index: number;
  label: string;
  status: string;
  text: string;
}) {
  return (
    <article className="stage">
      <div className="stage-copy">
        <div className="stage-kicker">
          <p className="kicker">{status}</p>
          <p className="stage-index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </p>
        </div>
        <h3 className="stage-title">{label}</h3>
        <p className="stage-text">{text}</p>
      </div>
      <div className="mock" aria-hidden="true">
        <div className="mock-bar">
          <span />
          <span />
          <span />
          <em>{label}</em>
        </div>
        {index === 0 ? <MockSystems /> : null}
        {index === 1 ? <MockFlow /> : null}
        {index === 2 ? <MockStack /> : null}
      </div>
    </article>
  );
}

function MockSystems() {
  return (
    <div className="mock-body mock-split">
      <aside>
        <i />
        <i />
        <i />
        <i />
      </aside>
      <div>
        <div className="mock-bars">
          <b style={{ height: "46%" }} />
          <b style={{ height: "72%" }} />
          <b style={{ height: "58%" }} />
          <b style={{ height: "84%" }} />
          <b style={{ height: "40%" }} />
        </div>
        <div className="mock-line" />
        <div className="mock-line short" />
      </div>
    </div>
  );
}

function MockFlow() {
  return (
    <div className="mock-body mock-flow">
      <span>01</span>
      <span>02</span>
      <span>03</span>
      <span>04</span>
    </div>
  );
}

function MockStack() {
  return (
    <div className="mock-body mock-stack">
      <div />
      <div />
      <div />
    </div>
  );
}
