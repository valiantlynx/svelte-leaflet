import React from 'react';
import Link from 'next/link';

function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <div className="bg-base-200 flex min-h-[6rem] flex-wrap items-center justify-center">
            <div className="text-sm breadcrumbs">
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {index > 0 && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 mr-2 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                                    ></path>
                                </svg>
                            )}
                            <Link href={item.url}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Breadcrumbs;
