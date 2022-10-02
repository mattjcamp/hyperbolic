import Navbar from "../components/navbar";
export default function Watch() {
  return (
    <div>
      <Navbar />
      <div class="flex justify-center py-16">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/MHd7lP2feDU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
