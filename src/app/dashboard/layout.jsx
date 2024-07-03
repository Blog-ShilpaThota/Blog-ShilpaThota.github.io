import Heading2 from "../../components/Heading/Heading2";
import { Route } from "../../routers/types";
import Link from "../../components/Link";
import React, { ReactNode } from "react";
import usePathname from "../../hooks/usePathname";

const subPages= [
  {
    href: "/dashboard/posts",

    emoij: "📕",
    pageName: "Posts",
  },
  {
    href: "/dashboard/submit-post",

    emoij: "✍",
    pageName: "Submit post",
  },
  {
    href: "/dashboard/edit-category",

    emoij: "⛷️",
    pageName: "Edit Category",
  },
];

const Layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className={`nc-PageDashboard`}>
      <header className="text-center max-w-2xl mx-auto - mb-14 sm:mb-16 lg:mb-24">
        <Heading2 emoji="">Dashboard</Heading2>
      </header>

      <div className="flex flex-col xl:flex-row">
        {/* SIDEBAR */}
        <div className="flex-shrink-0 max-w-xl xl:w-80 xl:pr-8">
          <ul className="flex flex-wrap gap-4 text-base text-neutral-700 dark:text-neutral-400">
            {subPages.map(({ href, pageName, emoij }, index) => {
              return (
                <li key={index}>
                  <Link
                    className={`px-6 py-3 font-medium rounded-full flex items-center ${
                      pathname === href
                        ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                        : "hover:text-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                    }`}
                    href={href}
                  >
                    <span className="w-8 mr-2 text-lg">{emoij}</span>
                    <span className="flex-1 text-center"> {pageName}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="border-t border-neutral-500 dark:border-neutral-300 md:hidden"></div>

        <div className="flex-1" style={{paddingTop:'10px'}}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;