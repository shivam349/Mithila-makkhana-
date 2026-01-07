# Mithila Makhana E-commerce Website

A full-featured, professional e-commerce platform for selling authentic Mithila Makhana (Fox Nuts) from Darbhanga, Bihar. Built with Next.js, TypeScript, Tailwind CSS, and MongoDB.

## 🌟 Features

### Customer-Facing Features
- **Home Page** with Mithila cultural theme and brand story
- **Product Listing** with category filters (Plain, Roasted, Flavored, Powder, Gift Packs)
- **Product Detail Pages** with image galleries, reviews, and nutritional information
- **Shopping Cart** with quantity management
- **Checkout System** with multiple payment options (COD, UPI, Razorpay)
- **Order Tracking** with real-time status updates
- **Blog Section** about Mithila Makhana benefits
- **Newsletter Subscription**
- **WhatsApp Chat Integration**
- **SEO Optimized** with proper meta tags and keywords

### Admin Panel Features
- **Product Management** - Add, edit, delete products
- **Order Management** - View and manage customer orders
- **Inventory Tracking** - Monitor stock levels
- **JWT Authentication** for secure admin access

### Technical Features
- Server-side rendering with Next.js App Router
- TypeScript for type safety
- MongoDB database with Mongoose ODM
- RESTful API with Next.js API routes
- Zustand for state management
- Responsive design with Tailwind CSS
- Toast notifications

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shivam349/Mithila-makkhana-.git
   cd Mithila-makkhana-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add:
   ```env
   # MongoDB
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mithila-makhana?retryWrites=true&w=majority

   # JWT Secret
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

   # NextAuth (Optional)
   NEXTAUTH_SECRET=your-nextauth-secret-key
   NEXTAUTH_URL=http://localhost:3000

   # Razorpay (Optional)
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret

   # Cloudinary (Optional)
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret

   # WhatsApp
   NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210

   # Admin Credentials
   ADMIN_EMAIL=admin@mithilamakhana.com
   ADMIN_PASSWORD=admin123
   ```

4. **Create admin user**
   
   You'll need to create an admin user in your MongoDB database. You can use MongoDB Compass or the mongo shell:
   
   ```javascript
   // Connect to your database and run:
   db.users.insertOne({
     name: "Admin",
     email: "admin@mithilamakhana.com",
     password: "$2a$10$xyz...", // Use bcrypt to hash "admin123"
     role: "admin",
     createdAt: new Date(),
     updatedAt: new Date()
   })
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin panel pages
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout page
│   ├── orders/            # Order tracking
│   ├── products/          # Product pages
│   └── about/             # About page
├── components/            # React components
│   ├── layout/           # Header, Footer
│   └── ui/               # Reusable UI components
├── lib/                   # Utility functions
│   ├── mongodb.ts        # Database connection
│   ├── jwt.ts            # JWT utilities
│   └── utils.ts          # Helper functions
├── models/               # MongoDB models
│   ├── Product.ts
│   ├── Order.ts
│   ├── User.ts
│   ├── Review.ts
│   └── Newsletter.ts
├── store/                # Zustand store
│   └── cartStore.ts
└── types/                # TypeScript types
    └── index.ts
```

## 🔑 Admin Access

1. Navigate to `/admin/login`
2. Use the default credentials:
   - Email: `admin@mithilamakhana.com`
   - Password: `admin123`
3. Change these credentials in production!

## 📦 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/[slug]` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/[slug]` - Update product (admin)
- `DELETE /api/products/[slug]` - Delete product (admin)

### Reviews
- `GET /api/products/[slug]/reviews` - Get product reviews
- `POST /api/products/[slug]/reviews` - Add review

### Orders
- `GET /api/orders` - Get all orders (admin)
- `GET /api/orders?orderNumber=XXX` - Track order
- `POST /api/orders` - Create order

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter

### Authentication
- `POST /api/auth/login` - Admin login

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   
3. **Configure Environment Variables**
   - Add all variables from `.env.local` in Vercel dashboard

4. **Deploy**
   - Vercel will automatically build and deploy your site

### Environment Variables for Production

Make sure to set all environment variables in your Vercel project settings:
- MONGODB_URI
- JWT_SECRET
- NEXTAUTH_SECRET
- RAZORPAY_KEY_ID
- RAZORPAY_KEY_SECRET
- CLOUDINARY credentials
- NEXT_PUBLIC_WHATSAPP_NUMBER

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme. The current theme uses:
- Primary: Orange (600-700)
- Secondary: Red (600-700)
- Background: Amber (50)

### Images
Replace placeholder images with actual product images:
- Store images in `/public/images/products/`
- Or use Cloudinary for better performance

### SEO
Update meta tags in:
- `src/app/layout.tsx` - Global metadata
- Individual page files - Page-specific metadata

## 🛠 Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** MongoDB with Mongoose
- **State Management:** Zustand
- **Authentication:** JWT
- **Icons:** Heroicons
- **Notifications:** React Hot Toast
- **Payment:** Razorpay (configured)
- **Image Storage:** Cloudinary (configured)

## 📝 Development

### Running Tests
```bash
npm test
```

### Building for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Mithila region farmers for authentic makhana
- Next.js team for the amazing framework
- Vercel for seamless deployment

## 📞 Support

For support, email info@mithilamakhana.com or create an issue in the repository.

---

Made with ❤️ in Mithila