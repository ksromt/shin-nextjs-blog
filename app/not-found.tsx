import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="text-muted-foreground mt-2 mb-6">The page you're looking for doesn't exist or has been moved.</p>
      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  )
}
