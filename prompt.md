# 
You are a senior frontend engineer and UI/UX designer.

Create a **modern Order List page** for an e-commerce admin dashboard using:
- React
- TypeScript
- TailwindCSS

### Page requirements:

1. **Page layout**
- Page title at the top: "Orders"
- A filter section below the title:
  - Filter button (with icon)
  - Optional dropdown or status filter
- Clean, responsive layout
- White background with soft gray sections
- Color inspiration similar to Shopee (orange primary, neutral gray background)

2. **Order card layout**
Each order should be displayed inside a **card component** with:
- Rounded corners
- Light shadow
- Hover effect
- Padding and spacing for readability

Card layout (horizontal):
- **Left side**:
  - Product image (fixed size, rounded)
- **Center / main content (flex-grow)**:
  - Customer name
  - Customer phone number
  - Item name
  - Item variant (if any)
  - Quantity
  - Price per item
  - Total amount (highlighted)
  - Shipping code
- **Right side**:
  - Shipping status badge
  - Order status badge
  - Created date

3. **Data fields per order**
Display the following fields clearly:
- Customer name
- Customer phone
- Item name
- Item variant
- Quantity
- Price
- Total amount
- Shipping code
- Shipping status
- Order status
- Created date

4. **Shipping status**
Shipping status values:
- CREATED
- PICKED
- DELIVERING
- DELIVERED
- FAILED

Each shipping status must have a **distinct color badge**:
- CREATED → gray
- PICKED → blue
- DELIVERING → orange
- DELIVERED → green
- FAILED → red

5. **Order status**
- Display a separate order status badge
- Use different color styles than shipping status
- Clearly distinguish order status vs shipping status

6. **Design & UX**
- Use Tailwind utility classes only
- Consistent spacing and typography
- Highlight important values (total amount, status)
- Responsive for desktop and tablet
- Clean admin-style UI (not consumer-facing)

7. **Implementation details**
- Use reusable components:
  - OrderCard
  - StatusBadge
- Define TypeScript interfaces for Order, Customer, Item
- Use mock data (array of orders)
- No backend required
- Code should be clean, readable, and production-ready

### Output requirements:
- Provide the full React component code
- Include TypeScript types/interfaces
- Include TailwindCSS classes
- Use mock data for demonstration
- Ensure the page renders without errors

#  Pagination


You are a senior frontend engineer.

Create a **reusable Pagination component** using:
- React
- TypeScript
- TailwindCSS

This component will be used across multiple pages.

### Component requirements:

1. **Props**
The Pagination component should accept the following props:
- totalRecords: number
- pageSize: number
- currentPage: number
- onPageChange: (page: number) => void

The parent component will handle:
- currentPage state
- totalPages calculation
- data fetching logic

2. **Pagination behavior**
- Calculate totalPages internally using:
  totalPages = Math.ceil(totalRecords / pageSize)
- Render:
  - Previous button
  - Page number buttons
  - Next button
- Disable:
  - Previous button when currentPage === 1
  - Next button when currentPage === totalPages
- Clicking a page number calls onPageChange(page)

3. **Page number display**
- Show all page numbers if totalPages <= 7
- If totalPages > 7:
  - Show first page
  - Show last page
  - Show current page with one page before and after
  - Use "..." to indicate skipped pages

Example:
- currentPage = 1 → 1 2 3 ... 10
- currentPage = 5 → 1 ... 4 5 6 ... 10
- currentPage = 10 → 1 ... 8 9 10

4. **UI & Style**
- TailwindCSS only
- Shopee-inspired style:
  - Active page: orange background, white text
  - Inactive page: white background, gray border
  - Disabled buttons: reduced opacity and cursor-not-allowed
- Rounded buttons
- Hover and transition effects
- Place pagination in a horizontal row

5. **Accessibility**
- Use semantic button elements
- Disabled buttons must not be clickable
- Add aria-labels where appropriate

6. **Code quality**
- Clean, readable, production-ready
- Strong TypeScript typing
- No external UI libraries
- No global state
- No backend code

### Output requirements:
- Provide full Pagination.tsx component code
- Include TypeScript interface for props
- Ready to import and reuse

#  Form shipping
You are a senior frontend engineer and UI/UX designer.

Create a **Shipping Info Page** for an e-commerce admin dashboard using:
- React
- TypeScript
- TailwindCSS

### Requirements:

1. **Page layout**
- Page title: "Shipping Information"
- Responsive layout (desktop + tablet)
- White background, rounded sections, subtle shadows (Shopee admin style)
- Use Tailwind utility classes only

2. **Form structure**
- Display all shipping/order information in **readable form**
- Include a **Submit button** at the bottom (empty functionality, just a placeholder)
- Form sections:
  1. **Order Information**
     - order_id
  2. **Sender Information**
     - sender.name
     - sender.phone
     - sender.address
     - sender.city
     - sender.district
     - sender.ward
  3. **Receiver Information**
     - receiver.name
     - receiver.phone
     - receiver.address
     - receiver.city
     - receiver.district
     - receiver.ward
  4. **Package Information**
     - package.weight
     - package.length
     - package.width
     - package.height
     - package.value
     - package.description
  5. **Payment Information**
     - payment.shipping_fee
     - payment.cod_amount
     - payment.insurance_fee
     - payment.payment_method
  6. **Delivery Information**
     - delivery.service_type
     - delivery.carrier_code
     - delivery.estimated_pickup_time
     - delivery.estimated_delivery_time
     - delivery.instructions
  7. **Items**
     - Display each item as a row or card:
       - items[index].product_id
       - items[index].product_name
       - items[index].product_sku
       - items[index].quantity
       - items[index].unit_price
       - items[index].total_price

3. **Styling**
- Labels in gray, values in dark text
- Section titles in bold, slightly larger font
- Cards or boxes for items
- Padding and spacing for readability
- Shopee-inspired color palette:
  - Primary orange (#f53d2d) for buttons / highlights
  - Subtle gray backgrounds for sections
- Rounded corners and light shadow for each section/card

4. **Interactivity**
- Form fields are **read-only** (no editing needed)
- Submit button: empty `onClick` placeholder

5. **TypeScript**
- Use proper interfaces for order, sender, receiver, package, payment, delivery, items
- Populate form with **mock data** for demonstration

6. **Output requirements**
- Full React component code (`ShippingInfoPage.tsx`)
- TailwindCSS classes only
- Responsive layout
- Mock data included
- Submit button does not need to perform any action
