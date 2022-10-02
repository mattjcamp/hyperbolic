import Navbar from "../components/navbar";
import YouTubeSubscribe from "../components/youtubeSubscribe";

/*UC0n133tw_Mv1W3CdQ7GLtHg*/
export default function Home() {
  let channelid = "UC0n133tw_Mv1W3CdQ7GLtHg";
  return (
    <div>
      <Navbar />
      <div class="flex justify-center py-16">
        <YouTubeSubscribe
          // channelName={channelName}
          channelid={channelid}
          theme={"default"}
          layout={"default"}
          count={"default"}
        />
      </div>
    </div>
  );
}
