import { useNavigate } from "react-router-dom"
import BuyAgainCategories from "./BuyAgainCategories"

const CategoryPage = () => {
    const navigate=useNavigate()
     const value = [
    {
      id:1,
      image:"https://cdn.zeptonow.com/production/cms/category/474e6e58-1894-4378-86f1-168cc7266d1a.png",
      title:"dairy",
    },
    {
      id:2,
      image:"https://cdn.zeptonow.com/production/cms/category/dc4a299d-521f-4a64-8205-c5ba8e1d13e3.png",
      title:"Atta"
    },
    {
      id:3,
      image:"https://cdn.zeptonow.com/production/cms/category/8d4d3977-5197-49d9-9867-8a670524e48b.png",
      title:"Masala"
    },
    {
      id:4,
      image:"https://cdn.zeptonow.com/production/cms/category/ec7b14c6-2640-4165-b3ae-68c09a249ae0.png",
      title:"Sweet"
    },
    {
      id:5,
      image:"https://cdn.zeptonow.com/production/cms/category/59d2c0cc-e776-407c-9142-7e69898d9eab.png",
      title:"juices"
    },
     {
    id: 6,
    image:
      "https://cdn.zeptonow.com/production/cms/category/59d2c0cc-e776-407c-9142-7e69898d9eab.png",
    title: "Breakfast & Sauces",
  },
  {
    id: 7,
    image:
      "https://cdn.zeptonow.com/production/cms/category/90b2faee-1461-465a-a8c6-8c84716dd7dc.png",
    title: "Tea, Coffee & More",
  },
  {
    id: 8,
    image:
      "https://cdn.zeptonow.com/production/cms/category/9b88fff5-73f5-46fd-999f-1622db4203d7.png",
    title: "Frozen Food",
  },
  ]

  const handleClick=(title:string)=>{
     navigate(`/value/${title}`);
  }
  return (
    <>
     <div className="bg-white w-full px-4 pt-6">

  <div className="flex gap-x-4 justify-center flex-wrap">
    {value.map((item) => (
      <div
        key={item.id}
        className="w-[100px] flex flex-col items-center text-center"
        onClick={()=>handleClick(item.title)}
      >
        <div className="w-[80px] h-[100px] rounded-xl overflow-hidden bg-white cursor-pointer shadow-sm hover:shadow-[0_0_10px_#d8b4fe] transition-all duration-300 hover:h-[110px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>
        
      </div>
    ))}
  </div>
   {/* <ProductGrid products={productsToShow} /> */}

  <div className="mt-6 flex justify-center">
    <img
      src="https://cdn.zeptonow.com/production/tr:w-1280,ar-9600-1887,pr-true,f-auto,q-80/inventory/banner/42aa0b53-0a9e-46e5-8aa6-41448fc4643b.png"
      alt="Paan Corner"
      className="rounded-2xl w-full max-w-6xl object-cover"
    />
  </div>
</div>
<BuyAgainCategories/>
</>
  )
}

export default CategoryPage
