import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <div class="flex text-xl">
        <div class="p-5 mr-5 hover:text-yellow-300">
          <Link href={"watch"}>Watch</Link>
        </div>
        <div class="p-5 mr-5 hover:text-yellow-300">
          <Link href={"./"}>FPV Drones</Link>
        </div>
        <div class="p-5 mr-5 hover:text-yellow-300">
          <Link href={"./"}>Meetups</Link>
        </div>
      </div>
      <div class="flex justify-center">
        <div class={styles.image}></div>
      </div>
    </div>
  );
}
