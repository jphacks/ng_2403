import Loader from "@/components/parts/loader";

export default function Home() {
  return (
    <div className="">
      <h1 className="text-5xl text-center mb-7">タイトル</h1>
      <Loader />
      <div className="mt-10 text-center">ログイン済み</div>
    </div>
  );
}
