export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold">TechbyYash</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Yashwanth Reddy Boddireddy</p>
          </div>
          <div className="text-center text-xs sm:text-sm text-muted-foreground md:text-right">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
            <p>Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
