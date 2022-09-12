//------import library
import classNames from 'classnames/bind';

//------import component
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            {/* Logo */}
            {/* Search */}
         </div>
      </header>
   );
}

export default Header;