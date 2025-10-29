# EmailJS Setup Guide for NextGen Finance

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. **Copy the Service ID** (e.g., `service_abc123`)

### Recommended: Gmail Setup
- Use Gmail for easy setup
- Enable 2-factor authentication
- Create an App Password for EmailJS
- Use the App Password in EmailJS connection

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

### Template Name: `contact_form`

### Subject Line:
```
New Contact Form Submission from {{from_name}}
```

### Email Body:
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 10px;
        }
        .header {
            background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
            color: white;
            padding: 20px;
            border-radius: 10px 10px 0 0;
            text-align: center;
        }
        .content {
            background: white;
            padding: 30px;
            border-radius: 0 0 10px 10px;
        }
        .field {
            margin-bottom: 20px;
        }
        .label {
            font-weight: bold;
            color: #8b5cf6;
            display: block;
            margin-bottom: 5px;
        }
        .value {
            padding: 10px;
            background: #f5f5f5;
            border-radius: 5px;
            border-left: 3px solid #8b5cf6;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 New Contact Form Submission</h1>
            <p>NextGen Finance Website</p>
        </div>
        
        <div class="content">
            <div class="field">
                <span class="label">👤 Name:</span>
                <div class="value">{{from_name}}</div>
            </div>
            
            <div class="field">
                <span class="label">📧 Email:</span>
                <div class="value">{{from_email}}</div>
            </div>
            
            <div class="field">
                <span class="label">💬 Message:</span>
                <div class="value">{{message}}</div>
            </div>
            
            <div class="footer">
                <p>This email was sent from the NextGen Finance contact form</p>
                <p>Received at: {{reply_to}}</p>
            </div>
        </div>
    </div>
</body>
</html>
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `abcdefghijklmnop`)
3. Copy it

## Step 5: Update Your .env File

Open your `.env` file and replace the placeholder values:

```env
NEXT_PUBLIC_CAL_URL=https://cal.com/#######

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

Replace:
- `service_abc123` with your actual Service ID
- `template_xyz789` with your actual Template ID
- `abcdefghijklmnop` with your actual Public Key

## Step 6: Test the Form

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to `/contact` page
3. Fill out the form
4. Click "Send Message"
5. Check your email inbox!

## Email Template Variables

The form sends these variables to EmailJS:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | User's name | "John Doe" |
| `{{from_email}}` | User's email | "john@example.com" |
| `{{message}}` | User's message | "I need help with..." |
| `{{to_name}}` | Your company name | "NextGen Finance" |

## Success/Error Messages

The form shows:
- ✅ **Success**: Green message "Message sent successfully!"
- ❌ **Error**: Red message "Failed to send message. Please try again."
- ⏳ **Loading**: Button shows "Sending..." while processing

## Troubleshooting

### Issue: "Failed to send message"
**Solutions:**
1. Check if all env variables are correct
2. Verify your EmailJS service is connected
3. Check browser console for detailed error
4. Make sure you restarted the dev server after updating .env

### Issue: Email not received
**Solutions:**
1. Check spam/junk folder
2. Verify email service is properly connected in EmailJS
3. Test the template directly in EmailJS dashboard
4. Check EmailJS usage limits (free tier: 200 emails/month)

### Issue: Template variables not showing
**Solutions:**
1. Make sure variable names match exactly: `{{from_name}}`, `{{from_email}}`, `{{message}}`
2. Check template in EmailJS dashboard
3. Test with EmailJS's "Test it" feature

## Free Tier Limits

EmailJS Free Plan includes:
- ✅ 200 emails per month
- ✅ 2 email services
- ✅ 2 email templates
- ✅ Basic support

For more emails, upgrade to a paid plan.

## Security Notes

- ✅ Public Key is safe to expose (it's meant to be public)
- ✅ Service ID and Template ID are also safe
- ❌ Never expose your Private Key (not used in this setup)
- ✅ EmailJS handles rate limiting automatically

## Alternative Email Template (Simple)

If you prefer a simpler template:

```
New message from NextGen Finance contact form

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from NextGen Finance website
```

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
- Check browser console for error details

## Next Steps

After setup:
1. Test the form thoroughly
2. Check email delivery
3. Customize the email template to match your brand
4. Set up email notifications/forwarding if needed
5. Monitor your EmailJS usage in the dashboard
