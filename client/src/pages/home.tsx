import { Inter as FontSans } from "next/font/google";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export function HomePage() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
      )}
    >
      {data?.email}
      <Button>Click me</Button>

      <Button variant="link">Link</Button>
    </main>
  );
}
