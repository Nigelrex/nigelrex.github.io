import type { NextPage } from "next";
import style from "../styles/mobile.module.scss";
import { FaGithub, FaDiscord, FaReddit, FaTwitter, FaTwitch, FaSpotify, FaInstagram, FaStackOverflow } from "react-icons/fa";
import { IconContext } from "react-icons";
type props = {
  quots: Array<any>;
};
const Mobile = ({ quots }: props) => {
  return (
    <>
      <div className={style.flex}>
        <div className={style.tagline}>
          <h2 className={style.intro}>Hello, I&apos;m Rajaneesh R!</h2>

          {quots.map((e) => e)[Math.floor(Math.random() * quots.length)]}
        </div>
      </div>
      <IconContext.Provider value={{ size: `${30}`, className: style.iconSize }}>
        <div className={style.flexSocial}>
          <a href="https://twitter.com/rajaneesh__r" className={style.twitter}>
            <FaTwitter />
          </a>
          <a href="https://discord.com/users/738032578820309072" className={style.discord}>
            <FaDiscord />
          </a>{" "}
          <a href="https://github.com/r-rajaneesh" className={style.github}>
            <FaGithub />
          </a>{" "}
          <a href="https://www.reddit.com/user/rajaneesh-r" className={style.reddit}>
            <FaReddit />
          </a>{" "}
          <a href="https://open.spotify.com/user/316jk2ojvzgyfho4a2y5obf7du74" className={style.spotify}>
            <FaSpotify />
          </a>{" "}
          <a href="https://www.twitch.tv/rajaneesh_r" className={style.twitch}>
            <FaTwitch />
          </a>{" "}
          <a href="https://www.instagram.com/r__rajaneesh/">
            <FaInstagram className={style.instagram} />
          </a>
          <a href="https://stackoverflow.com/users/15005026/rajaneesh-r">
            <FaStackOverflow className={style.stackoverflow} />
          </a>
        </div>
      </IconContext.Provider>
    </>
  );
};
export default Mobile;
