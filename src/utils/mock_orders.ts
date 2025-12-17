export const MOCK_ORDERS: Order[] = [
  {
    id: "ORD-2025001",
    customer: {
      id: "C-001",
      name: "Nguyễn Văn A",
      phone: "0123 456 789",
    },
    item: {
      id: "P-101",
      name: "Wireless Bluetooth Headphones",
      variant: "Black / Standard",
      quantity: 2,
      price: 39.99,
    },
    shippingCode: "SPXVN123456789",
    shippingStatus: "DELIVERING",
    orderStatus: "PAID",
    createdAt: "2025-12-17 10:24",
    imageUrl:
      "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "ORD-2025002",
    customer: {
      id: "C-002",
      name: "Trần Thị B",
      phone: "0987 654 321",
    },
    item: {
      id: "P-202",
      name: "Fashion Tote Bag",
      variant: "Orange",
      quantity: 1,
      price: 24.5,
    },
    shippingCode: "SPXVN987654321",
    shippingStatus: "PICKED",
    orderStatus: "PENDING",
    createdAt: "2025-12-17 09:12",
    imageUrl:
      "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "ORD-2025003",
    customer: {
      id: "C-003",
      name: "Lê Văn C",
      phone: "0912 345 678",
    },
    item: {
      id: "P-303",
      name: "Smartphone Protective Case",
      variant: "Clear / iPhone 15",
      quantity: 3,
      price: 12.99,
    },
    shippingCode: "SPXVN654321987",
    shippingStatus: "DELIVERED",
    orderStatus: "PAID",
    createdAt: "2025-12-16 18:45",
    imageUrl:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: "ORD-2025004",
    customer: {
      id: "C-004",
      name: "Phạm Thị D",
      phone: "0903 222 555",
    },
    item: {
      id: "P-404",
      name: "Running Sneakers",
      variant: "Size 40 / Orange-White",
      quantity: 1,
      price: 59.99,
    },
    shippingCode: "SPXVN222333444",
    shippingStatus: "FAILED",
    orderStatus: "REFUNDED",
    createdAt: "2025-12-15 14:03",
    imageUrl:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];
