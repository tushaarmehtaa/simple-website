'use client'

import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowLeft, ExternalLink, Github, Twitter, Mail, Pen, Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import Link from 'next/link'
import Image from 'next/image'

const featuredWork = [
  {
    title: "Builders Central: 0 to 100k",
    description: "Video content marketing case study",
    content: [
      "I joined them as a consultant in November 2023. They had around 3.5K followers. So, we got to work. Short form content. Long form content. Giveaways. Contests.",
      "You name it, we did it. And guess what? By November 2024, we crossed 100k followers."
    ],
    image: "/builders-central.png",
    link: "https://builderscentral.xyz"
  },
  {
    title: "Karthik Sridharan: 45 to 90k",
    description: "Founder personal brand case study",
    content: [
      "I joined as a full-time employee as social media manager. Managing 3 pages at Flexiple. The founder's page. Another cofounder's page. And buildd's page. The founder's page went 2x. The other cofounder's page also doubled. And buildd's page? We grew it to 15k.",
      "We did it all. Tweets. Threads. Mind maps. Partnerships. Launches. It was fun. And it was rewarding. Seeing those numbers climb."
    ],
    image: "/karthik-sridharan.png",
    link: "https://flexiple.com"
  }
]

export default function FeaturedWork() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <h1 className="text-4xl font-bold mb-8">Featured Work</h1>

      <div className="grid gap-6">
        {featuredWork.map((work, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="p-6 hover:bg-muted/50 transition-colors">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-full sm:w-1/3 aspect-video relative">
                      <Image 
                        src={work.image} 
                        alt={work.title} 
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-2">{work.title}</CardTitle>
                      <CardDescription>{work.description}</CardDescription>
                      {work.link && (
                        <a href={work.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                          <ExternalLink className="text-muted-foreground" size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{work.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {work.content.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      <footer className="mt-16 pt-8 border-t">
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://x.com/tushaarmehtaa" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter profile"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://github.com/tushaarmehtaa" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://tushaarmehtaa.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Writing Portfolio"
            >
              <Pen className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="mailto:tusharmehta2001@icloud.com" 
              aria-label="Email me"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://tushaarmehtaa.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Newsletter"
            >
              <svg 
                viewBox="0 0 24 24" 
                className="h-5 w-5" 
                fill="currentColor"
              >
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
            </a>
          </Button>
        </div>
      </footer>
    </div>
  )
}