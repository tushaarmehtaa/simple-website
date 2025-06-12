'use client'

import * as React from 'react'
import { Github, Twitter, Pen, Mail, ExternalLink, ArrowRight, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useTheme } from "next-themes"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { workItems, WorkItem } from '../data/work-items';

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

        <div className="flex flex-col md:flex-row items-start gap-8 mb-8 sm:mb-12">
          {/* Left Column: Text */}
          <motion.div 
            className="md:w-3/5 w-full space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* 'About Me' heading removed */}
            <p className="text-sm sm:text-base text-muted-foreground leading-normal">
              Hey, I’m Tushaar, a writer, operator, and a startup generalist. For the past ~4 years, I’ve worked with early-stage startups like OWLED Media, Dezerv, and Nintee, mostly across content, marketing, and community.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">What I’m Doing Right Now:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-muted-foreground leading-normal">
              <li>Writing scripts (both short-form & long-form) for <a href="https://www.instagram.com/builders.central?igsh=cXNmM3l5MzhocG5o" target="_blank" rel="noopener noreferrer" className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors">Builders Central</a> (Zoho Creator) via <a href="https://youtubeasaservice.com" target="_blank" rel="noopener noreferrer" className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors">YaaS</a></li>
              <li>Consulting and helping in creative direction and scripting videos for <a href="https://www.instagram.com/aroleap?igsh=M3AxdWsxZXNyOXJt" target="_blank" rel="noopener noreferrer" className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors">Aroleap</a>, a Shark Tank and Rainmatter–backed fitness brand</li>
              <li>Running a casual <a href="https://chat.whatsapp.com/GT73AXT2vhWBoxJjjDfeN7" target="_blank" rel="noopener noreferrer" className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors">writers&apos; community</a> for marketers and creators</li>
              <li>Wrapping up my time building FBI (Farcaster Builders International) — talent layer + an onchain dev community for <a href="https://www.base.org" target="_blank" rel="noopener noreferrer" className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors">Base</a></li>
            </ul>
            <p className="text-sm sm:text-base text-foreground font-semibold leading-normal">
              Now, I’m looking to go deeper and join a high-agency team to help build something people want.
            </p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="md:w-2/5 w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/profile.jpg"
              alt="Tushar Mehta"
              fill
              className="object-cover object-[83%_center]"
              priority
            />
          </motion.div>
        </div>

        {/* Summary Card Removed */}
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
          {workItems.filter(item => item.id === 'builders-central' || item.id === 'karthik-sridharan' || item.id === 'aroleap').map((item: WorkItem) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <div className="p-4 sm:p-6 hover:bg-muted/50 transition-colors">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="w-full sm:w-1/3 aspect-video relative">
                        <Image 
                          src={item.imageSrc}
                          alt={item.imageAlt} 
                          fill
                          className="rounded-md sm:rounded-xl object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">{item.title}</CardTitle>
                        <CardDescription>{item.cardDescription}</CardDescription>
                        {/* Optional: Add external link icon if item.link exists */}
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-4 text-muted-foreground inline-block">
                            <ExternalLink size={20} />
                          </a>
                        )}
                        {!item.link && <ExternalLink className="mt-4 text-muted-foreground" size={20} />}
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
                    <p key={index}>{paragraph}</p>
                  ))}
                  {item.dialogContent.listItems && item.dialogContent.listItems.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1 my-2">
                      {item.dialogContent.listItems.map((listItem, index) => (
                        <li key={index}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>

      <section className="mb-12 sm:mb-16">
        <div className="flex flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Events</h2>
        </div>
        <div className="mb-6">
          <p className="text-muted-foreground">I spent most of 2024 and 2025 organising developer-focused events to drive top-of-funnel growth. To make this happen, I collaborated with developer-first companies such as Farcaster, Base, Coinbase and Windsurf.<br />Some of the events:</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
          <Card className="hover:shadow-lg transition-shadow duration-300 aspect-square min-w-[150px]">
            <div className="relative h-full">
              <Image
                src="/events/antler-frames.jpg"
                alt="Frames Hackathon at Antler"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/80 via-black/30 to-transparent h-2/5 text-white rounded-b-lg flex flex-col justify-end items-center text-center">
                <h3 className="font-semibold text-xs leading-tight">Frames Hackathon</h3>
                <p className="text-[0.65rem] leading-tight text-gray-300">at Antler</p>
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
              <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/80 via-black/30 to-transparent h-2/5 text-white rounded-b-lg flex flex-col justify-end items-center text-center">
                <h3 className="font-semibold text-xs leading-tight">Base Meetup</h3>
                <p className="text-[0.65rem] leading-tight text-gray-300">at Zo House</p>
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
              <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/80 via-black/30 to-transparent h-2/5 text-white rounded-b-lg flex flex-col justify-end items-center text-center">
                <h3 className="font-semibold text-xs leading-tight">Farcaster Friday</h3>
                <p className="text-[0.65rem] leading-tight text-gray-300">at Hashed Haus</p>
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
              <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/80 via-black/30 to-transparent h-2/5 text-white rounded-b-lg flex flex-col justify-end items-center text-center">
                <h3 className="font-semibold text-xs leading-tight">Base Buildathon</h3>
                <p className="text-[0.65rem] leading-tight text-gray-300">at Devfolio</p>
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
              <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/80 via-black/30 to-transparent h-2/5 text-white rounded-b-lg flex flex-col justify-end items-center text-center">
                <h3 className="font-semibold text-xs leading-tight">20+ Base Events</h3>
                <p className="text-[0.65rem] leading-tight text-gray-300">During IBW and ETHIndia</p>
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
              <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/80 via-black/30 to-transparent h-2/5 text-white rounded-b-lg flex flex-col justify-end items-center text-center">
                <h3 className="font-semibold text-xs leading-tight">Base AI Hackathon</h3>
                <p className="text-[0.65rem] leading-tight text-gray-300">at Antler Residency</p>
              </div>
            </div>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 aspect-square min-w-[150px]">
            <div className="relative h-full">
              <Image
                src="/events/windsurf.png.png"
                alt="Windsurf Speed Build Event at Antler Residency"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/80 via-black/30 to-transparent h-2/5 text-white rounded-b-lg flex flex-col justify-end items-center text-center">
                <h3 className="font-semibold text-xs leading-tight">Windsurf Speed Build Event</h3>
                <p className="text-[0.65rem] leading-tight text-gray-300">at Antler Residency</p>
              </div>
            </div>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300 aspect-square min-w-[150px]">
            <div className="relative h-full">
              <Image
                src="/events/basedfellowship.png.png"
                alt="Based Fellowship at Dharamshala"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/80 via-black/30 to-transparent h-2/5 text-white rounded-b-lg flex flex-col justify-end items-center text-center">
                <h3 className="font-semibold text-xs leading-tight">Based Fellowship</h3>
                <p className="text-[0.65rem] leading-tight text-gray-300">@ Dharamshala</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="mb-12 sm:mb-16">
        <div className="flex flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Tinkering</h2>
        </div>
        <div className="mb-6">
          <p className="text-muted-foreground">I got tired of not being able to talk to devs in their language — so I learned enough code to ship my own small tools. All of these solve real problems I had while working:</p>
        </div>
        <div className="space-y-6">
          {/* Project 1: HemingwayAI */}
          <div className="flex items-start space-x-4 group">
            <Image 
              src="/projects/hemingway.png" 
              alt="HemingwayAI Logo" 
              width={40} 
              height={40} 
              className="object-contain flex-shrink-0"
            />
            <div>
              <a href="https://hemingway.ink/" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-foreground hover:text-orange-400 transition-colors group-hover:underline">
                HemingwayAI <ExternalLink className="inline-block w-4 h-4 ml-1 opacity-75 group-hover:opacity-100" />
              </a>
              <p className="text-sm text-muted-foreground mt-1">AI tool for marketers to clone their writing style.</p>
            </div>
          </div>
          {/* Project 2: Post Generator */}
          <div className="flex items-start space-x-4 group">
            <Image 
              src="/projects/postgenerator.png" 
              alt="Post Generator Logo" 
              width={40} 
              height={40} 
              className="object-contain flex-shrink-0"
            />
            <div>
              <a href="https://post-generator-seven.vercel.app" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-foreground hover:text-orange-400 transition-colors group-hover:underline">
                Post Generator <ExternalLink className="inline-block w-4 h-4 ml-1 opacity-75 group-hover:opacity-100" />
              </a>
              <p className="text-sm text-muted-foreground mt-1">Generate social posts by mixing socially accepted templates with original thought.</p>
            </div>
          </div>
          {/* Project 3: AI Script Writer */}
          <div className="flex items-start space-x-4 group">
            <Image 
              src="/projects/scriptwriter.png" 
              alt="AI Script Writer Logo" 
              width={40} 
              height={40} 
              className="object-contain flex-shrink-0"
            />
            <div>
              <a href="https://ai-scriptwriter.vercel.app" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-foreground hover:text-orange-400 transition-colors group-hover:underline">
                AI Script Writer <ExternalLink className="inline-block w-4 h-4 ml-1 opacity-75 group-hover:opacity-100" />
              </a>
              <p className="text-sm text-muted-foreground mt-1">Create video scripts in seconds from topics and research.</p>
            </div>
          </div>
          {/* Project 4: FBI website */}
          <div className="flex items-start space-x-4 group">
            <Image 
              src="/projects/FBI 1.png" 
              alt="FBI Website Logo" 
              width={40} 
              height={40} 
              className="object-contain flex-shrink-0"
            />
            <div>
              <a href="https://your-fbi-project-link.com" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-foreground hover:text-orange-400 transition-colors group-hover:underline">
                FBI website <ExternalLink className="inline-block w-4 h-4 ml-1 opacity-75 group-hover:opacity-100" />
              </a>
              <p className="text-sm text-muted-foreground mt-1">Full-stack website with builder directory for FBI.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12 sm:mb-16">
        <div className="flex flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Thoughts</h2>
          <Button asChild className="shrink-0">
            <a href="https://tushaarmehtaa.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">check out my newsletter</a>
          </Button>
        </div>
        <p className="text-muted-foreground mb-6">I also write a newsletter. Less advice, more lived experience.</p>
        <div className="space-y-4">
          {/* New Article - May 31 */}
          <div className="flex justify-between items-center">
            <a href="https://tushaarmehtaa.substack.com/p/i-thought-i-was-too-good-for-small" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-foreground hover:text-orange-400 hover:underline transition-colors">
              I thought I was too good for small wins
            </a>
            <span className="text-sm text-muted-foreground whitespace-nowrap">31.05.2025</span>
          </div>
          {/* New Article - May 1 */}
          <div className="flex justify-between items-center">
            <a href="https://substack.com/@tushaarmehtaa/p-160136954" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-foreground hover:text-orange-400 hover:underline transition-colors">
              you&apos;re not meant to follow a path.
            </a>
            <span className="text-sm text-muted-foreground whitespace-nowrap">01.05.2025</span>
          </div>
          {/* Article 1 */}
          <div className="flex justify-between items-center">
            <a href="https://open.substack.com/pub/tushaarmehtaa/p/march-2025?r=oh6t0&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-foreground hover:text-orange-400 hover:underline transition-colors">
              Impact per unit time {'>'}{'>'}Impact
            </a>
            <span className="text-sm text-muted-foreground whitespace-nowrap">29.03.2025</span>
          </div>
          {/* Article 2 */}
          <div className="flex justify-between items-center">
            <a href="https://tushaarmehtaa.substack.com/p/february-2025?r=oh6t0" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-foreground hover:text-orange-400 hover:underline transition-colors">
              Thinking about emergency funds for all of us 20-something ambitious kids
            </a>
            <span className="text-sm text-muted-foreground whitespace-nowrap">01.03.2025</span>
          </div>
          {/* Article 3 */}
          <div className="flex justify-between items-center">
            <a href="https://tushaarmehtaa.substack.com/p/do-not-look-for-goals-look-for-a" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-foreground hover:text-orange-400 hover:underline transition-colors">
              Do not look for goals, look for a way of life.
            </a>
            <span className="text-sm text-muted-foreground whitespace-nowrap">28.02.2025</span>
          </div>
          {/* Article 4 */}
          <div className="flex justify-between items-center">
            <a href="https://tushaarmehtaa.substack.com/p/the-best-thing-that-ever-happened?r=oh6t0" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-foreground hover:text-orange-400 hover:underline transition-colors">
              The best thing that ever happened to me
            </a>
            <span className="text-sm text-muted-foreground whitespace-nowrap">18.11.2025</span>
          </div>
        </div>
      </section>

      <section className="mb-12 sm:mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Say hello!</h2>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-6">
              I’m always happy to chat with other writers, operators, or builders. Especially if you’re working at the intersection of tech, health, education, or sports.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
              <li>
                <a 
                  href="https://x.com/tushaarmehtaa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
                >
                  Twitter DMs
                </a>{' '}
                are open
              </li>
              <li>
                You can also just{' '}
                <a 
                  href="mailto:tusharmehta2001@icloud.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
                >
                  drop me an email
                </a>
              </li>
              <li>
                Or{' '}
                <a 
                  href="https://tushaarmehtaa.substack.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline decoration-2 decoration-orange-400 hover:text-orange-400 transition-colors"
                >
                  subscribe to my newsletter
                </a>{' '}
                and follow the rabbit hole
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t">
        <div className="flex justify-center space-x-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://x.com/tushaarmehtaa" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile" className="hover:text-orange-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Follow me on X</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/tushaarmehtaa" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hover:text-orange-400 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Coding</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://tarry-muscle-429.notion.site/Tushar-s-Writing-Portfolio-13e9c6707d96808f9ccfdc1c481b33c4" target="_blank" rel="noopener noreferrer" aria-label="Writing Portfolio" className="hover:text-orange-400 transition-colors">
                    <Pen className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Checkout my writing portfolio</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <a href="mailto:tusharmehta2001@icloud.com" aria-label="Email me" className="hover:text-orange-400 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Write an email to me</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://tushaarmehtaa.substack.com" target="_blank" rel="noopener noreferrer" aria-label="Newsletter" className="hover:text-orange-400 transition-colors">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                    </svg>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Checkout my thoughts</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
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