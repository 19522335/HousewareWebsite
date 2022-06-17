import React from 'react'

import Container from '../../../components/Container/Container';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
export default function News() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 16,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2,
      partialVisibilityGutter: 16,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      partialVisibilityGutter: 16,
    }
  };

  const newsList = [
    {
      image: '/images/home/news-card-1.png',
      title: 'SALE khổng lồ mừng khai trương, ÁP DỤNG ĐẾN HẾT THÁNG 6',
      time: '18 tháng Mười Sáu, 2022',
      content: 'Tưng bừng khai trương, nhận nhiều ưu đãi khuyến mãi ngay tại cửa hàng...'
    },
    {
      image: '/images/home/news-card-2.png',
      title: 'SIÊU SALE tháng 6 cho các sản phẩm máy xay PHILIPS',
      time: '18 tháng Mười Sáu, 2022',
      content: 'PHILIPS là một nhãn hàng nổi tiếng với chất lượng sản phẩm. Khuyến mãi các sản phẩm máy xay PHILIPS...'
    },
    {
      image: '/images/home/news-card-3.png',
      title: 'NHẬN NGAY MÃ GIẢM GIÁ 30% cho toàn bộ đơn hàng',
      time: '18 tháng Mười Sáu, 2022',
      content: 'Nhập mã CIGSALE30 để nhận ngay ưu đãi 30% cho toàn bộ đơn hàng, áp dụng đến....'
    },
    {
      image: '/images/home/news-card-4.png',
      title: 'FREESHIP cho toàn bộ đơn hàng tại cửa hàng',
      time: '18 tháng Mười Sáu, 2022',
      content: 'Chương trình miễn phí vận chuyển cho toàn bộ đơn hàng tại cửa hàng...'
    },
    {
      image: '/images/home/news-card-5.png',
      title: 'Miễn phí đổi trả cho các đơn hàng được mua tại cửa hàng',
      time: '18 tháng Mười Sáu, 2022',
      content: 'Shop sẽ đổi trả miễn phí các đơn hàng tại cửa hàng nếu như thỏa các điều kiện như:... '
    },
    {
      image: '/images/home/news-card-6.png',
      title: 'Hãy thử vận may với Vòng quay may mắn,rất nhiều quà tặng hấp dẫn',
      time: '18 tháng Mười Sáu, 2022',
      content: 'Đơn hàng từ 100K trở lên sẽ được 1 lần thử vận may tại shop, hãy thử ngay...'
    },

  ];
  return (
    <div className="w-full bg-green-4 py-20">
      <div className="mb-10">
        <h1 className="uppercase text-4xl text-black-1 text-center font-medium">Chương trình khuyến mãi</h1>
      </div>
      <div className="max-w-screen-xl w-full mx-auto px-2">
        <div className="mr-[-8px] ml-[-8px]">
            <Carousel
              swipeable
              autoPlay
              autoPlaySpeed={3000}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              keyBoardControl={true}
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              minimumTouchDrag={80}
              slidesToSlide={1}
              itemClass="top-product-carousel-items"
              containerClass="top-product-carousel-container"
              partialVisible
            >
          {
            newsList.map((news, index) => {
              return (
                <div className="flex flex-col group" key={index}>
                    <Link to="/">
                    <img src={`${news.image}`} alt="images" className="w-full h-[250px] group-hover:scale-105 ease-in-out transition-transform duration-500" />
                    <h1 className="text-black-2 text-2xl font-medium">
                      {news.title}
                    </h1>
                    <p className="text-back-4 text-sm mb-5 font-medium opacity-80">{news.time}</p>
                    <p className="text-black-3 h-[48px] text-justify text-ellipsis overflow-hidden text-sm-md mb-5">{news.content}</p>
                    </Link>
                    <Link to="/da" className="hover:bg-green-1 transition-all duration-200 ease-in-out cursor-pointer border-2 border-black-1  rounded-md border-dashed text-black-1 w-[150px] py-1 font-medium text-center text-xl uppercase">
                      Đọc thêm
                    </Link>               
                </div>
              )
            })
          }
          </Carousel>
    
        </div>
      </div>
    </div>
  )
}
