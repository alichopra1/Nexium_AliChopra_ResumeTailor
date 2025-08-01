# Resume Tailor App

Resume Tailor is an AI-powered web application built with Next.js, ShadCN, and Tailwind CSS, integrated with Supabase for authentication and data storage, and n8n for AI-driven resume tailoring. The app allows users to input their resume and a job description, generating a tailored resume optimized for the specific job using AI workflows. It also provides feedback on the tailoring process and supports downloading the tailored resume as a TXT or PDF file.

## Features
- **User Authentication**: Secure login via Supabase's magic link authentication.
- **Resume Tailoring**: Input resume text and job description to receive an AI-tailored resume and feedback.
- **Theme Switching**: Toggle between light and dark modes for better user experience.
- **Download Options**: Export tailored resumes as TXT or PDF files.
- **Responsive Design**: Built with Tailwind CSS and ShadCN components for a modern, responsive UI.

## Tech Stack
- **Frontend**: Next.js, React, ShadCN, Tailwind CSS
- **Backend**: Supabase (authentication and database)
- **AI Workflow**: n8n (external repository for AI logic)
- **PDF Generation**: jsPDF
- **Icons**: @radix-ui/react-icons

## File Structure
- **`/src/api/lib/`**: Contains backend utilities.
  - `supabaseClient.ts`: Initializes the Supabase client.
  - `requireAuth.ts`: Middleware for authenticating API requests.
- **`/src/app/api/`**: API routes.
  - `tailor-resume/route.ts`: Endpoint for processing resume and job description with n8n and storing results in Supabase.
  - **API Login Path**: The login is handled via Supabase's magic link authentication, accessible at `/api/auth` (implicitly used by `/app/page.tsx` for sending magic links).
- **`/src/components/`**: Reusable UI components.
  - `Header.tsx`: Navigation bar with theme switcher and links to Dashboard and Results.
  - `Footer.tsx`: Footer with copyright and links to Terms of Service and Privacy Policy.
  - `ThemeProvider.tsx`: Context for managing light/dark theme state.
- **`/src/app/`**: Page components.
  - `page.tsx`: Landing page with magic link login.
  - `dashboard/page.tsx`: Form for submitting resume and job description.
  - `results/page.tsx`: Displays tailored resume, AI feedback, and download options.
  - `layout.tsx`: Root layout integrating Header, Footer, and ThemeProvider.
- **`/src/app/globals.css`**: Global Tailwind CSS styles with light/dark mode theming.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/alichopra1/Resume_Tailor.git
   cd Resume_Tailor
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   NEXT_PUBLIC_SITE_URL=your_site_url
   N8N_WEBHOOK_URL=https://resumetailorn8n-production.up.railway.app/webhook/tailor-resume
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

5. **Supabase Setup**:
   - Create a Supabase project and set up a `resumes` table with columns: `id`, `original_text`, `tailored_text`, `job_description`, `feedback`, `created_at`.
   - Configure Supabase authentication to enable magic link login.

6. **n8n AI Logic**:
   The AI-driven resume tailoring logic is implemented in a separate n8n repository: [alichopra1/n8n_Resume_Tailor](https://github.com/alichopra1/n8n_Resume_Tailor). Follow the setup instructions there to configure the n8n workflow, which is called by the `/api/tailor-resume` endpoint.

## Usage
1. **Login**: On the landing page (`/`), enter your email to receive a magic link for authentication.
2. **Dashboard**: After logging in, navigate to `/dashboard` to input your resume text and job description.
3. **Results**: Submit the form to generate a tailored resume, view AI feedback, and download the result as a TXT or PDF file at `/results`.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue on the [GitHub repository](https://github.com/alichopra1/Resume_Tailor).

## License
This project is licensed under the MIT License.

## Footer
© 2025 Resume Tailor. All rights reserved.