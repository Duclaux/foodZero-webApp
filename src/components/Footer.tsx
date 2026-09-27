import { Link } from "react-router-dom";
import Container from "./Container";

function Footer() {
  return (
    <section className="bg-deep-forest">
      <Container style="pb-18.5 pt-33 text-white">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.5fr] gap-10 items-start">
          <Link to="/" className="font-rufina text-[40px] lg:text-[68px] text-white font-bold">
            Food Zero.
          </Link>

          <div className="">
            <h1 className="heading-5">Contact</h1>
            <p className="widgets-texte mt-10 mb-7 leading-[2.5]">
              +86 852 346 000
              <br />
              info@foodzero.com
            </p>
            <p className="widgets-texte">
              1959 Sepulveda Blvd.
              <br />
              Culver City, CA, 90230
            </p>
          </div>

          <div>
            <h1 className="heading-5">Never Miss a Recipe</h1>

            <div className="lg:flex items-center gap-8 mt-10">
              <input
                type="text"
                placeholder="Email Address"
                className="py-7.5 px-10 border-2 border-white lg:w-130.75 text-white"
              />
              <button className="heading-5 mt-8 lg:mt-0 px-11.5 py-7.5 h-22 bg-olive border-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t-2 border-white border-dashed">
        <Container style="lg:flex items-center justify-between py-[58px]">
          <p className="body text-white">
            © 2020 Zero Inc. All rights Reserved
          </p>

          <div className="flex gap-4.5 mt-7">
            <img src="../src/assets/images/icon_facebook.svg" alt="" />
            <img src="../src/assets/images/icon_instagram.svg" alt="" />
            <img src="../src/assets/images/icon_twitter.svg" alt="" />
            <img src="../src/assets/images/icon_youtuve.svg" alt="" />
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Footer;
