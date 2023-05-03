//담당 : 이승현

import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js/auto";

Chart.register(CategoryScale);

const UserStats = ({ data }) => {
  return (
    <div className="dark:text-white">
      <h1 className="text-2xl border-b-2 pb-2 mb-5 dark:border-cyan-950">
        통계
      </h1>
      <ul className="flex flex-row justify-evenly">
        <li className="flex flex-col">
          <span>총 방문자 수</span>
          <span className="my-2 text-center">{data?.visit_count}</span>
        </li>
        <li className="flex flex-col">
          <span>총 팔로워 수</span>
          <span className="my-2 text-center">{data?.follower_user.length}</span>
        </li>
        <li className="flex flex-col">
          <span>총 좋아요 수</span>
          <span className="my-2 text-center">{data?.like_user.length}</span>
        </li>
      </ul>
      <div>
        <UserChart />
      </div>
    </div>
  );
};

const UserChart = () => {
  const data = {
    labels: [
      "7일 전",
      "6일 전",
      "5일 전",
      "4일 전",
      "3일 전",
      "2일 전",
      "1일 전",
      "오늘",
    ],
    datasets: [
      {
        type: "line",
        label: "방문자 수",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 2,
        data: [0, 4, 5, 7, 4, 7, 2, 1],
      },
      {
        type: "bar",
        label: "팔로워 수",
        backgroundColor: "rgb(255, 99, 132)",
        data: [0, 0, 2, 4, 5, 8, 11, 11],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "좋아요 수",
        backgroundColor: "rgb(75, 192, 192)",
        data: [0, 0, 0, 0, 1, 7, 11, 13],
      },
    ],
  };
  return (
    <>
      <Line type="line" data={data} />
    </>
  );
};

export default UserStats;