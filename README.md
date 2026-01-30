# Cult Polar Subscription Starter

<div id="youtube-onboarding-video">
  <div align="left">
    <h2>YouTube Onboarding Video</h2>
    <h4>This video walks you through how to set up the polar subscription app from scratch. We will:</h4>
    <ul style="text-align: left; display: inline-block;">
      <li>Setup a new Supabase project using the CLI</li>
      <li>Link it to our app</li>
      <li>Setup environment variables</li>
      <li>Configure Polar integration</li>
      <li>Deploy to Vercel</li>
      <li>Setup Polar webhooks</li>
      <li>Test the payment system</li>
    </ul>
    <a href="https://youtu.be/-hXKKJql2v4?si=v9ivsXneuSxPQTpO">
      <img src="https://raw.githubusercontent.com/Jordan-Gilliam/readme-assets/master/cult-pro-polar-subscription-starter-thumbnail.png" width="85%" alt="YouTube Onboarding Video" />
    </a>
  </div>
</div>

## Setup Instructions

1. **Initial Setup**

   ```bash
   # Install pnpm if you haven't already
   npm install -g pnpm

   # Initialize project
   pnpm install
   git init
   ```

2. **Setup Supabase**

   - Go to [database.new](https://database.new)
   - Create a new database project
   - Get your environment variables and add them to `.env.local`:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
     SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
     ```
   - Link and push your database schema:
     ```bash
     pnpx supabase db link
     pnpx supabase db push
     ```

3. **Setup Polar**

   - Head over to [polar.sh/signup](https://polar.sh/signup) to create an account
   - Once logged in, go to your [Polar dashboard](https://polar.sh/dashboard)
   - Create a new organization or select an existing one
   - Generate an access token from your [account settings](https://polar.sh/settings/tokens)
   - Add your Polar token to `.env.local`:
     ```
     POLAR_ACCESS_TOKEN=your_polar_token
     ```
   - Run the Polar seeding script:
     ```bash
     pnpm run polar:seed
     ```

4. **Deployment Setup**

   a. **GitHub and Vercel Setup**

   - Create a new GitHub repository
   - Push your code:
     ```bash
     git add .
     git commit -m "init"
     git push
     ```
   - Go to [Vercel](https://vercel.com) and create a new project from your repository
   - Copy all environment variables from `.env.local` to Vercel's environment variables
   - Deploy your project
   - Copy your Vercel deployment URL

   b. **Polar Webhook Configuration**

   - Create a new Polar webhook
   - Set webhook URL to: `https://[your-vercel-url]/api/webhook/polar`
   - Generate a webhook secret
   - Add the webhook secret to Vercel environment variables:
     ```
     POLAR_WEBHOOK_SECRET=your_webhook_secret
     ```
   - Trigger a redeploy in Vercel

5. **Testing**

   - Test the deployed payment system through your live Vercel URL

6. **Start Development Server**
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
