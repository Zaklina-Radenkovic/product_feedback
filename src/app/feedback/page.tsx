'use client';
import { useEffect } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <LoadingSpinner />
    </div>
  );
};

export default page;
