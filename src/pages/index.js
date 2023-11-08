import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Home/Banner";
import ExtraHedear from "@/components/UI/Home/ExtraHedear";
import Overview from "@/components/UI/Home/Overview";

export default function HomePage() {
  return (
    <main>
      <ExtraHedear></ExtraHedear>
      <Banner></Banner>
      <Overview></Overview>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
