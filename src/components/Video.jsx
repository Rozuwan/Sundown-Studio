import video from "../assets/video.mp4";

const Video = () => {
  return (
    <>
      <section className="relative z-20 px-8 md:px-10">
        <video autoPlay loop muted
        className="object-cover h-155 w-full rounded-2xl mt-5 mb-5 md:rounded-4xl md:h-[80%] "
         src={video}></video>
      </section>
    </>
  );
};

export default Video;
