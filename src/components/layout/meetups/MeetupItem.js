import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../../../ui/Card";
import FavoritesContext from "../../../store/favorite-context";
function Meetupitem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        tittle: props.tittle,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.tittle} />
        </div>
        <div className={classes.content}>
          <h3>{props.tittle}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove From Favorite " : "To Favorites"}
          </button>
        </div>
      </Card>

      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.tittle} />
        </div>
        <div className={classes.content}>
          <h3>{props.tittle}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>Add To Favorites</button>
        </div>
      </Card>
    </li>
  );
}
export default Meetupitem;
