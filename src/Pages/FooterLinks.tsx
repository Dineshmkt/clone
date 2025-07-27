import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const FooterLinks = () => {
  return (

  <>
      <div className="border-t pt-6 px-4 lg:px-16 text-sm text-gray-800">
   
      <div className="text-center my-12">
        <h2 className="text-xl font-semibold mb-8">How it Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
       
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.2.0/images/pdp/place-order.svg" alt="Open App" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Open the app</h3>
            <p className="text-gray-600">
              Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more
            </p>
          </div>

      
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.2.0/images/pdp/do-not-blink.svg" alt="Place Order" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Place an order</h3>
            <p className="text-gray-600">
              Add your favourite items to the cart & avail the best offers
            </p>
          </div>

      
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.2.0/images/pdp/enjoy.svg" alt="Free Delivery" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Get free delivery</h3>
            <p className="text-gray-600">
              Experience lighting-fast speed & get all your items delivered in 10 minutes
            </p>
          </div>
        </div>
      </div>

    
    </div>
    <div className="border-t pt-6 px-4 lg:px-16 text-sm text-gray-800">
    
      <div className="mb-6">
        <h3 className="font-bold mb-2">Popular Searches</h3>

        <div className="mb-2">
          <strong>Products:</strong>{" "}
          <span className="text-gray-600">
            Avocado | Strawberry | Pomegranate | Beetroot | Ash gourd | Bottle gourd | Lady finger | Potato | Lemon | Dalchini | Fennel seeds | Blueberry | Papaya | Dragon fruit | Mushroom | Lettuce
          </span>
        </div>

        <div className="mb-2">
          <strong>Brands:</strong>{" "}
          <span className="text-gray-600">
            Yakult | My Muse | Aashirvaad Atta | Too Yumm | Lays | Figaro Olive Oil | Nandini Milk | Amul | Mother Dairy Near Me | Fortune Oil | Superyou | Durex Condoms | Ferns and Petals
          </span>
        </div>

        <div>
          <strong>Categories:</strong>{" "}
          <span className="text-gray-600">
            Grocery | Cigarettes | Chips | Curd | Hukka flavour | Paan shop near me | Eggs price | Cheese slice | Fresh fruits | Fresh vegetables | Refined oil | Butter price | Paneer price
          </span>
        </div>
      </div>

   
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
        {[
          "Fruits & Vegetables",
          "Baby Food",
          "Breakfast & Sauces",
          "Cleaning Essentials",
          "Homegrown Brands",
          "Atta, Rice, Oil & Dals",
          "Dairy, Bread & Eggs",
          "Tea, Coffee & More",
          "Home Needs",
          "Paan Corner",
          "Masala & Dry Fruits",
          "Cold Drinks & Juices",
          "Biscuits",
          "Electricals & Accessories",
          "Sweet Cravings",
          "Munchies",
          "Makeup & Beauty",
          "Hygiene & Grooming",
          "Frozen Food & Ice Creams",
          "Meats, Fish & Eggs",
          "Bath & Body",
          "Health & Baby Care",
        ].map((category, index) => (
          <div key={index} className="text-gray-900 font-medium hover:underline cursor-pointer">
            {category}
          </div>
        ))}
      </div>

     
      <hr />
    </div>
    <footer className="bg-white border-t py-10 px-6 md:px-20 text-sm text-gray-600">
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        
        <div className="flex flex-col items-start gap-4">
          <div className="text-2xl font-bold text-pink-600">zepto</div>
          <div className="flex space-x-4 text-xl text-gray-500">
            <FaInstagram />
            <FaTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
          <p className="text-xs mt-2">© Zepto Marketplace Private Limited</p>
        </div>

       
  <div className="flex flex-1 justify-evenly flex-wrap gap-x-12 gap-y-6">
     
      <div className="flex flex-col gap-2">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">Delivery Areas</a>
        <a href="#" className="hover:text-black">Careers</a>
        <a href="#" className="hover:text-black">Customer Support</a>
        <a href="#" className="hover:text-black">Press</a>
      </div>

   
      <div className="flex flex-col gap-2">
        <a href="#" className="hover:text-black">Privacy Policy</a>
        <a href="#" className="hover:text-black">Terms of Use</a>
        <a href="#" className="hover:text-black">Responsible Disclosure Policy</a>
        <a href="#" className="hover:text-black">Mojo - a Zepto Blog</a>
        <a href="#" className="hover:text-black">Sell on Zepto</a>
        <a href="#" className="hover:text-black">Deliver with Zepto</a>
      </div>
    </div>

      
        <div className="flex flex-col gap-4">
          <p className="font-medium">Download App</p>
          <a href="#" className="border px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow">
            <img
              src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.2.0/tr:w-180,ar-180-46,pr-true,f-auto,q-80//images/app-stores/download-play-store.svg"
              className="h-8"
              alt="Google Play"
            />
          </a>
          <a href="#" className="border px-4 py-2 rounded-lg flex items-center gap-2 hover:shadow">
            <img
              src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/13.2.0/tr:w-180,ar-180-46,pr-true,f-auto,q-80//images/app-stores/download-app-store.svg"
              className="h-8"
              alt="App Store"
            />
          </a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default FooterLinks;


