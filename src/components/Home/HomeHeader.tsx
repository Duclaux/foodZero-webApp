import Container from "../Container"

function HomeHeader() {
  return (
    <section className="h-screen bg-deep-forest">
      <Container style="lg:flex pt-[150px] lg:pt-[230px]">
        <div className="w-full relative text-white">
            <h1 className="hero-heading">
                Healthy Eating<br/>is important<br/>part of lifestyle
            </h1>
            <p className="body my-10">Lorem ipsum dolor sit amet, consectetur adipiscing<br/>elit. Neque congue arcu</p>
            <div className="hidden lg:flex flex-col gap-2 items-center w-fit">
                <p className="heading-4 [writing-mode:vertical-lr] tracking-widest">Scroll</p>
                <div className="w-px h-40 border-l-2 border-dashed border-white/60" />
            </div>
        </div>

        <div className="relative flex flex-col justify-end">
            <img src="../src/assets/images/home-baner-img.png" alt="" className="w-250 h-auto lg:h-150 object-cover"/>
            <div className="flex items-center gap-5 lg:gap-11 absolute bottom-0 left-0 lg:-left-50 ">
                {
                    [1, 2, 3].map((img) => (
                        <img key={img} src={`src/assets/images/spices${img}.png`} className="w-25 h-25 mg:w-37.5 md:h-37.5"/>
                    ))
                }
            </div>
        </div>
      </Container>
    </section>
  )
}

export default HomeHeader
