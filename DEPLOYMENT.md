# Deployment Guide for Mithila Makhana E-commerce Website

## Prerequisites
- Vercel account
- MongoDB Atlas account
- Razorpay account (for payments)
- Cloudinary account (optional, for images)

## Step-by-Step Deployment

### 1. Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP (or use 0.0.0.0/0 for all IPs)
5. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)

### 2. Set Up Admin User

Once you have MongoDB set up:

```bash
# Update .env.local with your MongoDB URI
MONGODB_URI=your_mongodb_uri_here

# Run the admin creation script
npm run seed:admin

# Optional: Seed sample products
npm run seed:products
```

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Add environment variables:
```bash
vercel env add MONGODB_URI
vercel env add JWT_SECRET
vercel env add NEXTAUTH_SECRET
vercel env add RAZORPAY_KEY_ID
vercel env add RAZORPAY_KEY_SECRET
vercel env add NEXT_PUBLIC_WHATSAPP_NUMBER
```

#### Option B: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Configure environment variables:

**Required Variables:**
- `MONGODB_URI`: Your MongoDB connection string
- `JWT_SECRET`: A random secret key (generate with `openssl rand -base64 32`)
- `NEXTAUTH_SECRET`: Another random secret key

**Optional Variables:**
- `RAZORPAY_KEY_ID`: Your Razorpay key
- `RAZORPAY_KEY_SECRET`: Your Razorpay secret
- `CLOUDINARY_CLOUD_NAME`: Your Cloudinary name
- `CLOUDINARY_API_KEY`: Your Cloudinary API key
- `CLOUDINARY_API_SECRET`: Your Cloudinary secret
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Your WhatsApp number (with country code)

6. Click "Deploy"

### 4. Post-Deployment Setup

1. **Create Admin User** (if not done already):
   - SSH into your server or use Vercel's edge functions
   - Or manually add admin user to MongoDB

2. **Add Products**:
   - Login to admin panel at `your-domain.com/admin/login`
   - Add your products manually or run seed script

3. **Configure Domain** (optional):
   - Go to Vercel project settings
   - Add custom domain

### 5. Payment Integration

#### Razorpay Setup:
1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Get your API keys (Test/Live)
3. Add keys to environment variables
4. Test payments in test mode first

### 6. WhatsApp Integration

1. Get your WhatsApp Business number
2. Format: Country code + number (e.g., 919876543210)
3. Add to `NEXT_PUBLIC_WHATSAPP_NUMBER`

### 7. Cloudinary Setup (Optional)

1. Go to [Cloudinary](https://cloudinary.com/)
2. Get your cloud name and API credentials
3. Add to environment variables
4. Update product image uploads to use Cloudinary

## Production Checklist

- [ ] MongoDB Atlas cluster created and configured
- [ ] Admin user created
- [ ] Environment variables configured in Vercel
- [ ] Test deployment successful
- [ ] Admin panel accessible
- [ ] Products added
- [ ] Cart functionality tested
- [ ] Checkout process tested
- [ ] Payment gateway configured (test mode)
- [ ] Email notifications configured (if implemented)
- [ ] WhatsApp integration tested
- [ ] SEO meta tags verified
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics configured (optional)

## Security Recommendations

1. **Change Default Admin Credentials**:
   - Login with default credentials
   - Change email and password immediately

2. **Secure Environment Variables**:
   - Never commit `.env.local` to git
   - Use strong, random secrets for JWT

3. **Enable Rate Limiting**:
   - Add rate limiting to API routes
   - Use Vercel's edge middleware

4. **Regular Backups**:
   - Set up MongoDB Atlas automated backups
   - Export important data regularly

## Monitoring

1. **Vercel Analytics**:
   - Enable in Vercel dashboard
   - Monitor page performance

2. **Error Tracking**:
   - Consider integrating Sentry
   - Monitor API errors

3. **Database Monitoring**:
   - Use MongoDB Atlas monitoring
   - Set up alerts for issues

## Common Issues

### Build Fails
- Check environment variables are set
- Verify MongoDB connection string
- Check TypeScript errors

### Database Connection Issues
- Verify MongoDB URI
- Check IP whitelist in MongoDB Atlas
- Ensure database user has correct permissions

### Payment Not Working
- Verify Razorpay credentials
- Check test vs. live mode
- Verify webhook URLs (if using webhooks)

## Support

For issues or questions:
- Create an issue on GitHub
- Email: info@mithilamakhana.com

## Scaling Considerations

As your business grows:
1. Upgrade MongoDB Atlas tier
2. Consider CDN for images (Cloudinary)
3. Implement caching (Redis)
4. Add load balancing
5. Set up monitoring and alerts
