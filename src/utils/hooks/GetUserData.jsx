import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetMockedUserData } from "../../data/mockedUser";

// to get the data from backEnd repo
const baseUrl = "http://localhost:3000/user/";

export function useAxios() {
  const { userId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (userId === "mocked") {
      return;
    }
    async function getData() {
      try {
        await axios.get(baseUrl + userId).then((res) => {
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
 * @returns function to return fetched data or mocked data
 * according to their id
 */
export function GetUserData() {
  const { userId } = useParams();
  const { data } = useAxios();

  if (userId === "mocked") {
    const user = GetMockedUserData();
    // console.log("mocked");
    return user;
  } else {
    // console.log("fetch data");
    return data;
  }
}
