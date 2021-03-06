import { useParams } from "react-router-dom";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./MockedData.js";

export function GetMockedUserData() {
  const { id } = useParams();
  const user = USER_MAIN_DATA.find((user) => user.userId === id);

  // console.log(USER_MAIN_DATA);

  return user;
}

export function GetMockedUserActivity() {
  const { id } = useParams();
  const userActivity = USER_ACTIVITY.find((user) => user.id === id);

  // to change the date in the data and show the day only. Creating an array of number & display then according their index
  const days = ["1", "2", "3", "4", "5", "6", "7"];
  days.forEach((day, index) => {
    userActivity.sessions[index].day = day;
  });
  return userActivity;
}

export function GetMockedUserSessions() {
  const { id } = useParams();
  const userAverageSessionsData = USER_AVERAGE_SESSIONS.find(
    (user) => user.id === id
  );

  //To change the data in days
  const weekDays = ["L", "M", "M", "J", "V", "S", "D"];
  weekDays.forEach((day, index) => {
    userAverageSessionsData.sessions[index].day = day;
  });

  return userAverageSessionsData;
}

export function GetMockedUserPerformance() {
  const { id } = useParams();
  const UserPerformance = USER_PERFORMANCE.find((user) => user.id === id);
  const PerformanceKinds = [
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "vitesse",
    "Intensité",
  ];

  //TO translate categories in french
  PerformanceKinds.forEach((kind, index) => {
    UserPerformance.data[index].kind = kind;
  });
  return UserPerformance;
}
