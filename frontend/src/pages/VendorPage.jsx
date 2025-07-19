import React from "react";

const VendorPage = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Vendor Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Orders</h2>
        <p>Here you can view and manage your orders.</p>
        {/* Implement order list and management here */}
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <p>Manage your products and inventory here.</p>
        {/* Implement product management here */}
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Customer Inquiries</h2>
        <p>View and respond to customer inquiries here.</p>
        {/* Implement customer inquiry management here */}
      </section>
    </div>
  );
};

export default VendorPage;
