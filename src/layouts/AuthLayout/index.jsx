import { Outlet } from "react-router";
import Header from "@components/Header";

export default function AuthLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
