'use client';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import suggestions from '../../../public/assets/images/icon-suggestions.svg';
import { useSortedFeedbackContext } from '@/state/sortedFeedback';
import ButtonFeedback from '../../components/button/ButtonFeedback';

const sortOptions = [
  {
    label: 'Most Upvotes',
    value: 'mostUpvotes',
  },
  {
    label: 'Least Upvotes',
    value: 'leastUpvotes',
  },
  {
    label: 'Most Comments',
    value: 'mostComments',
  },
  {
    label: 'Least Comments',
    value: 'leastComments',
  },
];

const Navbar = () => {
  const { setSortBy, sortBy, sortedFeedbacks } = useSortedFeedbackContext();

  const router = useRouter();

  const count = sortedFeedbacks?.length;

  const handleSortChange = (event: React.BaseSyntheticEvent) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="navbar pl-0 pr-[0.93rem] sm:pl-[1.56rem] md:rounded-lg">
      <div className="flex items-center">
        <Image
          priority
          src={suggestions}
          alt="icon"
          className="hidden md:inline-block"
        />
        <div className="hidden md:ml-3 md:block md:font-bold">
          <span className="mr-3 inline-block">{count}</span> Suggestions
        </div>
        <div>
          <label className="ml-7 text-xs sm:ml-8 " htmlFor="search">
            Sort by:
          </label>

          <select
            onChange={(e) => setSortBy(e.target.value)}
            id="search"
            name="sort"
            value={sortBy}
            className="text-gray-900 rounded-lg border-none bg-secondary p-0 text-xs font-bold visited:border-none focus:outline-none sm:p-2.5 sm:text-sm"
            cursor-pointer
          >
            {sortOptions.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <ButtonFeedback onClick={() => router.push('/create-feedback')}>
        {' '}
        &#43; Add feedback{' '}
      </ButtonFeedback>
    </div>
  );
};

export default Navbar;
