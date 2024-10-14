import Image from "next/image";
import Referral from "./components/Referral";

export default function Home() {
  return (
    <div className="flex w-full h-full items-center justify-center py-12">
      <Referral />
    </div>
  );
}
