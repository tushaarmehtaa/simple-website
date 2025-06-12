'use client'

import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowLeft, ExternalLink, Github, Twitter, Mail, Pen, Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import Link from 'next/link'
import Image from 'next/image'
import { workItems, WorkItem } from '../../data/work-items';

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
        {workItems.map((item: WorkItem) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="p-6 hover:bg-muted/50 transition-colors">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-full sm:w-1/3 aspect-video relative">
                      <Image 
                        src={item.imageSrc} 
                        alt={item.imageAlt} 
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-2">{item.title}</CardTitle>
                      <CardDescription>{item.cardDescription}</CardDescription>
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                          <ExternalLink className="text-muted-foreground" size={20} />
                        </a>
                      )}
                      {!item.link && <ExternalLink className="mt-4 text-muted-foreground invisible" size={20} />}{/* Maintain layout if no link */}
                    </div>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{item.dialogTitle}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-h-[60vh] overflow-y-auto pr-4">
                {item.dialogContent.lead && (
                  <p className="font-semibold text-foreground">{item.dialogContent.lead}</p>
                )}
                {item.dialogContent.paragraphs.map((paragraph, index) => (
                  <p key={`para-${index}`}>{paragraph}</p>
                ))}
                {item.dialogContent.listItems && item.dialogContent.listItems.length > 0 && (
                  <ul className="list-disc pl-5 space-y-1 my-2">
                    {item.dialogContent.listItems.map((listItem, index) => (
                      <li key={`list-${index}`}>{listItem}</li>
                    ))}
                  </ul>
                )}
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