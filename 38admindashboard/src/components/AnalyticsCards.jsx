const AnalyticsCards = ({ data }) => {
  if (!data || data.length === 0) return <p>No analytics data.</p>;

  return (
    <div className="analytics-cards">
      {data.map(({ id, title, value, icon }) => (
        <div key={id} className="card">
          <div className="card-icon">{icon}</div>
          <div className="card-info">
            <h3>{value}</h3>
            <p>{title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AnalyticsCards;
