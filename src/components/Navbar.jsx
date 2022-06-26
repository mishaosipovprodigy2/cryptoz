import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import cryptocurrency from "../images/cryptocurrency.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={cryptocurrency} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoz</Link>
        </Typography.Title>
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">Home</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
