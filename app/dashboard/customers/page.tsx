import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
  description: "Manage your customers here",
};

export default async function Page() {
  return <p>Customers Page</p>;
}
