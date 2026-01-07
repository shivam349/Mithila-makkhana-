# Mithila Makhana E-commerce Website

A full-featured e-commerce website for selling authentic Mithila Makhana (Fox Nuts) from Darbhanga, Bihar.

## Features

### Frontend
- ✅ Home page with Mithila cultural theme and brand story
- ✅ Product listing page with category filters
- ✅ Product detail pages with dynamic routing
- ✅ Shopping cart with quantity management
- ✅ Checkout page with address form and payment options
- ✅ Order tracking page
- ✅ Blog section
- ✅ WhatsApp chat integration
- ✅ Responsive design
- ✅ SEO optimized

### Backend
- ✅ MongoDB database integration
- ✅ RESTful API routes with Next.js
- ✅ Product CRUD operations
- ✅ Order management
- ✅ User authentication with JWT
- ✅ Review system
- ✅ Newsletter subscription

### Admin Panel
- ✅ Admin login with JWT authentication
- ✅ Dashboard with statistics
- ✅ Product management (view, add, edit, delete)
- ✅ Order management with status updates
- ✅ Inventory tracking

## Tech Stack

- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Payments**: Razorpay (ready for integration)
- **Image Storage**: Cloudinary (ready for integration)

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB instance
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Mithila-makkhana-
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local`:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Environment Variables for Production

Make sure to set these in your deployment platform:
- `MONGODB_URI`
- `JWT_SECRET`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

## Project Structure

```
src/
├── app/
│   ├── admin/          # Admin panel pages
│   ├── api/            # API routes
│   ├── blog/           # Blog pages
│   ├── cart/           # Shopping cart
│   ├── checkout/       # Checkout page
│   ├── order/          # Order tracking
│   ├── products/       # Product pages
│   └── page.tsx        # Home page
├── components/
│   ├── layout/         # Header, Footer
│   ├── product/        # Product components
│   └── ui/             # Reusable UI components
├── lib/
│   ├── mongodb.ts      # Database connection
│   └── auth.ts         # Authentication utilities
└── models/             # MongoDB models
```

## Default Admin Credentials

For testing purposes:
- Email: admin@mithilamakhana.com
- Password: admin123

**⚠️ Change these credentials in production!**

## Features Roadmap

- [ ] Razorpay payment integration
- [ ] Cloudinary image upload
- [ ] Email notifications
- [ ] Advanced search and filters
- [ ] Customer reviews moderation
- [ ] Inventory alerts
- [ ] Sales analytics
- [ ] Discount coupons

## SEO Keywords

mithila makhana, darbhanga makhana, bihar makhana, fox nut mithila, premium makhana, authentic makhana

## Support

For support, contact us on WhatsApp: +91 9876543210

## License

MIT License - feel free to use this project for your own purposes.
