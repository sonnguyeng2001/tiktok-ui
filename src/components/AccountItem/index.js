//------import library
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

//------import component
import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
   return (
      <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
         <Image className={cx('avartar')} src={data.avatar} alt={data.full_name} />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>{data.nickname}</span>
               {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />}
            </h4>
            <span className={cx('username')}>{data.full_name}</span>
         </div>
      </Link>
   );
}

export default AccountItem;