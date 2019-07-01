import React from 'react';
import { NavLink } from "react-router-dom";
export default function () {
    let list = [
        { name: "信息页", path: "/Info" },
        { name: "新闻页", path: "/News" },
        { name: "测试页", path: "/Test" }
    ];
    return (
        <div style={{ height: ' 20px', background: "#fff" }} >
            {
                list.map((item, index) => {
                    return (
                        <NavLink key={index} to={item.path}>
                            {item.name}
                        </NavLink>
                    )
                })
            }
        </div>
    )

}