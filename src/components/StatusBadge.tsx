import type { OrderStatus, ShippingStatus, StatusBadgeProps } from "../utils/types"

const StatusBadge = ({ label, type }: StatusBadgeProps) => {
    const normalizedLabel = label.toUpperCase()
    
const shippingStyles: Record<ShippingStatus, string> = {
    CREATED: 'bg-gray-100 text-gray-800 border border-gray-200',
    PICKED: 'bg-blue-100 text-blue-800 border border-blue-200',
    DELIVERING: 'bg-orange-100 text-orange-800 border border-orange-200',
    DELIVERED: 'bg-green-100 text-green-800 border border-green-200',
    FAILED: 'bg-red-100 text-red-800 border border-red-200',
  };

  const orderStyles: Record<OrderStatus, string> = {
    PENDING: 'bg-amber-50 text-amber-700 border border-amber-200',
    PAID: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    CANCELLED: 'bg-slate-100 text-slate-700 border border-slate-200',
    REFUNDED: 'bg-purple-50 text-purple-700 border border-purple-200',
  };

  const baseClasses =
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide';

  const styles =
    type === 'shipping'
      ? shippingStyles[normalizedLabel as ShippingStatus]
      : orderStyles[normalizedLabel as OrderStatus];

  return <span className={`${baseClasses} ${styles}`}>{normalizedLabel}</span>;
}

export default StatusBadge