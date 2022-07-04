import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import UserLayout from "../component/user/UserLayout";
import Body from "../component/user/Body";


export default function Home() {
  return (
    <>

    <UserLayout>
      <Body/>
    </UserLayout>
    </>
  )
}
