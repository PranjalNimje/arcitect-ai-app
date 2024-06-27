import { Link } from "react-router-dom";

const Home = () => {
  //Home shows all the different cards available.
  // we can select a card to see the data for selected category
  // The card has a heading, icon and button with which we can navigate
  return (
    <div className="Home">
      <div className="card HomeCard">
        <div className="card-body">
          <h5 className="card-title">Insight Summary</h5>
          <p className="card-text">
            {/* For Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-clipboard-data"
              viewBox="0 0 16 16"
            >
              <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z" />
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
            </svg>
          </p>
          <Link to={`/insight_summary`} className="btn btn-primary">
            Insight Summary
          </Link>
        </div>
      </div>
      <div className="card HomeCard">
        <div className="card-body">
          <h5 className="card-title">Category Distribution</h5>
          <p className="card-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-bar-chart-line-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1z" />
            </svg>
          </p>
          <Link to={`/category_distribution`} className="btn btn-primary">
            Category Distribution
          </Link>
        </div>
      </div>
      <div className="card HomeCard">
        <div className="card-body">
          <h5 className="card-title">Response Times</h5>
          <p className="card-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-bar-chart-steps"
              viewBox="0 0 16 16"
            >
              <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
            </svg>
          </p>
          <Link to={`/response_times`} className="btn btn-primary">
            Response Times
          </Link>
        </div>
      </div>
      <div className="card HomeCard">
        <div className="card-body">
          <h5 className="card-title">Usage Statistics</h5>
          <p className="card-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-graph-up-arrow"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </p>
          <Link to={`/usage_statistics`} className="btn btn-primary">
            Usage Statistics
          </Link>
        </div>
      </div>
      <div className="card HomeCard">
        <div className="card-body">
          <h5 className="card-title">User Satisfaction</h5>
          <p className="card-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-pie-chart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778zM8.5.015V7.5h7.485A8 8 0 0 0 8.5.015" />
            </svg>
          </p>
          <Link to={`/user_satisfaction`} className="btn btn-primary">
            User Satisfaction
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
