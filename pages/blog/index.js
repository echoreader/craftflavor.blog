import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function BlogIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/blog/page/1');
  }, []);

  return null;
}
