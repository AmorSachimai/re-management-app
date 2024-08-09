import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Fragment, ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
    return (
        <Fragment>
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
}
