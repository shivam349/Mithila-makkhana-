# Deployment Guide for Mithila Makhana E-commerce Website

## Prerequisites

Before deploying, ensure you have:
1. A MongoDB database (MongoDB Atlas recommended)
2. Razorpay account (for payment processing)
3. Cloudinary account (for image storage)
4. Vercel account (for hosting)

## Step-by-Step Deployment on Vercel

### 1. Prepare Your Environment Variables

Create the following environment variables in Vercel:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mithila-makhana?retryWrites=true&w=majority

# Authentication
JWT_SECRET=your-super-secret-jwt-key-min-32-characters-long
NEXTAUTH_SECRET=your-nextauth-secret-key-min-32-characters
NEXTAUTH_URL=https://yourdomain.vercel.app

# Razorpay
RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Admin (Optional - for seeding)
ADMIN_EMAIL=admin@mithilamakhana.com
ADMIN_PASSWORD=change-this-secure-password
```

### 2. Deploy to Vercel

#### Option A: Using Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your Git repository
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Add all environment variables from step 1
6. Click "Deploy"

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Add environment variables
vercel env add MONGODB_URI
vercel env add JWT_SECRET
# ... add all other variables

# Deploy to production
vercel --prod
```

### 3. Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (Free tier available)
3. Set up database access:
   - Create a database user
   - Note down username and password
4. Set up network access:
   - Add IP: `0.0.0.0/0` (allow from anywhere)
   - Or add Vercel's IP ranges
5. Get your connection string:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

### 4. Configure Razorpay

1. Sign up at [Razorpay](https://razorpay.com/)
2. Complete KYC verification
3. Get your API keys:
   - Go to Settings > API Keys
   - Generate Test/Live keys
   - Copy Key ID and Key Secret
4. Set up webhooks (optional):
   - Go to Settings > Webhooks
   - Add webhook URL: `https://yourdomain.vercel.app/api/webhooks/razorpay`
   - Select events to track

### 5. Configure Cloudinary

1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Get your credentials from Dashboard:
   - Cloud Name
   - API Key
   - API Secret
3. Create upload presets (optional):
   - Go to Settings > Upload
   - Create preset for product images

### 6. Create Initial Admin User

After deployment, create an admin user by calling the register API:

```bash
curl -X POST https://yourdomain.vercel.app/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@mithilamakhana.com",
    "password": "your-secure-password",
    "name": "Admin User",
    "role": "admin"
  }'
```

Or manually insert in MongoDB:

```javascript
db.users.insertOne({
  email: "admin@mithilamakhana.com",
  password: "$2a$10$...", // bcrypt hashed password
  name: "Admin User",
  role: "admin",
  createdAt: new Date(),
  updatedAt: new Date()
})
```

### 7. Seed Initial Products (Optional)

Use the admin panel to add products, or create a seed script:

```javascript
// Create products via API
const products = [
  {
    name: "Premium Plain Makhana",
    slug: "premium-plain-makhana",
    description: "...",
    price: 299,
    discountPrice: 249,
    category: "plain",
    images: ["url1", "url2"],
    stock: 100,
    featured: true
  },
  // ... more products
];

// POST to /api/products for each product
```

### 8. Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify MongoDB connection works
- [ ] Test product listing and detail pages
- [ ] Test cart functionality
- [ ] Test checkout flow
- [ ] Verify admin login works
- [ ] Test admin product management
- [ ] Test admin order management
- [ ] Verify email/WhatsApp links work
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Set up custom domain (optional)
- [ ] Configure SEO settings
- [ ] Set up analytics (Google Analytics, etc.)

### 9. Custom Domain Setup (Optional)

1. In Vercel dashboard, go to your project
2. Click "Domains"
3. Add your custom domain
4. Update DNS records at your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
5. Wait for DNS propagation (up to 48 hours)

### 10. Monitoring and Maintenance

- Monitor error logs in Vercel dashboard
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Regularly backup MongoDB database
- Update dependencies regularly
- Monitor MongoDB Atlas performance
- Check Razorpay dashboard for payments
- Review analytics regularly

## Troubleshooting

### Build Fails

1. Check build logs in Vercel
2. Verify all environment variables are set
3. Test build locally: `npm run build`
4. Check Node.js version compatibility

### Database Connection Issues

1. Verify MONGODB_URI is correct
2. Check MongoDB Atlas network access
3. Ensure database user has correct permissions
4. Check MongoDB Atlas cluster is running

### API Routes Not Working

1. Check Vercel function logs
2. Verify environment variables in production
3. Test API routes with curl or Postman
4. Check for CORS issues

### Images Not Loading

1. Verify Cloudinary credentials
2. Check image URLs are correct
3. Ensure images are uploaded to Cloudinary
4. Check Cloudinary usage limits

## Support

For deployment issues, contact:
- Email: support@mithilamakhana.com
- WhatsApp: +91 9876543210

Or refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
