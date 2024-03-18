import retro from "./../../assets/images/image-retro-pcs.jpg";
import toplaptop from "./../../assets/images/image-top-laptops.jpg";
import gaming from "./../../assets/images/image-gaming-growth.jpg";
import "./Article.css"

const Article = () => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
        <div className="article">
          <div className="image_article">
            <img className="gadgets"  src={retro} />
            <div className='gadgets_right' style={{paddingLeft: "20px"}}>
              <h2 className="number">01</h2>
              <h3 className="article_title">Reviving Retro PCs</h3>
              <p className='paragraph' >
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
          <div className="image_article">
            <img className="gadgets"  src={toplaptop} />
            <div className='gadgets_right' style={{paddingLeft: "20px"}}>
              <h2 className="number">02</h2>
              <h3 className="article_title">Top 10 Laptops of 2022</h3>
              <p className='paragraph'>
                Our best picks for various needs and budgets.
              </p>
            </div>
          </div>
          <div className="image_article">
            <img className="gadgets"  src={gaming} />
            <div className='gadgets_right' style={{paddingLeft: "20px"}}>
              <h2 className="number">03</h2>
              <h3 className="article_title">The Growth of Gaming</h3>
              <p  className='paragraph'>
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Article;