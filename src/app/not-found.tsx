'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import emptyIllustration from '../../public/assets/images/illustration-empty.svg';
import ButtonFeedback from '../../src/components/button/ButtonFeedback';
import GoBackButton from '@/components/button/GoBackButton';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex h-screen flex-col content-center items-center justify-items-center py-28">
      <Image
        priority
        src={emptyIllustration}
        alt="Detective looking through magnifying glass indicating no feedback (icon)"
        className="inline-block self-center justify-self-center pb-8"
      />
      <h2 className="pb-4 font-bold text-secondary">
        There is no page. Maybe you have a broken link.
      </h2>
      <p className="pb-6 text-center leading-5">
        Got a suggestion? Found a bug that needs to be squashed? <br />
        Go to our home page
      </p>
      <GoBackButton stroke="blue" onClick={() => window.location.replace('/')}>
        Go Back
      </GoBackButton>

      <p className="py-6 text-center leading-5">
        Or add a feedback to improve our app.{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#f3ff09"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="inline-block h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
      </p>
      <ButtonFeedback
        onClick={() => window.location.replace('/create-feedback')}
      >
        {' '}
        &#43; Add feedback{' '}
      </ButtonFeedback>
    </div>
  );
}
