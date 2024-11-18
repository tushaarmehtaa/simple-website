'use client'

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowLeft, ExternalLink, Github, Twitter, Mail, Pen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const featuredWork = [
  {
    title: "Builders Central: 0 to 100k",
    description: "Video content marketing case study",
    longDescription: "A comprehensive case study on scaling a YouTube channel from zero to 100,000 subscribers through strategic content marketing and community building.",
    image: "/builders-central.png",
    link: "https://builderscentral.xyz"
  },
  {
    title: "Karthik Sridharan: 45 to 90k",
    description: "Founder personal brand case study",
    longDescription: "A detailed case study on growing a founder's personal brand and social media presence, focusing on authentic engagement and community building strategies.",
    image: "/karthik-sridharan.png",
    link: "https://example.com/karthik-case-study"
  },
  {
    title: "AI Tweet Generator",
    description: "Write better tweets with AI assistance",
    longDescription: "An AI-powered tool that helps creators and builders craft engaging tweets. Features include style matching, thread generation, and engagement optimization.",
    image: "/tweet-generator.png",
    link: "https://tweet-generator.com"
  },
  {
    title: "JimBro Workout Logger",
    description: "Simple and effective workout tracking",
    longDescription: "A mobile-first workout tracking app that makes logging exercises as simple as sending a text. Features include AI form analysis and progress visualization.",
    image: "/jimbro.png",
    link: "https://jimbro.framer.ai"
  }
]

export default function FeaturedWork() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 min-h-screen bg-background text-foreground">
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-3xl sm:text-4xl font-bold">Featured Work</h1>
        </div>
      </header>

      <main>
        <div className="grid grid-cols-1 gap-6">
          {featuredWork.map((work, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300">
                  <a className="block p-6 hover:bg-muted/50 transition-colors">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="w-full sm:w-1/3 aspect-video relative">
                        <Image 
                          src={work.image} 
                          alt={`${work.title} thumbnail`} 
                          fill
                          className="rounded-md object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">{work.title}</CardTitle>
                        <CardDescription>{work.description}</CardDescription>
                        <ExternalLink className="mt-4 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </a>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>{work.title}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                  <div className="aspect-video relative">
                    <Image 
                      src={work.image} 
                      alt={`${work.title} full view`}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground">{work.longDescription}</p>
                  {work.link && (
                    <Button asChild>
                      <a 
                        href={work.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Visit Project
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </main>

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
              href="https://tarry-muscle-429.notion.site/Tushar-s-Writing-Portfolio-13e9c6707d96808f9ccfdc1c481b33c4" 
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
        </div>
      </footer>
    </div>
  )
}