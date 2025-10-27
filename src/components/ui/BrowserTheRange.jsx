import Link from "next/link"
const BrowserTheRange = () => {
    return (
        <section className="browse-the-range">
            <div className="section-header">
                <h3>Browse The Range</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
            <div className="section-content">
                <div className="range-items">
                    <Link href="#" className="range-item">
                        <img src="./assets/images/Dining.png" alt="range-item"/>
                            <span>Dining</span>
                    </Link>
                    <Link href="#" className="range-item">
                        <img src="./assets/images/Image-living room.png" alt="range-item"/>
                            <span>Living</span>
                    </Link>
                    <Link href="#" className="range-item">
                        <img src="./assets/images/Bedroom.png" alt="range-item"/>
                            <span>Bedroom</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BrowserTheRange;