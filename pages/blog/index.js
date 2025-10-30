import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function BlogRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/blog/page/1');
  }, [router]);

  return null;
}
