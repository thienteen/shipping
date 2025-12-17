import { MOCK_ORDERS } from "../utils/mock_orders";
import OrderCard from "./OrderCard";
import Pagination from "./Pagination";

const OrderList = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page container */}
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Orders
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Monitor and manage customer orders in real time.
            </p>
          </div>

          {/* Filter section */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Status filter */}
            <select className="h-9 rounded-full border border-gray-200 bg-white px-3 text-xs text-gray-700 shadow-sm focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 sm:text-sm">
              <option value="">All shipping statuses</option>
              <option value="CREATED">Created</option>
              <option value="PICKED">Picked</option>
              <option value="DELIVERING">Delivering</option>
              <option value="DELIVERED">Delivered</option>
              <option value="FAILED">Failed</option>
            </select>

            {/* Filter button */}
            <button
              type="button"
              className="inline-flex h-9 items-center gap-2 rounded-full bg-orange-500 px-3 text-xs font-medium text-white shadow-sm transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-1 sm:px-4 sm:text-sm"
            >
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-orange-400/80">
                {/* Filter icon (SVG) */}
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 5H16M6 10H14M8 15H12"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-gray-700 font-medium">Filter</span>
            </button>
          </div>
        </div>

        {/* Content container */}
        <div className="rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-gray-100 sm:p-5">
          {/* Summary row */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3 text-xs text-gray-500 sm:text-sm">
            <p>
              Showing{" "}
              <span className="font-medium text-gray-700">
                {MOCK_ORDERS.length} orders
              </span>
            </p>
            <p>Newest first</p>
          </div>

          {/* Order list */}
          <div className="space-y-3 sm:space-y-4">
            {MOCK_ORDERS.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>

          {/* Pagination - Placeholder for future implementation */}
          <div className="flex justify-end px-4 py-6">
            <Pagination
              totalRecords={100}
              pageSize={10}
              currentPage={1}
              onPageChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
