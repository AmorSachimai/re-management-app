import { FunctionComponent } from 'react';
import Styles from './Header.module.css';

export interface HeaderProps {}

export const Header: FunctionComponent<HeaderProps> = (props) => {
    return (
        <header>
            <h1>統合管理システム</h1>
            <nav className="nav_header">
                <div className="test_headera">
                    <ul className={Styles.navContainer}>
                        <li>問い合わせ</li>
                        <li>業務手順書</li>
                        <li>社内図書</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
