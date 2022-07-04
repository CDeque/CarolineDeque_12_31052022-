import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetMockedUserActivity } from "../../data/mockedUser";

// to get the data from backEnd repo

const baseUrl = "http://localhost:3000/user/";
export function useAxios() {
  const [data, setData] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    if (userId === "mocked") {
      return;
    }
    async function getData() {
      try {
        axios.get(baseUrl + userId + "/activity").then((res) => {
          setData(res.data.data);
        });
      } catch (err) {
        console.log(err, "error occured");
      }
    }
    getData();
  }, [userId]);

  return { data };
}
/**
 *
 * @returns function to return mocked or user Activity
 */

export function GetUserActivity() {
  const { userId } = useParams();
  const { data } = useAxios();
  // console.log(data);

  // if "mocked" return mocked data else return useAxios data
  if (userId === "mocked") {
    const userActivityData = GetMockedUserActivity();

    return userActivityData;
  } else {
    return data;
  }
}
