# FITA Academy — How Everything Works

## What Happens When You Fill Forms

### 1. Enquiry Form (`/enquire`)
**Fields:** Name, Phone, Email (optional), Branch, Course, Mode, Message

**What happens:**
1. You fill the form → click "Send enquiry"
2. Form validates (name required, 10-digit phone)
3. POST to `/api/enquiries`
4. Saves to **Supabase `enquiries` table**
5. Sends email to `nloki181@gmail.com` (via Resend)
6. Shows success message: "Thank you! Our counsellor will call you within 30 minutes"

### 2. Register (`/register`)
**Fields:** Name, Email, Phone, Password

**What happens:**
1. You fill form → click "Create account"
2. Validates: name 2+ chars, valid email, 10-digit phone, password 8+ chars with uppercase + number
3. POST to `/api/auth/register`
4. Creates user in **Supabase `users` table** (password hashed with bcrypt)
5. Creates JWT token → sets **httpOnly cookie** `fita_session`
6. Redirects to `/dashboard`

### 3. Login (`/login`)
**Fields:** Email, Password

**What happens:**
1. You fill form → click "Sign in"
2. POST to `/api/auth/login`
3. Fetches users from **Supabase `users` table**
4. Verifies password with bcrypt
5. Creates JWT token → sets **httpOnly cookie** `fita_session`
6. Redirects to `/dashboard` (student) or `/dashboard/admin` (admin)

---

## How Login "Remembers" You

**JWT Cookie System:**
- When you login, server creates a JWT token with your user ID, role, name
- This token is stored as an **httpOnly cookie** named `fita_session`
- Cookie expires in **7 days**
- Every page load, the cookie is sent to server automatically
- Server reads the cookie → verifies JWT → knows who you are

**In simple terms:**
- Login → cookie saved in browser
- Close browser → cookie still saved
- Open browser next day → cookie still there → still logged in
- After 7 days → cookie expires → need to login again

---

## What Shows After Login

### Student Dashboard (`/dashboard`)
- Your name, email, phone
- Enrolled courses
- Certificates
- Batch schedule

### Admin Dashboard (`/dashboard/admin`)
- All users
- All enquiries
- All enrollments
- All certificates
- Course management

---

## How to Test Everything

### Step 1: Create Supabase Tables
Run the SQL I gave you in Supabase SQL Editor.

### Step 2: Test Registration
1. Go to `http://localhost:3000/register`
2. Fill: Name="Test User", Email="test@test.com", Phone="9876543210", Password="Test@1234"
3. Click "Create account"
4. Should redirect to `/dashboard`

### Step 3: Test Login
1. Go to `http://localhost:3000/login`
2. Fill: Email="test@test.com", Password="Test@1234"
3. Click "Sign in"
4. Should redirect to `/dashboard`

### Step 4: Test Enquiry Form
1. Go to `http://localhost:3000/enquire`
2. Fill: Name="John", Phone="9876543210", Email="john@test.com"
3. Select a course and branch
4. Click "Send enquiry"
5. Check Supabase `enquiries` table → should see the record
6. Check your email → should receive notification

### Step 5: Test Logout
1. Go to `http://localhost:3000/dashboard`
2. Click logout button
3. Cookie is cleared → redirects to home

---

## Account Details on Website

### Where Account Info Shows:
- **Header:** Shows "Login" button (or user name if logged in)
- **Dashboard:** Shows full account details
- **Enquiry form:** Shows success with your name after submission

### What's Stored:
| Data | Where | How Long |
|------|-------|----------|
| User account | Supabase `users` table | Forever |
| Login session | Browser cookie `fita_session` | 7 days |
| Enquiries | Supabase `enquiries` table | Forever |
| Passwords | Hashed (bcrypt) in Supabase | Forever (but never shown) |

---

## Environment Variables (.env.local)

```
FITA_JWT_SECRET=...          → Signs login cookies
FITA_ADMIN_SETUP_KEY=...     → Gates admin registration
NEXT_PUBLIC_SUPABASE_URL=... → Connects to database
NEXT_PUBLIC_SUPABASE_ANON_KEY=... → Public database access
SUPABASE_SERVICE_ROLE_KEY=... → Server database access
RESEND_API_KEY=...           → Sends emails
EMAIL_FROM=...               → Sender address
EMAIL_TO_OWNER=...           → Where enquiries go
```

All configured ✅
