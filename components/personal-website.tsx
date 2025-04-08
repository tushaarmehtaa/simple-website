'use client'

import * as React from 'react'
import { Github, Twitter, Pen, Mail, ExternalLink, ArrowRight, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
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
        <div className="flex flex-row justify-between items-center mb-8">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tushar Mehta
          </motion.h1>
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
          <span className="block">Hello Hello! I&apos;m Tushaar, and this is my little corner of the world wide web.</span>
          
          <span className="block">I&apos;m a genuinely curious, internet kid, using this space to share and explain what I do.</span>
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
            <div className="flex flex-row justify-between items-center">
              <CardTitle>Summary</CardTitle>
              <Button variant="link" className="text-sm hover:text-orange-400 transition-colors" asChild>
                <a href="/past-roles">
                  see past roles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              I write and market for tech-forward companies, especially in <strong>AI</strong>, <strong>health</strong>, and <strong>no-code</strong>, with a focus on breaking down technical ideas through content and storytelling.
            </p>
            
            <p><strong>Currently:</strong></p>
            
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>writing short-form & long-form video scripts for <a 
              href="https://www.instagram.com/builders.central?igsh=cXNmM3l5MzhocG5o" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
            ><strong>Builders Central</strong></a> (Zoho Creator) via <a 
              href="https://youtubeasaservice.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
            >YaaS</a></li>
              <li>writing science-backed fitness videos for <a 
              href="https://www.instagram.com/aroleap?igsh=M3AxdWsxZXNyOXJt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
            ><strong>Aroleap</strong></a>; a shark-tank backed fitness brand</li>
              <li>running a <a 
              href="https://chat.whatsapp.com/GT73AXT2vhWBoxJjjDfeN7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
            ><strong>writers' community</strong></a>—a casual space where marketers hang, talk, and jam on writing</li>
              <li>building <a 
              href="https://hemingway.ink/landing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
            ><strong>Hemingway</strong></a>, a product to make content writing easier and faster</li>
              <li>running <strong>FBI</strong> (Farcaster Builders International), an onchain community and talent layer for <a 
              href="https://www.base.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
            ><strong>Base</strong></a></li>
            </ul>
            
            <p>Always jamming with founders, shipping content on X, and spending time on the mat as a jiu-jitsu noob.</p>
          </CardContent>
        </Card>
      </header>

      <section className="mb-12 sm:mb-16">
        <div className="flex flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Featured Work</h2>
          <Button variant="link" className="hover:text-orange-400 transition-colors shrink-0" asChild>
            <a href="/featured-work">
              see all
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
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
                      <CardTitle className="mb-2">Builders Central: 0 to 150k</CardTitle>
                      <CardDescription>Video content marketing case study</CardDescription>
                      <ExternalLink className="mt-4 text-muted-foreground" size={20} />
                    </div>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Builders Central: 0 to 150k</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p>i joined them as a consultant in november 2023, when they had around 3.5k followers.</p>
                
                <p>we got to work—short-form content, long-form posts, giveaways, contests. you name it, we tried it.</p>
                
                <p>and by april 2025, we had crossed 150k followers.</p>
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
                <p>i joined flexiple full-time as a social media manager, handling three pages:</p>
                
                <ul className="list-disc pl-5 space-y-2 mt-3 mb-3">
                  <li>the founder's personal page</li>
                  <li>another cofounder's page</li>
                  <li>the main buildd brand page</li>
                </ul>
                
                <p>in my time there:</p>
                
                <ul className="list-disc pl-5 space-y-2 mt-3 mb-3">
                  <li>the founder's page 2x'ed</li>
                  <li>the cofounder's page also doubled</li>
                  <li>we grew buildd's page to 15k followers</li>
                </ul>
                
                <p>we did it all—tweets, threads, mind maps, partnerships, launches.</p>
                
                <p>it was fun, and more importantly, it was rewarding to see those numbers climb.</p>
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
                        src="/scriptwriting.png" 
                        alt="More Scriptwriting Work" 
                        fill
                        className="rounded-md sm:rounded-xl object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-2">More Scriptwriting Work</CardTitle>
                      <CardDescription>AI-generated content for tech channels</CardDescription>
                      <ExternalLink className="mt-4 text-muted-foreground" size={20} />
                    </div>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>More Scriptwriting Work</DialogTitle>
                <DialogDescription>AI-generated content for tech channels</DialogDescription>
              </DialogHeader>
              <div className="space-y-3 sm:space-y-4">
                <div className="aspect-video relative">
                  <Image 
                    src="/scriptwriting.png" 
                    alt="Scriptwriting Work Preview" 
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base">I&apos;ve been working with pages like Terminal and 5aitec, focusing on short-form, tech-related scripts. While the process is still ongoing to achieve visible channel transformation, I genuinely enjoy creating this content.</p>
                <p className="text-sm sm:text-base">Here are a couple of scripts that I particularly enjoyed writing:</p>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-1 sm:space-y-2">
                  <li>
                    <a 
                      href="https://www.instagram.com/reel/C1-9qyuOWy1/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:underline text-sm sm:text-base"
                    >
                      Instacart
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.instagram.com/reel/C1-9qyuOWy1/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-400 hover:underline text-sm sm:text-base"
                    >
                      Heygen Avatars
                    </a>
                  </li>
                </ol>
                <p className="text-sm sm:text-base">Fun fact: Both the audio and video in these projects are fully AI-generated—no human involvement at all!</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section className="mb-12 sm:mb-16">
        <div className="flex flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Events</h2>
        </div>
        <div className="mb-6">
          <p className="text-muted-foreground">I&apos;ve explored the IRL side of developer marketing by leading events for Base in India. Over the last 6 months, I&apos;ve built a really active builder collective on Base through organizing:</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          <Card className="hover:shadow-lg transition-shadow duration-300 aspect-square min-w-[150px]">
            <div className="relative h-full">
              <Image
                src="/events/antler-frames.jpg"
                alt="Frames Hackathon at Antler"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent h-1/3 text-white rounded-b-lg">
                <h3 className="font-semibold mb-1 text-sm sm:text-base">Frames Hackathon</h3>
                <p className="text-xs sm:text-sm text-gray-200">at Antler</p>
              </div>
            </div>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 aspect-square min-w-[150px]">
            <div className="relative h-full">
              <Image
                src="/events/zo-house.jpg"
                alt="Base Meetup at Zo House"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent h-1/3 text-white rounded-b-lg">
                <h3 className="font-semibold mb-1 text-sm sm:text-base">Base Meetup</h3>
                <p className="text-xs sm:text-sm text-gray-200">at Zo House</p>
              </div>
            </div>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 aspect-square min-w-[150px]">
            <div className="relative h-full">
              <Image
                src="/events/hashed-haus.png"
                alt="Farcaster Friday at Hashed Haus"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent h-1/3 text-white rounded-b-lg">
                <h3 className="font-semibold mb-1 text-sm sm:text-base">Farcaster Friday</h3>
                <p className="text-xs sm:text-sm text-gray-200">at Hashed Haus</p>
              </div>
            </div>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 aspect-square min-w-[150px]">
            <div className="relative h-full">
              <Image
                src="/events/devfolio.png"
                alt="Buildathon Kick-Off at Devfolio"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent h-1/3 text-white rounded-b-lg">
                <h3 className="font-semibold mb-1 text-sm sm:text-base">Base Buildathon</h3>
                <p className="text-xs sm:text-sm text-gray-200">at Devfolio</p>
              </div>
            </div>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 aspect-square min-w-[150px]">
            <div className="relative h-full">
              <Image
                src="/events/ibw-eth.png"
                alt="Base Activation Events"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent h-1/3 text-white rounded-b-lg">
                <h3 className="font-semibold mb-1 text-sm sm:text-base">20+ Base Events</h3>
                <p className="text-xs sm:text-sm text-gray-200">During IBW and ETHIndia</p>
              </div>
            </div>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 aspect-square min-w-[150px]">
            <div className="relative h-full">
              <Image
                src="/events/antler-ai.png"
                alt="Base AI Hackathon at Antler Residency"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent h-1/3 text-white rounded-b-lg">
                <h3 className="font-semibold mb-1 text-sm sm:text-base">Base AI Hackathon</h3>
                <p className="text-xs sm:text-sm text-gray-200">at Antler Residency</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mb-12 sm:mb-16">
        <div className="flex flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Projects</h2>
        </div>
        <div className="mb-6">
          <p className="text-muted-foreground">I have recently been trying to learn to code with AI and have built a couple of projects:</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          <Card className="hover:shadow-lg transition-shadow duration-300 min-w-[150px]">
            <a 
              href="https://hemingway.fly.dev/landing"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="aspect-square w-full relative">
                <Image
                  src="/hemingway-preview.jpg"
                  alt="HemingwayAI Preview"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-2 sm:p-4">
                <CardTitle className="mb-1 sm:mb-2 text-sm sm:text-base hover:text-orange-400 transition-colors">HemingwayAI</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground">A tool that allows marketers to clone themselves to save (a lot of) time writing.</CardDescription>
                <div className="mt-2 sm:mt-4 flex items-center text-muted-foreground">
                  <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                </div>
              </div>
            </a>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300 min-w-[150px]">
            <a 
              href="https://post-generator-seven.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="aspect-square w-full relative">
                <Image
                  src="/post-generator-preview.jpg"
                  alt="Post Generator Preview"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-2 sm:p-4">
                <CardTitle className="mb-1 sm:mb-2 text-sm sm:text-base hover:text-orange-400 transition-colors">Post Generator</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground">Mix and match any template or working social post with your original thought. You&apos;ll get a post that&apos;s yours, but already socially accepted.</CardDescription>
                <div className="mt-2 sm:mt-4 flex items-center text-muted-foreground">
                  <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                </div>
              </div>
            </a>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300 min-w-[150px]">
            <a 
              href="https://ai-scriptwriter.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="aspect-square w-full relative">
                <Image
                  src="/script-writer-preview.jpg"
                  alt="AI Script Writer Preview"
                  fill
                  className="object-cover rounded-t-lg object-top"
                />
              </div>
              <div className="p-2 sm:p-4">
                <CardTitle className="mb-1 sm:mb-2 text-sm sm:text-base hover:text-orange-400 transition-colors">AI Script Writer</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground">An app that asked me what I wanted to write about, what kind of hook to use, and what to research, and gave me a reel in 15 seconds that took hours to write manually.</CardDescription>
                <div className="mt-2 sm:mt-4 flex items-center text-muted-foreground">
                  <ExternalLink size={16} className="sm:w-5 sm:h-5" />
                </div>
              </div>
            </a>
          </Card>
        </div>
      </section>

      <section className="mb-12 sm:mb-16">
        <div className="flex flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Writing</h2>
          <Button asChild className="shrink-0">
            <a href="https://tushaarmehtaa.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">check out my newsletter</a>
          </Button>
        </div>
        <div className="space-y-6">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <a 
              href="https://open.substack.com/pub/tushaarmehtaa/p/march-2025?r=oh6t0&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block p-4 sm:p-6 hover:bg-muted/50 transition-colors"
            >
              <CardTitle className="mb-2 hover:text-orange-400 transition-colors">Impact per unit time {'>'}{'>'}Impact</CardTitle>
              <CardDescription>Why impact per unit time is a better metric for career growth than just "impact" alone—and why you should optimise for it, even if your boss or client doesn't.</CardDescription>
            </a>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <a 
              href="https://tushaarmehtaa.substack.com/p/february-2025?r=oh6t0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block p-4 sm:p-6 hover:bg-muted/50 transition-colors"
            >
              <CardTitle className="mb-2 hover:text-orange-400 transition-colors">Thinking about emergency funds for all of us 20-something ambitious kids</CardTitle>
              <CardDescription>A quick February recap, plus a breakdown of what to actually do when you hit a career emergency—how to think about it, plan for it, and bounce back without panic.</CardDescription>
            </a>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <a 
              href="https://tushaarmehtaa.substack.com/p/do-not-look-for-goals-look-for-a" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block p-4 sm:p-6 hover:bg-muted/50 transition-colors"
            >
              <CardTitle className="mb-2 hover:text-orange-400 transition-colors">Do not look for goals, look for a way of life.</CardTitle>
              <CardDescription>Just recapping my January with things I recently read</CardDescription>
            </a>
          </Card>
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