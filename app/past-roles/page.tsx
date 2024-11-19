'use client'

import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowLeft, Moon, Sun, Github, Twitter, Mail, Pen } from 'lucide-react'
import { useTheme } from "next-themes"
import Link from 'next/link'
import * as React from 'react'

interface Project {
  title: string;
  link?: string;
  description: string;
  parentCompany?: {
    name: string;
    link: string;
  };
  italic?: string;
}

interface Quest {
  year: string;
  projects: Project[];
}

const mainQuests: Quest[] = [
  {
    year: '2024',
    projects: [
      {
        title: 'Socials @Flexiple',
        link: 'https://flexiple.com',
        description: 'Writing content for founder accounts and scriptwriting for videos.'
      }
    ]
  },
  {
    year: '2023',
    projects: [
      {
        title: 'Marketing & Growth @PurplePay',
        link: 'https://purplepay.app',
        description: 'Only marketer in a team of 12, solving for cross-border payments with crypto.'
      },
      {
        title: 'Content Writer @Dezerv',
        link: 'https://www.dezerv.in/',
        description: 'Wrote 60+ SEO-optimized blogs for a $100M+ wealth management firm.'
      },
      {
        title: 'Marketing @Nintee',
        link: 'https://nintee.com/',
        parentCompany: {
          name: 'Wingify',
          link: 'https://wingify.com/'
        },
        description: 'Worked on a personal development and habit AI coach.',
        italic: '(One of the greatest experiences for me as I got introduced to genAI here)'
      }
    ]
  },
  {
    year: '2022',
    projects: [
      {
        title: 'Marketing @Owled',
        link: 'https://www.owledmedia.com/',
        description: 'YouTube channel management, newsletter writing, short-form distribution execution for various clients.',
        italic: '(Huge for me personally as everything I learned in marketing started here)'
      }
    ]
  }
]

const sideQuests: Quest[] = [
  {
    year: '2024',
    projects: [
      {
        title: 'AI Tweet Generator',
        description: 'Helping people with great thoughts write tweets easily with templates and inspiration.'
      },
      {
        title: 'JimBro',
        link: 'https://jimbro.framer.ai/',
        description: 'Building the easiest way to log workouts and get better at sports.'
      },
      {
        title: 'Zoho Creator',
        link: 'https://www.zoho.com/creator/',
        description: 'Consulting for Zoho Creator via YaaS Media; wrote over 200+ short-form scripts.'
      },
      {
        title: 'Dacoit Design',
        link: 'https://www.dacoit.design/',
        description: 'Wrote a once-a-year year-in-review for Rahul, founder of Dacoit Design.'
      },
      {
        title: 'FBI',
        link: 'https://0xfbi.com/',
        description: 'On-and-off partnership with Farcaster Builders International for organizing hackathons, meetups, etc.'
      }
    ]
  },
  {
    year: '2023',
    projects: [
      {
        title: 'LogX',
        link: 'https://www.logx.trade/',
        description: 'Wrote multiple Twitter threads covering crypto trading and ecosystems LogX explored for integration.'
      },
      {
        title: 'Floww Media',
        link: 'https://x.com/FlowwMedia',
        description: 'A services business started with 2 of my brothers to make thumbnails for YouTubers - got some clients from India, Korea, and the States - then shut it down.'
      }
    ]
  },
  {
    year: '2022',
    projects: [
      {
        title: 'Seekify',
        link: 'https://seekify.com/',
        description: 'Interned to write social media posts.'
      },
      {
        title: 'Segmind',
        link: 'https://www.segmind.com/',
        description: 'Worked as a sales and marketing rep—explored how B2B SaaS works.'
      },
      {
        title: 'Podcast Decoded',
        link: 'https://x.com/podcastdecoded_',
        description: "We (me and my brother) listened to podcasts and shared notes - so you don't have to."
      }
    ]
  }
]

export default function PastRoles() {
  const [activeQuest, setActiveQuest] = useState('main-quests')
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
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-3xl sm:text-4xl font-bold">Past Roles</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-6 w-6" />
            ) : (
              <Moon className="h-6 w-6" />
            )}
          </Button>
        </div>
        <div className="flex gap-4 mb-8">
          <Button 
            variant={activeQuest === 'main-quests' ? "default" : "outline"}
            onClick={() => setActiveQuest('main-quests')}
          >
            Main Quests
          </Button>
          <Button 
            variant={activeQuest === 'side-quests' ? "default" : "outline"}
            onClick={() => setActiveQuest('side-quests')}
          >
            Side Quests
          </Button>
        </div>
      </header>

      <main>
        <div className="space-y-8">
          {(activeQuest === 'main-quests' ? mainQuests : sideQuests).map((yearGroup) => (
            <div key={yearGroup.year}>
              <h2 className="text-2xl font-semibold mb-4 text-muted-foreground">
                {yearGroup.year}
              </h2>
              <div className="space-y-4">
                {yearGroup.projects.map((project, index) => (
                  <Card key={index} className="border-l-4 hover:border-l-primary transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">
                          {project.title}
                          {project.link && (
                            <a 
                              href={project.link}
                              className="inline-flex items-center ml-2 text-primary hover:text-primary/80"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </CardTitle>
                      </div>
                      {project.parentCompany && (
                        <div className="text-sm text-muted-foreground">
                          Parent company:{' '}
                          <a 
                            href={project.parentCompany.link}
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.parentCompany.name}
                          </a>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                      {project.italic && (
                        <p className="text-muted-foreground italic mt-2">
                          {project.italic}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
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