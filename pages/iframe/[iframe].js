import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { iframe } = router.query;

  return (
    <div>
      <iframe src={`https://${iframe}`} height="600" width="300" frameBorder="0"></iframe>
    </div>
  );
}
