import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.cartItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p
        className={clsx({ [css.online]: isOnline, [css.offline]: !isOnline })}
      ></p>
    </div>
  );
};

export default FriendListItem;
