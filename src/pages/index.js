import RootLayout from "@/components/Layouts/RootLayout";
import AboutIqra from "@/components/UI/Home/AboutIqra";
import Banner from "@/components/UI/Home/Banner";
import ExtraHedear from "@/components/UI/Home/ExtraHedear";
import LatestCategory from "@/components/UI/Home/LatestCategory";
import Overview from "@/components/UI/Home/Overview";
import { listenToAuthState } from "@/redux/features/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listenToAuthState());
  }, [dispatch]);

  return (
    <main>
      <ExtraHedear></ExtraHedear>
      <Banner></Banner>
      <Overview></Overview>
      <AboutIqra></AboutIqra>
      <LatestCategory></LatestCategory>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
