import type { ShippingOrder } from "./types";

export const mockShippingOrder: ShippingOrder = {
  order_id: "ORD-2025-00123",
  sender: {
    name: "Shopee Seller Store",
    phone: "0901 234 567",
    address: "123 Nguyen Trai Street",
    city: "Ho Chi Minh City",
    district: "District 1",
    ward: "Ward 7",
  },
  receiver: {
    name: "Nguyen Van A",
    phone: "0987 654 321",
    address: "456 Le Loi Street",
    city: "Ho Chi Minh City",
    district: "District 3",
    ward: "Ward 5",
  },
  package: {
    weight: 1.2,
    length: 30,
    width: 20,
    height: 10,
    value: 750000,
    description: "Electronics accessories package (careful handling)",
  },
  payment: {
    shipping_fee: 25000,
    cod_amount: 750000,
    insurance_fee: 5000,
    payment_method: "Cash on Delivery (COD)",
  },
  delivery: {
    service_type: "Standard",
    carrier_code: "SPXVN",
    estimated_pickup_time: "2025-12-18 10:00",
    estimated_delivery_time: "2025-12-20 18:00",
    instructions: "Leave at front desk if recipient is not available.",
  },
  items: [
    {
      product_id: "P-1001",
      product_name: "Wireless Bluetooth Headphones",
      product_sku: "WBH-BLK-01",
      quantity: 1,
      unit_price: 550000,
      total_price: 550000,
    },
    {
      product_id: "P-1002",
      product_name: "Fast Charging USB-C Cable (1.5m)",
      product_sku: "FCC-USB-C-15",
      quantity: 2,
      unit_price: 100000,
      total_price: 200000,
    },
  ],
};
