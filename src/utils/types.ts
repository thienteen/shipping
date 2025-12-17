export type ShippingStatus =
  | "CREATED"
  | "PICKED"
  | "DELIVERING"
  | "DELIVERED"
  | "FAILED";
export type OrderStatus = "PENDING" | "PAID" | "CANCELLED" | "REFUNDED";
export interface Customer {
  id: string;
  name: string;
  phone: string;
}
export interface ItemOrder {
  id: string;
  name: string;
  variant?: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customer: Customer;
  item: ItemOrder;
  shippingCode: string;
  shippingStatus: ShippingStatus;
  orderStatus: OrderStatus;
  createdAt: string;
  imageUrl: string;
}

export interface StatusBadgeProps {
  label: string;
  type: "shipping" | "order";
}

export interface SenderReceiver {
  name: string;
  phone: string;
  address: string;
  city: string;
  district: string;
  ward: string;
}

export interface PackageInfo {
  weight: number;
  length: number;
  width: number;
  height: number;
  value: number;
  description: string;
}

export interface PaymentInfo {
  shipping_fee: number;
  cod_amount: number;
  insurance_fee: number;
  payment_method: string;
}

export interface DeliveryInfo {
  service_type: string;
  carrier_code: string;
  estimated_pickup_time: string;
  estimated_delivery_time: string;
  instructions: string;
}

export interface Item {
  product_id: string;
  product_name: string;
  product_sku: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

export interface ShippingOrder {
  order_id: string;
  sender: SenderReceiver;
  receiver: SenderReceiver;
  package: PackageInfo;
  payment: PaymentInfo;
  delivery: DeliveryInfo;
  items: Item[];
}
