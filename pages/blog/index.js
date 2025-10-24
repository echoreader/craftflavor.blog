import { useEffect } from 'react';
import { useRouter } from 'next/router';

export async function getServerSideProps() { return { redirect: { destination: '/blog/page/1', permanent: false, }, }; } export default function BlogIndex() { return null; }