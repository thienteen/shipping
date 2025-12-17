import React from "react";
import type { Order } from "../utils/types";
import StatusBadge from "./StatusBadge";
interface OrderCardProps {
  order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => {
  const { customer, item } = order;
  const totalAmount = item.price * item.quantity;

  return (
    <article className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-stretch">
      {/* Left - Product image */}
      <div className="flex-shrink-0">
        <div className="h-20 w-20 overflow-hidden rounded-lg bg-gray-100 sm:h-24 sm:w-24">
          <img
            src={order.imageUrl}
            alt={item.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Center - Main content */}
      <div className="flex flex-1 flex-col gap-3 sm:px-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
            {customer.name}
          </h3>
          <p className="text-xs text-gray-500 sm:text-sm">#{order.id}</p>
        </div>

        <div className="grid gap-x-6 gap-y-2 text-xs text-gray-600 sm:grid-cols-2 sm:text-sm">
          <div className="space-y-1">
            <p>
              <span className="font-medium text-gray-800">Phone: </span>
              <span>{customer.phone}</span>
            </p>
            <p>
              <span className="font-medium text-gray-800">Item: </span>
              <span>{item.name}</span>
            </p>
            {item.variant && (
              <p>
                <span className="font-medium text-gray-800">Variant: </span>
                <span>{item.variant}</span>
              </p>
            )}
          </div>
          <div className="space-y-1">
            <p>
              <span className="font-medium text-gray-800">Qty: </span>
              <span>{item.quantity}</span>
            </p>
            <p>
              <span className="font-medium text-gray-800">Price: </span>
              <span className="tabular-nums">
                {item.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </p>
            <p>
              <span className="font-medium text-gray-800">Total: </span>
              <span className="tabular-nums font-semibold text-orange-600">
                {totalAmount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span className="font-medium text-gray-700">Shipping code:</span>
          <span className="rounded bg-gray-50 px-2 py-0.5 font-mono text-[11px] tracking-tight text-gray-700 ring-1 ring-gray-100">
            {order.shippingCode}
          </span>
        </div>
      </div>

      {/* Right - Status & meta */}
      <div className="flex flex-col justify-between gap-3 text-right text-xs sm:text-sm">
        <div className="flex flex-col items-end gap-1">
          <StatusBadge label={order.shippingStatus} type="shipping" />
          <StatusBadge label={order.orderStatus} type="order" />
        </div>
        <div className="space-y-1 text-right text-xs text-gray-500">
          <p className="font-medium text-gray-700">Created</p>
          <p className="tabular-nums">{order.createdAt}</p>
        </div>
      </div>
    </article>
  );
};

export default OrderCard;
