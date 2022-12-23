import { useContext } from "react";
import FavoritesContext from "../store/favorite-context";
import MeetupList from "../components/layout/meetups/MeetupList";
function Favoriters() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You Got NO favorites</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }
  return (
    <div>
      <section>
        <h1>My Favorites</h1>
        {content}
      </section>
    </div>
  );
}

export default Favoriters;
