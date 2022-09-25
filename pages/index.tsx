import type { NextPage } from "next";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";
import Image from "next/image";
import style from "../styles/Home.module.scss";
import { FaGithub, FaDiscord, FaReddit, FaTwitter, FaTwitch, FaSpotify, FaInstagram, FaStackOverflow } from "react-icons/fa";
import dynamic from "next/dynamic";
const Desktop = dynamic(() => import("../components/desktop"), { ssr: false });
const Mobile = dynamic(() => import("../components/mobile"), { ssr: false });
const Home = () => {
  const quots = [
    <pre key={1}>
      &quot;I have not failed.
      <br />
      &nbsp;I&apos;ve just found 10,000 ways that won&apos;t work.&quot;
    </pre>,
    <pre key={2}>&quot;Testing leads to failure, and failure leads to understanding&quot;</pre>,
    <pre key={3}>&quot;Simplicity is the soul of efficiency&quot;</pre>,
    <pre key={4}>&quot;Knowledge is power&quot;</pre>,
    <pre key={5}>&quot;Experience is the name everyone gives to their mistakes&quot;</pre>,
    <pre key={6}>&quot;In order to be irreplaceable, one must always be different&quot;</pre>,
    <pre key={7}>&quot;There&apos;s no place like 127.0.0.1&quot;</pre>,
    <pre key={8}>&quot;There is no Ctrl-Z in life&quot;</pre>,
    <pre key={9}>&quot;When all else fails … reboot&quot;</pre>,
    <pre key={10}>&quot;It works on my machine&quot;</pre>,
  ];
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 100px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px)",
  });
  return (
    <>
      <Head>
        <title>Rajaneesh R</title>
        <link rel="icon"  href="/favicon.ico" />
      </Head>
      {(isDesktop || isLaptop || isBigScreen) && <Desktop quots={quots} />}
      {(isMobileDevice || isTabletDevice) && !(isDesktop || isLaptop || isBigScreen) && <Mobile quots={quots} />}
      <div className={style.area}>
        <ul className={style.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Home;
