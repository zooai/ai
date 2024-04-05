import Slider from 'react-slick'
import Image from 'next/image'
function Sideslider(props: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    arrows: false
  }
  return (
    <div className="w-full h-[180px] opacity-50">
      <Slider {...settings} className="bg-black">
        <Image
          className="w-full h-[180px]"
          src="/bg.webp"
          width="300"
          height="300"
          alt=""
        />
        <Image
          className="w-full h-[180px]"
          src="/slider2.jfif"
          width="300"
          height="300"
          alt=""
        />
      </Slider>
    </div>
  )
}
export default Sideslider
