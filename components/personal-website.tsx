'use client'

import * as React from 'react'
import { Github, Twitter, Pen, Mail, ExternalLink, ArrowRight, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import Image from 'next/image'

export function PersonalWebsiteComponent() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 min-h-screen bg-background text-foreground">
      <header className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            className="text-3xl sm:text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tushar Mehta
          </motion.h1>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
        <motion.div 
          className="flex gap-4 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="ghost" size="icon" asChild>
            <a href="https://x.com/tushaarmehtaa" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/tushaarmehtaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://tarry-muscle-429.notion.site/Tushar-s-Writing-Portfolio-13e9c6707d96808f9ccfdc1c481b33c4" target="_blank" rel="noopener noreferrer" aria-label="Writing Portfolio">
              <Pen className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:tusharmehta2001@icloud.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
        <motion.p 
          className="text-lg text-muted-foreground leading-relaxed mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Hey there, I&apos;m Tushar. I am a writer specializing in content marketing for tech startups.
        </motion.p>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Currently</CardTitle>
              <Button variant="link" className="text-sm" asChild>
                <a href="/past-roles">
                  see past roles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m currently working with 5aitec (Sentient Foundation) Builders Central (Zoho Creator) to write both short-form and long-form video scripts.
            </p>
            <p>
              I&apos;m also leading a consumer crypto community called Farcasters Builders India with support from Base.
            </p>
            <p>
              Driven by genuine curiosity, I&apos;m experimenting with Retrieval-Augmented Generation (RAG) and multi-LLM AI agents to help content teams go brrrr.
            </p>
          </CardContent>
        </Card>
      </header>

      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Featured Work</h2>
          <Button variant="link" asChild>
            <a href="/featured-work">
              see all
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="space-y-6">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <a href="#" className="block p-6 hover:bg-muted/50 transition-colors">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-full sm:w-1/3 aspect-video relative">
                  <Image 
                    src="/builders-central.png" 
                    alt="Builders Central thumbnail" 
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="mb-2">Builders Central: 0 to 100k</CardTitle>
                  <CardDescription>Video content marketing case study</CardDescription>
                  <ExternalLink className="mt-4 text-muted-foreground" size={20} />
                </div>
              </div>
            </a>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <a href="#" className="block p-6 hover:bg-muted/50 transition-colors">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-full sm:w-1/3 aspect-video relative">
                  <Image 
                    src="/karthik-sridharan.png" 
                    alt="Karthik Sridharan thumbnail" 
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="mb-2">Karthik Sridharan: 45 to 90k</CardTitle>
                  <CardDescription>Founder personal brand case study</CardDescription>
                  <ExternalLink className="mt-4 text-muted-foreground" size={20} />
                </div>
              </div>
            </a>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl font-semibold">Writing</h2>
          <Button asChild>
            <a href="https://tushaarmehtaa.substack.com/" target="_blank" rel="noopener noreferrer">check out my newsletter</a>
          </Button>
        </div>
        <div className="space-y-6">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <a href="#" className="block p-6 hover:bg-muted/50 transition-colors">
              <CardTitle className="mb-2">Being Busy</CardTitle>
              <CardDescription>Thoughts on productivity and time management</CardDescription>
            </a>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <a href="#" className="block p-6 hover:bg-muted/50 transition-colors">
              <CardTitle className="mb-2">Thinking about luck</CardTitle>
              <CardDescription>Exploring the role of chance in success</CardDescription>
            </a>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Connect</h2>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              I&apos;m always interested in connecting with fellow writers, startup operators, and founders. I love talking about tech, health, education, and opportunities, so if you have something on your mind, my Twitter DMs are always open.
            </p>

            <p className="text-muted-foreground mb-4">
              Subscribe to my <a href="https://tushaarmehtaa.substack.com/" target="_blank" rel="noopener noreferrer">newsletter</a>, where I share everything I&apos;m learning.
            </p>

            <p className="text-muted-foreground">
              Or simply shoot me an email.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}