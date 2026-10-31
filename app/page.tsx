import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import RoomFeature from "@/components/RoomFeature";
import ThemesList from "@/components/ThemesList";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <RoomFeature />
      <ThemesList />
      <Timeline />
    </>
  );
}