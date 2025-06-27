export default async function Page() {
  // Simulate a delay to mimic data fetching
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <p>Invoices Page</p>;
}
