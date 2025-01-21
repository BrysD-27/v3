import Head from 'next/head';
import { HeaderProps } from './types';
import { metadata } from '@/config/metadata';

const Header: React.FC<HeaderProps> = ({title,  description, url}) => {
  return (
    <Head>
      <meta name="description" content={description || metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="author" content={metadata.author} />
      <meta property="og:title" content={title || metadata.title} />
      <meta property="og:description" content={description || metadata.description} />
      <meta property="og:url" content={url || metadata.url} />
      <meta property="og:type" content="website" />
    </Head>
  );
}

export default Header;