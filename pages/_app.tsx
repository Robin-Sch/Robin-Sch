import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout): ReactNode {
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const getLayout = Component.getLayout ?? ((page) => page);

	return <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200">{getLayout(<Component {...pageProps} />)}</div>;
}
