import React from 'react'
import Container from '../../components/Container/Container'
import Price from '../../components/Price/Price'
import Input from '../../components/Input/Input'
export default function Buy() {
  return (
   <div className="bg-white w-full">
      <Container className="py-20 flex justify-center">
        <div className="border-2 border-yellow-1 p-5 w-4/5 flex">
          <div className="w-1/2 px-10">
            <p className="uppercase text-black text-md font-medium">Đơn hàng của bạn</p>
            <div className="flex items-center justify-between uppercase text-black text-sm-md font-medium py-3 border-b-2 border-gray-300">
              <p>Sản phẩm</p>
              <p className="opacity-80 font-medium">
                Vòng cổ
                <span className="ml-1 text-sm">
                  x 2
                </span>
              </p>
            </div>

            <div className="flex items-center justify-between text-black text-sm-md font-medium py-3 border-b border-gray-300">
              <p>Tổng</p>
              <Price
                price="6,500,000"
                color="black"
              />
            </div>
            <div className="flex items-center justify-between text-black text-sm-md font-medium py-3 border-b border-gray-300">
              <p>Tổng phụ</p>
              <Price
                price="6,500,000"
                color="black"
              />
            </div>

            <div className="flex items-center justify-between text-black text-sm-md font-medium py-3 border-b border-gray-300">
              <p>Giao hàng</p>
              <p className="opacity-50">Giao hàng miễn phí</p>
            </div>
            <div className="flex items-center justify-between text-black text-sm-md font-medium py-3 border-b-2 border-gray-300">
              <p>Tổng</p>
              <Price
                price="6,500,000"
                color="black"
              />
            </div>
          </div>
          <div className="w-1/2 px-10">
            <Input
              className="border border-gray-400 rounded-lg text-md text-white bg-white text-black"
              label="Địa chỉ nhận hàng"
              name="shipping-address"
              dark={1}
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              placeholder="Địa chỉ"

            />

            <Input
              className="border border-gray-400 rounded-lg text-md text-white bg-white text-black"
              label="Số điện thoại"
              name="phone"
              dark={1}
              type="phone"
              classNameContainer="mt-5"
              placeholder="Số điện thoại"

            />
            <ul>
              <li className="py-2 border-b border-gray-300">
                <input id="payment_method_cod" type="radio" name="payment_method" checked="checked" value="cod" />
                <label className="ml-2 text-black font-medium text-sm-md" for="payment_method_cod">Trả tiền khi nhận hàng</label>
                <p className="mt-2 text-sm-md">Trả tiền mặt khi giao hàng</p>

              </li>
              <li className="py-2 ">
                <input id="payment_method_card" type="radio" name="payment_method" value="card" />
                <label className="ml-2 text-black font-medium text-sm-md" for="payment_method_card">Chuyển khoản ngân hàng</label>
                <p className="mt-2 text-sm-md">Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi. Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh toán. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.</p>
              </li>
            </ul>

            <button className="mt-4 px-8 py-2 font-medium uppercase text-white bg-[#d26e4b] hover:bg-[#a8583c]">
              Đặt hàng
            </button>
          </div>
        </div>
      </Container>
   </div>
  )
}
