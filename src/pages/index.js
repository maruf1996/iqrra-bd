import RootLayout from "@/components/Layouts/RootLayout";
import AboutHome from "@/components/UI/Home/AboutHome";
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
      <AboutHome></AboutHome>
      <LatestCategory></LatestCategory>
    </main>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
