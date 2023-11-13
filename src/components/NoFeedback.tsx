import Image from 'next/image';
import emptyIllustration from '../../public/assets/images/illustration-empty.svg';
import ButtonFeedback from './button/ButtonFeedback';
import { useRouter } from 'next/navigation';

const NoFeedback = () => {
  const router = useRouter();

  return (
    <div className="suggestion grid content-center justify-items-center py-28">
      <Image
        priority
        src={emptyIllustration}
        alt="Detective looking through magnifying glass indicating no feedback (icon)"
        className="inline-block self-center justify-self-center pb-8"
      />
      <h2 className="pb-4 font-bold text-secondary">
        There is no feedback yet.
      </h2>
      <p className="pb-12 text-center leading-5">
        Got a suggestion? Found a bug that needs to be squashed? <br />
        We love hearing about new ideas to improve our app.
      </p>
      <ButtonFeedback onClick={() => router.push('/create-feedback')}>
        {' '}
        &#43; Add feedback{' '}
      </ButtonFeedback>
    </div>
  );
};

export default NoFeedback;
