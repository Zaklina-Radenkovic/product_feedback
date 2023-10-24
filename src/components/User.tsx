import { UserType } from "@/types/models";
import Image from "next/image";

type UserProps = {
  user: UserType;
};

const User = ({ user }: UserProps) => {
  const { image, name, username } = user || {};

  return (
    <div className="user">
      <Image
        src={`/assets/images/${image}`}
        alt={name}
        width="35"
        height="35"
        className="user-img"
        priority={true}
      />

      <h5 className="text-secondary font-bold">{name}</h5>
      <h6>@{username}</h6>
    </div>
  );
};

export default User;
