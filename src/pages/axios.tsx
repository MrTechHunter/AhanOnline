import axios from "axios";
import { IUser } from "../types/user";
// you don't need anything else to import

interface Props {
  // TODO: add user type
  user: IUser[];
}

export default function AxiosTest(props: Props) {
  // TODO: once you get data map through data and show them name

  axios.get("/api/users").then((user) => {
    console.log(user.data);
    // props.user = user.data;
  });

  return (
    <div>
      Simple Axios And Data Fetching :: Edit src/pages/axios.tsx
      <h2>Please look at the console, an object is there</h2>
      <ul>
        {/* {props.user.map((user) => {
          return <h2 key={user}>{user.data}</h2>;
        })} */}
      </ul>
    </div>
  );
}

//SSR
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering

// export const getServerSideProps = async () => {
//   const res = await axios.get("/api/users");
//   return { props: res };
// };

// TODO: fetch data with axios to use in app
// RestApi: axios.get("/api/users") => [{name: "amir"}]
// NOTE: data fetching should happen in server side
// Resource: https://nextjs.org/docs/basic-features/data-fetching
// Resource: https://github.com/axios/axios
