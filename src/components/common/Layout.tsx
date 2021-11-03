import React, { ReactChildren, ReactChild } from "react";
import Link from "next/link";

interface ChildrenProps {
  children: ReactChildren | ReactChild;
}

function Layout({ children }: ChildrenProps) {
  return (
    <div>
      <nav>
        <Link href="/about" />
        <Link href="/profile" />
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
