
import styles from './TechMarquee.module.css';
import androidIconPath from '@/assets/icons/svgs/android.svg';
import angularIconPath from '@/assets/icons/svgs/angular.svg';
import awsIconPath from '@/assets/icons/svgs/aws.svg';
import cppIconPath from '@/assets/icons/svgs/cpp.svg';
import csharpIconPath from '@/assets/icons/svgs/csharp.svg';
import dockerIconPath from '@/assets/icons/svgs/docker.svg';
import flutterIconPath from '@/assets/icons/svgs/flutter.svg';
import gcpIconPath from '@/assets/icons/svgs/gcp.svg';
import javaIconPath from '@/assets/icons/svgs/java.svg';
import nginxIconPath from '@/assets/icons/svgs/nginx.svg';
import linuxIconPath from '@/assets/icons/svgs/linux.svg';
import mysqlIconPath from '@/assets/icons/svgs/mysql.svg';
import nodejsIconPath from '@/assets/icons/svgs/nodejs.svg';
import postgresIconPath from '@/assets/icons/svgs/postgres.svg';
import pythonIconPath from '@/assets/icons/svgs/python.svg';
import reactIconPath from '@/assets/icons/svgs/react.svg';
import rustIconPath from '@/assets/icons/svgs/rust.svg';
import springbootIconPath from '@/assets/icons/svgs/springboot.svg';
import typescriptIconPath from '@/assets/icons/svgs/typescript.svg';

const TECH_ITEMS_LIST = [
    { name: 'TypeScript', color: '#3178C6', icon: <img src={typescriptIconPath} alt="" /> },
    { name: 'Java', color: '#E76F00', icon: <img src={javaIconPath} alt="" /> },
    { name: 'Rust', color: '#A04F12', icon: <img src={rustIconPath} alt="" /> },
    { name: 'C++', color: '#659AD2', icon: <img src={cppIconPath} alt="" /> },
    { name: 'C#', color: '#9A5196', icon: <img src={csharpIconPath} alt="" /> },
    { name: 'Python', color: '#FCD128', icon: <img src={pythonIconPath} alt="" /> },
    { name: 'Flutter', color: '#47C5FB', icon: <img src={flutterIconPath} alt="" /> },
    // pglangs^^
    { name: 'Node.js', color: '#8CC84B', icon: <img src={nodejsIconPath} alt="" /> },
    { name: 'React', color: '#00D8FF', icon: <img src={reactIconPath} alt="" /> },
    { name: 'Angular', color: '#E23237', icon: <img src={angularIconPath} alt="" /> },
    { name: 'Spring Boot', color: '#6AB02C', icon: <img src={springbootIconPath} alt="" /> },
    // libs/frameworks^^
    { name: 'Amazon Web Services', color: '', icon: <img src={awsIconPath} alt="" /> },
    { name: 'Google Cloud Platform', color: '', icon: <img src={gcpIconPath} alt="" /> },
    // platforms^^
    { name: 'Linux', color: '#F8BF11', icon: <img src={linuxIconPath} alt="" /> },
    { name: 'Android', color: '#A4C639', icon: <img src={androidIconPath} alt="" /> },
    // os's^^
    { name: 'Postgres', color: '#336791', icon: <img src={postgresIconPath} alt="" /> },
    { name: 'MySql', color: '#F8981D', icon: <img src={mysqlIconPath} alt="" /> },
    // db's^^
    { name: 'Docker', color: '#2396ED', icon: <img src={dockerIconPath} alt="" /> },
    { name: 'nginx', color: '#009639', icon: <img src={nginxIconPath} alt="" /> },
    // others^^
];

const minItems = 12;
const multiplier = Math.max(1, Math.ceil(minItems / TECH_ITEMS_LIST.length));

const SAFE_ITEMS = new Array(multiplier)
    .fill(TECH_ITEMS_LIST)
    .flat()
    .map((item) => ({
        ...item,
        id: crypto.randomUUID()
    }));

export default function TechMarquee() {
    return (
        <div className={styles.marqueeContainer}>
            <ul className='sr-only'>
                {TECH_ITEMS_LIST.map((item) => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>

            <div className={styles.rail} aria-hidden="true">
                <div className={styles.group}>
                    {SAFE_ITEMS.map((item) => (
                        <div
                            key={`g1-${item.id}`}
                            className={styles.chip}
                            style={{ '--hover-color': item.color } as React.CSSProperties}
                        >
                            <div className={styles.tile}>{item.icon}</div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.group}>
                    {SAFE_ITEMS.map((item) => (
                        <div
                            key={`g2-${item.id}`}
                            className={styles.chip}
                            style={{ '--hover-color': item.color || '#57534e' } as React.CSSProperties}
                        >
                            <div className={styles.tile}>{item.icon}</div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}