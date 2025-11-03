import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Soluções de Climatização Inteligente
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Especialistas em instalação, manutenção e reparo de sistemas de ar condicionado e refrigeração.
              Garanta conforto e eficiência energética para seu ambiente.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link href="/lp">
                Solicitar Orçamento
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
