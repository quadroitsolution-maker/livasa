import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  onClick, 
  className = '',
  icon,
  ...props 
}) {
  const btnClass = `${styles.button} ${styles[variant]} ${className}`;
  
  const content = (
    <>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </>
  );

  if (to) {
    return <Link to={to} className={btnClass} {...props}>{content}</Link>;
  }
  
  if (href) {
    return <a href={href} className={btnClass} {...props}>{content}</a>;
  }

  return (
    <button onClick={onClick} className={btnClass} {...props}>
      {content}
    </button>
  );
}
