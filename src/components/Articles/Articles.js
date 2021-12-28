import "../../styles/Articles.css";
import ArticleCard from "./ArticleCard";


function Articles() {
  return (
    <div className="articles">
      <ArticleCard
        date="20th December 2021"
        buttonRedirect="https://www.misstamchiak.com/champion-bolo-bun/"
        image="https://via.placeholder.com/300x200"
        author="Miss Tam Chiak"
        description="Champion Bolo Bun – Sink Your Teeth Into Awesome Bolo Buns at Tanjong Pagar (It’s So Fluffy, We’re Gonna Die!)"
      />

      <ArticleCard
        date="08th August 2021"
        buttonRedirect="https://www.8days.sg/eatanddrink/newsandreviews/champion-bolo-bun-s-young-boss-21-on-how-she-set-up-s-pore-s-15386246?redir=1"
        image="https://via.placeholder.com/300x200"
        author="8 DAYS"
        description="Champion Bolo Bun’s Young Boss, 21, On How She Set Up S’pore’s Buzziest Cafe"
      />

      <ArticleCard
        date="11th April 2021"
        buttonRedirect="https://danielfooddiary.com/2021/04/11/championbolobun/"
        image="https://via.placeholder.com/300x200"
        author="Daniel Food Diary"
        description="Champion Bolo Bun – Hong Kong Bolo Bao Specialty Shop, 3-Storey Modern Cafe With MUJI Vibes At Tanjong Pagar"
      />
    </div>
  );
}

export default Articles;
