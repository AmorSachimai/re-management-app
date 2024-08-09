import { FunctionComponent } from 'react';

export interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = (props) => {
    return (
        <footer>
            <div className="test_footer">Footer</div>
        </footer>
    );
};
