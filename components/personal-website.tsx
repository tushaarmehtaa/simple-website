'use client'

import * as React from 'react'
import { Github, Twitter, Pen, Mail, ExternalLink, ArrowRight, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useTheme } from "next-themes"
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PersonalWebsiteComponent() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 min-h-screen bg-background text-foreground">
      <header className="mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 mb-8">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tushar Mehta
          </motion.h1>
          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
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
        </div>

        <motion.div 
          className="flex flex-wrap gap-2 sm:gap-4 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="https://x.com/tushaarmehtaa" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
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
              className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
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
              className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
            >
              <Pen className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a 
              href="mailto:tusharmehta2001@icloud.com" 
              aria-label="Email me"
              className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
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
              className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
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
        </motion.div>

        <motion.p 
          className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 space-y-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="block">Hello Hello! I&apos;m Tushaar, and this is my little corner of the internet.</span>
          
          <span className="block">I&apos;m a genuinely curious, perpetually nerdy character, using this space to share and explain what I do.</span>
        </motion.p>

        <motion.div
          className="w-full h-[250px] sm:h-[350px] md:h-[400px] relative mb-8 sm:mb-12 rounded-xl sm:rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Image
            src="/profile.jpg"
            alt="Tushar Mehta"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <CardTitle>Currently</CardTitle>
              <div className="flex justify-center sm:justify-end w-full sm:w-auto">
                <Button variant="link" className="text-sm hover:text-orange-400 transition-colors" asChild>
                  <a href="/past-roles">
                    see past roles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              I lead a consumer crypto community called{' '}
              <a 
                href="https://0xfbi.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
              >
                Farcasters Builders India
              </a>{' '}
              (FBI), supported by{' '}
              <a 
                href="https://www.base.org" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
              >
                Base
              </a>.
            </p>
            <p>
              I&apos;m also working with{' '}
              <a 
                href="https://youtubeasaservice.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
              >
                YaaS
              </a>, writing short-form and long-form video scripts for clients like{' '}
              <a 
                href="https://www.instagram.com/builders.central/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
              >
                Builders Central
              </a>{' '}
              (Zoho Creator) and{' '}
              <a 
                href="https://www.instagram.com/5aitec/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
              >
                5aitec
              </a>{' '}
              ({' '}
              <a 
                href="https://sentient.foundation" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
              >
                Sentient.Foundation
              </a>
              ).
            </p>
            <p>
              On the side, I&apos;m{' '}
              <a 
                href="https://x.com/tushaarmehtaa/status/1858404664548757714" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
              >
                experimenting
              </a>{' '}
              with RAG and multi-LLM AI agents to help startup teams move fast and go brrrr.
            </p>
          </CardContent>
        </Card>
      </header>

      <section className="mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Featured Work</h2>
          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
            <Button variant="link" className="hover:text-orange-400 transition-colors" asChild>
              <a href="/featured-work">
                see all
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          <Dialog>
            <DialogTrigger asChild>
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="p-4 sm:p-6 hover:bg-muted/50 transition-colors">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-full sm:w-1/3 aspect-video relative">
                      <Image 
                        src="/builders-central.png" 
                        alt="Builders Central thumbnail" 
                        fill
                        className="rounded-md sm:rounded-xl object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-2">Builders Central: 0 to 100k</CardTitle>
                      <CardDescription>Video content marketing case study</CardDescription>
                      <ExternalLink className="mt-4 text-muted-foreground" size={20} />
                    </div>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Builders Central: 0 to 100k</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p>I joined them as a consultant in November 2023. They had around 3.5K followers. So, we got to work. Short form content. Long form content. Giveaways. Contests.</p>
                <p>You name it, we did it. And guess what? By November 2024, we crossed 100k followers.</p>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="p-4 sm:p-6 hover:bg-muted/50 transition-colors">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="w-full sm:w-1/3 aspect-video relative">
                      <Image 
                        src="/karthik-sridharan.png" 
                        alt="Karthik Sridharan thumbnail" 
                        fill
                        className="rounded-md sm:rounded-xl object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-2">Karthik Sridharan: 45 to 90k</CardTitle>
                      <CardDescription>Founder personal brand case study</CardDescription>
                      <ExternalLink className="mt-4 text-muted-foreground" size={20} />
                    </div>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Karthik Sridharan: 45 to 90k</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p>I joined as a full-time employee as social media manager. Managing 3 pages at Flexiple. The founder&apos;s page. Another cofounder&apos;s page. And buildd&apos;s page. The founder&apos;s page went 2x. The other cofounder&apos;s page also doubled. And buildd&apos;s page? We grew it to 15k.</p>
                <p>We did it all. Tweets. Threads. Mind maps. Partnerships. Launches. It was fun. And it was rewarding. Seeing those numbers climb.</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section className="mb-12 sm:mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Writing</h2>
          <div className="flex justify-center sm:justify-end w-full sm:w-auto">
            <Button asChild>
              <a href="https://tushaarmehtaa.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                check out my newsletter
              </a>
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <a 
              href="https://tushaarmehtaa.substack.com/p/the-best-thing-that-ever-happened?r=oh6t0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block p-4 sm:p-6 hover:bg-muted/50 transition-colors"
            >
              <CardTitle className="mb-2 hover:text-orange-400 transition-colors">The best thing that ever happened to me</CardTitle>
              <CardDescription>Exploring the role of sports in my life</CardDescription>
            </a>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <a 
              href="https://tushaarmehtaa.substack.com/p/04-being-busy?r=oh6t0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block p-4 sm:p-6 hover:bg-muted/50 transition-colors"
            >
              <CardTitle className="mb-2 hover:text-orange-400 transition-colors">Being busy</CardTitle>
              <CardDescription>Thoughts on being actually busy and pretending to be busy</CardDescription>
            </a>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <a 
              href="https://tushaarmehtaa.substack.com/p/03-thinking-about-luck?r=oh6t0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block p-4 sm:p-6 hover:bg-muted/50 transition-colors"
            >
              <CardTitle className="mb-2 hover:text-orange-400 transition-colors">Thinking about luck</CardTitle>
              <CardDescription>Wrote about how luck is multiplier to everything we do in life</CardDescription>
            </a>
          </Card>
        </div>
      </section>

      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Connect</h2>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">
              I&apos;m always interested in connecting with other writers, startup operators and founders.
            </p>

            <p className="text-muted-foreground mb-4">
              I love to talk about technology, physics, health, education and sports, so if you have something on your mind, my{' '}
              <a 
                href="https://x.com/tushaarmehtaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
              >
                Twitter DMs
              </a>{' '}
              are always open.
            </p>

            <p className="text-muted-foreground mb-4">
              Subscribe to my{' '}
              <a 
                href="https://tushaarmehtaa.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
              >
                newsletter
              </a>{' '}
              where I share everything I&apos;m learning.
            </p>

            <p className="text-muted-foreground">
              Or just{' '}
              <a 
                href="mailto:tusharmehta2001@icloud.com"
                className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
              >
                drop me an email
              </a>
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t">
        <div className="flex justify-center space-x-4">
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
      </footer>
    </div>
  )
}