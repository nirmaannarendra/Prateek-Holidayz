"use client";

import { createContext, useContext, type ReactNode } from "react";

interface PackageContextValue {
  packageTitle?: string;
}

const PackageContext = createContext<PackageContextValue>({});

export function PackageProvider({
  packageTitle,
  children,
}: {
  packageTitle?: string;
  children: ReactNode;
}) {
  return (
    <PackageContext.Provider value={{ packageTitle }}>
      {children}
    </PackageContext.Provider>
  );
}

export function usePackageContext(): PackageContextValue {
  return useContext(PackageContext);
}
