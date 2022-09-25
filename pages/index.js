import Head from "next/head";
import Image from "next/image";
import pic from "../public/hyperbolic-trailer.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div class="text-2xl text-green-500">hyperbolic</div>
      <Image src={pic}></Image>
    </div>
  );
}
