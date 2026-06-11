import SearchHero from "@/components/features/SearchHero";
import VetMapSection from "@/components/features/VetMapSection";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <SearchHero />
      <VetMapSection />
    </div>
  );
}
