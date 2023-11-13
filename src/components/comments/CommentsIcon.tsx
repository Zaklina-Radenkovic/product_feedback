import Image from 'next/image';
import commentsIcon from '../../../public/icon-comments.svg';

const CommentsIcon = ({
  children,
  className,
}: {
  children: number;
  className: string;
}) => {
  return (
    <div className="msg">
      <Image priority src={commentsIcon} alt="icon" />
      <span className={className}>{children}</span>
    </div>
  );
};

export default CommentsIcon;
