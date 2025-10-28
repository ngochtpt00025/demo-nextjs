import Image from 'next/image';

import Banner from '@/components/ui/Banner';
import BrowserTheRange from '@/components/ui/BrowserTheRange';
import { listProduct } from './products/page';
import UProduct from './products/[id]/page';
const HomePage = () => {
  let XXX = listProduct.map((product, i) => <UProduct key={i} id={product.id} />)
  return (
    <>
      <Banner />
      <BrowserTheRange />
      <section className="products container">
        <div className="section-header">
          <h3>Our Products</h3>
        </div>
        <div className="list-products">
          {XXX}
        </div>
        <div className="pagination">
          <button className="show-more">Show more</button>
        </div>
      </section>
      <section className="room-inspiration">
        <div className="left-col">
          <h1>50+ Beautiful rooms<br/>inspiration</h1>
          <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
          <button className="btn-room-inspiration">Explore More</button>
        </div>

        <div className="slideshow">
          <div className="viewer" id="viewer">
            <img id="mainImg" src="./assets/images/products/Grifo.png" alt="main image"/>
              <div className="info">
                <div className="caption">
                  <small id="capIndex">01 — Bed Room</small>
                  <h3 id="capTitle">Inner Peace</h3>
                </div>
                <button className="btn-next">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
          </div>

          <div className="thumbs-wrap">
            <div className="thumbs-viewport" id="thumbsViewport">
              <div className="thumbs-list" id="thumbsList">
              </div>
            </div>
            <div className="pagination2">
            </div>

            <button className="ctrl-btn" id="nextBtn" aria-label="Next">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00006 5L16.0001 12L9.00006 19" stroke="#B88E2F" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="share-setup">
        <img src="./assets/images/Share.png" alt="share-setup"/>
      </section>
    </>
  )
}

export default HomePage;