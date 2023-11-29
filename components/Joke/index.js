import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

// pages/index.js = "/"
// pages/[brokkoli].js = "/[brokkoli]"
// router.query = {brokkoli: 1}

export default function Joke() {
  const router = useRouter();
  const { brokkoli } = router.query;

  const { data, isLoading } = useSWR(`/api/jokes/${brokkoli}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <small>ID: {data.id}</small>
      <h1>{data.joke} </h1>
      <Link href="/">Back to all</Link>
    </>
  );
}
