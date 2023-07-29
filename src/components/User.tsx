import { User } from "@/types/models";
import Image from "next/image";

const User = ({ image, name, username }: User) => {
  return (
    <div className="user">
      <Image
        src={`/assets/images/${image}`}
        alt={name}
        width="35"
        height="35"
        className="user-img"
      />

      <h5 className="text-secondary font-bold">{name}</h5>
      <h6>@{username}</h6>
    </div>
  );
};

export default User;
