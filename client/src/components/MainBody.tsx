import './MainBodyStyles.css'
import image from '../assets/jumia image.png';
import "bootstrap/dist/css/bootstrap.min.css";
import banner from '../assets/UG_WK36_Super_savings_Small_Banner_218X184.gif'

const MainBody = () => {
  return (
    <>
        <div className='container1 '>
            <div className='list1'>
                <ul className='ul1'>
                    <li>Home & Office</li>
                    <li>Appliances</li>
                    <li>Supermarket</li>
                    <li>Phones & tablets</li>
                    <li>Electronics</li>
                    <li>Computing</li>
                    <li>Gaming</li>
                    <li>Fashion</li>
                </ul>
            </div>
            <img src={image} alt="jumia banner" className='banner ' />
            <div className='list2' >
                <ul className='ul2'>
                    <li>
                        Help center <br />
                        <a href='#'>Guide to Customer care</a>
                    </li>
                    <li>
                        Easy Return <br />
                        <a href='#'>Quick Refund</a>
                    </li>
                    <li>
                        Sell on Jumia <br />
                        <a href='#'>Millions of Customers</a>
                    </li>
                </ul>
            </div>
            <img src={banner} alt="banner image" className='image' />
        </div>
    </>
  )
}

export default MainBody