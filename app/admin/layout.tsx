import React from "react";
import AdminNav from "../components/AdminNav";

export const metadata = {
  title: "Eshop-Admin",
  description: "Eshop Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <AdminNav />
      </div>
      {children}
    </div>
  );
};

export default AdminLayout;
