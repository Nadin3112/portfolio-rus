import React from 'react';
import { S } from '../HeaderMenu_Styles';

const items = [
  { title: "Главная", href: "home" },
  { title: "Обо мне", href: "about" },
  { title: "Навыки", href: "skills" },
  { title: "Проекты", href: "projects" },
  { title: "Контакты", href: "contacts" }
]

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item, index) => {
        return <S.MenuItem key={index}>
          <S.NavLink  activeClass="active"
                      spy={true}
                      offset={-1}
                      to={item.href}
                      smooth={true}
                      href={"#"}>
                        {item.title}
          </S.NavLink>
        </S.MenuItem>
      })}
    </ul>
  );
};


