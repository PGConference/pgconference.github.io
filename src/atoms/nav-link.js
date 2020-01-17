import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default ({ href, activeClassName = "active", children }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} ${activeClassName}`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};
