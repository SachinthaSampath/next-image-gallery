import { ReactNode } from "react";

export default function MarketLayout({ children }: { children: ReactNode }) {
  return <div className="login-area bg-dark text-light">{children}</div>;
}
