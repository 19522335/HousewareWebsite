import React, { useState, useEffect } from 'react'
import Input from '../../../components/Input/Input'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Dropdown from '../../../components/Dropdown/Dropdown'
import { useFetchAllProductType, useFetchProduct, useAllProductType, useProduct } from './../../../store/product/hook';
import productApi from '../../../api/productApi'
import Button from '../../../components/Button/Button'
import { useParams } from 'react-router-dom';
import { showToastSuccess, showToastError } from '../../../components/CustomToast/CustomToast';

export default function AdminEditProduct() {
  useFetchAllProductType()
  useFetchProduct()
  const product = useProduct()

  const productTypes = useAllProductType()
  const { id } = useParams()
  const [nameProduct, setNameProduct] = useState()
  const [price, setPrice] = useState()
  const [sale, setSale] = useState()
  const [description, setDescription] = useState()
  const [metal, setMetal] = useState()
  const [size, setSize] = useState()
  const [typeProductId, setTypeProductId] = useState()
  const [nameType, setNameType] = useState()
  const [pending, setPending] = useState(false)

  useEffect(() => {
    if(product) {
      setNameProduct(product?.data?.nameProduct)
      setPrice(product?.data?.price)
      setSale(product?.data?.sale)
      setDescription(product?.data?.description)
      setMetal(product?.data?.metal)
      setSize(product?.data?.size)
      setTypeProductId(product?.data?.typeProductId)
      productTypes?.data.map((type) => {
        if (type?._id === product?.data?.typeId) {
          setNameType(type?.nameType)
        }
      })
    }
  }, [product])

  const handleEditProduct = async (e) => {
    e.preventDefault()
    setPending(true)
    try {
      await productApi.editProduct(id, {
        nameProduct,
        typeId: typeProductId,
        description,
        price,
        sale,
        metal,
        size,
      })
      setPending(false)
      showToastSuccess("Cập nhật thành công")
    } catch (error) {
      console.log(error)
      showToastError("Cập nhật thất bại")
    }
  }

  return (
    <AdminContainer>
      <form>
        <Input
          className="border border-gray-400 rounded-lg text-md text-white"
          label="Product Name"
          name="product-name"
          dark={1}
          type="text"
          value={nameProduct}
          placeholder="Search by product name"
          onChange={(e) => setNameProduct(e.target.value)}
        />
        <div className="mt-5">
          <div className="mb-3">
            <label for="product-des">Product Description:</label>
          </div>

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Product Description'
            id="product-des"
            name="product-des"
            value={description}
            className="p-3 w-full h-40 border-gray-400 rounded-lg text-md text-white bg-dark-1 border"
          />
        </div>

        <p className="mb-3 mt-5">
          Product Type
        </p>
        <Dropdown
          title="Product Type"
          listDropdown={productTypes?.data}
          label="nameType"
          value="typeId"
          onSelect={setTypeProductId}
          titleDefault={nameType}
        />

        <Input
          className="border border-gray-400 rounded-lg text-md text-white"
          label="Product Metal"
          name="product-metal"
          dark={1}
          type="text"
          placeholder="Product Metal"
          classNameContainer="mt-5"
          onChange={(e) => setMetal(e.target.value)}
          value={metal}
        />

        <Input
          className="border border-gray-400 rounded-lg text-md text-white"
          label="Product Size"
          name="product-size"
          dark={1}
          type="text"
          placeholder="Product Size"
          classNameContainer="mt-5"
          onChange={(e) => setSize(e.target.value)}
          value={size}
        />

        <Input
          className="border border-gray-400 rounded-lg text-md text-white"
          label="Product Price"
          name="product-price"
          dark={1}
          type="number"
          placeholder="Price"
          classNameContainer="mt-5"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />

        <Input
          className="border border-gray-400 rounded-lg text-md text-white"
          label="Sale"
          name="product-sale"
          dark={1}
          type="number"
          placeholder="Sale"
          classNameContainer="mt-5"
          onChange={(e) => setSale(e.target.value)}
          value={sale}
        />
        <Button
          onClick={(e) => handleEditProduct(e)}
          pending={pending}
          isLoading={pending}
        >
          Update
        </Button>
      </form>
    </AdminContainer>
  )
}
