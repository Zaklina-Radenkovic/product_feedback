import Image from 'next/image';
import { UserType } from '@/types/models';

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

      <h5 className="text-sm font-bold text-secondary sm:text-base">{name}</h5>
      <h6 className="text-sm sm:text-base">@{username}</h6>
    </div>
  );
};

export default User;
