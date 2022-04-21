import { Link, useNavigate } from "react-router-dom";

export const UpRoadLogoSVG: React.FC = () => {
  let navigate = useNavigate();
  const changePath = () => {
    navigate("/profile/roadmaps");
  };
  return (
    <>
      <Link to="/" style={{ display: "flex" }}>
        <svg
          width={66}
          height={65}
          viewBox="0 0 66 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={changePath}
        >
          <path
            d="M42.0718 26.6085V33.8078C42.0718 39.4482 38.3021 43.5297 33.3986 43.5297C28.4951 43.5297 24.4703 39.4482 24.4703 33.8078V17"
            stroke="url(#paint0_linear_177_2)"
            strokeWidth={11}
            strokeLinecap="round"
          />
          <path
            d="M42.0718 26.6085V33.8078C42.0718 39.4482 38.3021 43.5297 33.3986 43.5297C28.4951 43.5297 24.4703 39.4482 24.4703 33.8078V17"
            stroke="white"
            strokeLinecap="square"
            strokeDasharray="5 5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.6014 33.8078V26.6085C36.6014 23.5873 39.0506 21.1382 42.0718 21.1382C45.0929 21.1382 47.5421 23.5873 47.5421 26.6085V33.8078C47.5421 41.9216 41.8434 49 33.3986 49C25.1515 49 19 42.1365 19 33.8078C20.4455 45.5421 36.6014 42.3676 36.6014 33.8078Z"
            fill="url(#paint1_linear_177_2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_177_2"
              x1="33.2711"
              y1="12.0115"
              x2="33.2711"
              y2="43.5297"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A6C9DC" />
              <stop offset={1} stopColor="#7BA4A8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_177_2"
              x1="25.434"
              y1="33.1842"
              x2="40.1444"
              y2="55.0372"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CEFF48" />
              <stop offset={1} stopColor="#A5C05B" />
            </linearGradient>
          </defs>
        </svg>
      </Link>
    </>
  );
};
