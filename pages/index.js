import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 class="">Home</h1>
      <Link href={"watch"}>
        <a class="text-2xl ">About</a>
      </Link>
    </div>
  );
}
