import React from "react";
import { Link, useStaticQuery } from "gatsby";
import { navItemsQuery } from "./Nav";
import Subscribe from "./Subscribe";
import "../styles/components/footer.scss";

const Footer = () => {
  const data = useStaticQuery(navItemsQuery);
  const { navItems } = data.sanitySiteSettings;
  return (
    <footer>
      <div id="flex">
        <div id="left">
          <Link to="/">We Are America</Link>
          <p>Subscribe to our newsletter for monthly updates</p>
          <Subscribe />
        </div>
        <nav>
          {navItems.map(item => {
            const hasSubmenu = item.subItems.length > 0;
            return (
              <div key={item.path}>
                <Link to={`/${item.path}`}>
                  <span>{item.title}</span>
                </Link>
                {hasSubmenu && (
                  <div className="footer_submenu">
                    {item.subItems.map(subitem => (
                      <Link key={subitem.path} to={`/${subitem.path}`}>
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
      <p>© 2019-2022 We Are America Project. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
