// pages/your-data-page.tsx
"use client";
import { useEffect, useState } from 'react';
import { MenuType } from '@/app/types/MenuType';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/icons';

const AwesomeIcon = (param : string) => {
    return <FontAwesomeIcon icon={param} />;
    // return <i className={param}></i>
};

const GetMenu = () => {
    const [data, setData] = useState<MenuType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('../api/modules/dashboard');
            const result: MenuType[] = await response.json();
            setData(result);
        };

        fetchData();
    }, []);
    // console.log(data);
    return (
        <>
            {data.map(item => (
                <li>

                    <Link className="block p-4 text-sm font-medium text-white hover:bg-gray-600" href={item.id}>{AwesomeIcon(item.icon)} {item.name_th}</Link>

                </li>
            ))}
        </>
    );
};

export default GetMenu;
