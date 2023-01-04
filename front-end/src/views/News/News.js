import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination'
import ProductCard from '../../components/Card/ProductCard'
import { useFetchProducts, useProducts, useFetchAllProductType, useAllProductType } from '../../store/product/hook'
import { ADD_ITEM_TO_JUST_VIEW } from '../../utils/storage'
import Price from '../../components/Price/Price'
import LoadingPage from './../../components/LoadingPage/Loading';
import Dropdown from './../../components/Dropdown/Dropdown';
import { SORT_PRODUCT_PAGE_PRODUCT } from '../../constants';
import CheckBox from './../../components/Checkbox/Checkbox';
import { updateSearchData, resetSearchData } from '../../store/search/index'
import { useUpdateQuery, useSearchData, useUpdateSearch } from '../../store/search/hook'
import { useDispatch } from 'react-redux'
import OnTop from '../../components/OnTop/OnTop'
export default function News() {
  useFetchProducts()
  useFetchAllProductType()
  useUpdateQuery()
  useUpdateSearch()

  const searchData = useSearchData()

  const products = useProducts()

  const productTypes = useAllProductType()
  const [reset, setReset] = useState(false)
  const dispatch = useDispatch()
  let productStorage = ADD_ITEM_TO_JUST_VIEW.get()

  const updateFieldSearch = (field, value) => {
    dispatch(updateSearchData({ [field]: value }))
  }

  const handleClear = (e) => {
    e.preventDefault();
    dispatch(resetSearchData())
    setReset(true)
  }
  const handleChangeCheckbox = (key, value, checked) => {
    const _currentValue = searchData?.[key] ? [...searchData?.[key]] : []
    if (checked) {
      // push value to array
      _currentValue.push(value)
    } else {
      // remove value to array
      const index = _currentValue.indexOf(value)
      if (index !== -1) {
        _currentValue.splice(index, 1)
      }
    }
    dispatch(updateSearchData({ [key]: _currentValue }))
  }

  if (!productTypes || !products) {
    return <LoadingPage />
  }

  return (
    <div className="w-full bg-green-5 px-5">
      <div className="fixed bottom-10 right-10 z-9">
        <OnTop />
      </div>
      <div className="max-w-screen-3xl w-full mx-auto py-5">
        

      <div className="flex items-center justify-between">
          <div className="flex items-center text-xl" id="top">
            <Link to="/" className="opacity-50 hover:opacity-100">TRANG CHỦ</Link>
          </div>
        </div>
        <div className="flex mt-5">
          <div className="w-1/5 flex flex-col mr-5"></div>

          <div className=" -mx-2 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 ">
            <h2 className=" md:text-4xl sm:text-3xl text-2xl font-medium opacity-80 text-black-1 uppercase">
                            Sale khổng lồ mừng khai trương đến hết tháng 6
            </h2>

          </div>
        </div>
      


        </div>
      </div>
      
  )
}