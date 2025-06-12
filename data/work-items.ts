export interface WorkItem {
  id: string;
  title: string;
  cardDescription: string;
  imageSrc: string;
  imageAlt: string;
  dialogTitle: string;
  dialogContent: {
    lead?: string;
    paragraphs: string[];
    listItems?: string[]; // For bullet points if needed in the future
  };
  link?: string; // Optional external link for the card
}

export const workItems: WorkItem[] = [
  {
    id: 'builders-central',
    title: 'Builders Central: 0 to 160k',
    cardDescription: 'Video content marketing case study',
    imageSrc: '/builders-central.png',
    imageAlt: 'Builders Central thumbnail',
    dialogTitle: 'Builders Central: 0 to 160k',
    dialogContent: {
      lead: 'Growing from 3.5k to 160k+ followers in under 18 months.',
      paragraphs: [
        'I joined Builders Central as a content consultant in November 2023. At the time, it was a small team and this was one of their first clients. I started working with them then. They had around 2–3k followers. My job? I came up with ideas, wrote scripts, guided editors and evolved the content strategy in line with market trends.',
        'We experimented with all kinds of things — short-form videos, long-form explainer posts, contests and giveaways. If it felt right, we did it. For the first six months, growth was steady. Then the reels started going viral. We were getting 500–600k views per video on a channel with barely 20–30k followers.',
        'We capitalised on this. We doubled down on no-code and AI stories. We started writing longer, more in-depth videos. We focused on narrative structure, hooks and editing cues that actually work on social media. I learnt how to write viral videos, as well as those that flop — and why.',
        "We're now close to reaching 100,000 subscribers on YouTube and have amassed over 160,000 subscribers across all our platforms. We've arguably built the world's largest no-code channel that delves deep into the subject. We’ve since expanded into AI content too, and we're just getting started."
      ],
    },
  },
  {
    id: 'karthik-sridharan',
    title: 'Karthik Sridharan: 45 to 90k',
    cardDescription: 'Founder personal brand case study',
    imageSrc: '/karthik-sridharan.png',
    imageAlt: 'Karthik Sridharan thumbnail',
    dialogTitle: 'Karthik Sridharan: 45 to 90k',
    dialogContent: {
      paragraphs: [
        'This was my first full-time job after college. I had worked with OWLED Media, Nintee and Dezerv before, but Flexiple was the first time working a full time job.',
        'I joined in September 2023 as a social media manager, handling three pages:',
        'When I joined, Karthik had around 45k followers. Although he was already active online, his content wasn’t performing well — he had decent leadership ideas, but they lacked that human spark. His posts lacked humour, context and the everyday relatability that makes people care.',
        'So we reworked everything.',
        'We created a system combining leadership, humour and daily insights. 75% of the time, we posted insightful, structured content. The other 25%? Corporate jokes, appreciation posts and viral founder breakdowns — the kind of content that actually goes viral on social media.',
        'And it worked. Big time.',
        "His posts went from 120 likes to 2–3k regularly. One even crossed 25,000 likes. These weren't just vanity metrics either — every viral post resulted in an increase in inbound leads. We reverse-engineered virality by combining founder appreciation, smart case studies and high-context jokes with a personal tone.",
        'By the end of my time there:',
        "We wrote tweets and threads, launched collaborations and ran experiments. It was fun, but more importantly, it worked!"
      ],
      listItems: [
        'Karthik’s personal page',
        'Another co-founder’s page',
        'and the main Buildd brand page.',
        'Karthik’s page had doubled to over 90,000 likes.',
        'The other founder’s page grew at the same rate.',
        'The Buildd brand page crossed 15k followers.'
      ]
    },
  },
  {
    id: 'aroleap',
    title: 'Aroleap: 20 to 30k',
    cardDescription: 'Creative direction, research and writing case study',
    imageSrc: '/aroleap-thumbnail.png', // User needs to add this image to /public
    imageAlt: 'Aroleap thumbnail',
    dialogTitle: 'Aroleap: 20 to 30k',
    dialogContent: {
      lead: 'Health-first content for a fitness brand that cares.',
      paragraphs: [
        'Aroleap is one of my newest clients — a fitness startup backed by Shark Tank and Rainmatter, building high-quality home gym setups. From the moment I saw the product, I knew I wanted to be involved.',
        "We're still in the early stages, and I won't pretend there are any impressive numbers to show just yet. But if you watch the content, you'll see that the videos are excellent. They’re well-researched, aware of trends, and right on point. We’ve focused on blending science, virality and clarity in a way that most health brands don't.",
        'For me personally, this project means a lot. It has pulled me back into a field that I am passionate about: health and fitness. It made me go back to basics: reading medical papers, listening to scientific podcasts and filtering the signal from the noise. I’ve learned to identify reliable research, distinguish pseudoscience from fact, and strike the right balance between being informative and being sensitive.',
        "It’s still early days, but this isn't just a project. It’s a passion. I’m proud of what we’re creating here."
      ],
    },
  },
  // TODO: Add 'More Scriptwriting Work' and 'Podcast Production for Ayush Wadhwa' when their dialog content is defined.
  // For now, these will be filtered out in the components if dialogContent is missing or minimal.
  {
    id: 'scriptwriting',
    title: 'AI-Powered Content Creation',
    cardDescription: 'Scriptwriting & AI production for 5aitec and Terminal.',
    imageSrc: '/scriptwriting.png',
    imageAlt: 'AI-Powered Content Creation thumbnail',
    dialogTitle: 'AI-Generated Content for Tech Channels',
    dialogContent: {
      lead: 'Scriptwriting + full-stack AI production for 5aitec and Terminal.',
      paragraphs: [
        "In early 2024, I got the chance to explore AI-powered content creation through two experimental channels:",
        "*   5aitec: A personal tech channel focused on AI, AR/VR, and frontier tech.",
        "*   Terminal by Flexiple: A brand-led channel aimed at telling tech stories that matter.",
        "Both projects were built on a deeply AI-native workflow. I used:",
        "*   ChatGPT + Claude for writing and outlining",
        "*   Elevenlabs for generating realistic voiceovers",
        "*   HeyGen for AI avatars and video generation",
        "Every part of the stack — from ideation to publishing — was automated or assisted with AI tools. It was the first time I fully leaned into an AI+human hybrid pipeline, and it completely changed how I think about video production.",
        "Terminal was sunset just a month after launch, and while there weren’t long-term metrics to show, the learning curve was huge. I picked up how to balance technical accuracy with storytelling, how to use AI tools at scale, and how timing plays a major role in virality.",
        "One of my favorite wins? The Llama 3 video I wrote for 5aitec — it crossed 1M+ views, mostly because we got the timing and tone just right.",
        "Another highlight: the Instacart explainer for Terminal, where I loved simplifying a complex product story for a short-form format.",
        "These projects reminded me that experimentation is its own reward — especially when it’s at the edge of what’s possible."
      ]
    }
    // No general 'link' property for the card itself for this item
  },
  {
    id: 'podcast-ayush',
    title: 'Podcast Production for Ayush Wadhwa',
    cardDescription: 'End-to-end podcast management and growth',
    imageSrc: '/podcast-production.png',
    imageAlt: 'Podcast Production for Ayush Wadhwa thumbnail',
    dialogTitle: 'Podcast Production for Ayush Wadhwa',
    dialogContent: {
      lead: 'Where it all started — from 13k to 26k on YouTube, and 35k to 250k on Instagram.',
      paragraphs: [
        "Back in June 2021, I landed my first ever paid gig — producing Ayush Wadhwa's Agency. I had no fancy experience, no playbook — just a strong urge to figure things out.",
        "I handled end-to-end podcast production:",
        "*   Researching and reaching out to guests",
        "*   Writing sharp interview questions",
        "*   Planning short-form video content with editors",
        "*   Learning YouTube SEO from scratch and optimizing content",
        "*   Figuring out how to distribute and promote episodes",
        "This was where I learned everything: content, marketing, audience building, working with a team, writing emails that don't sound dumb — all of it. I was a clueless college kid figuring things out in real-time, and I loved it.",
        "During my time on the team:",
        "*   YouTube subscribers grew from 13K to 26K",
        "*   Instagram followers shot up from 35K to 250K",
        "Working with Ayush gave me my foundation — in content, in consistency, and in collaboration. Everything I do now started here."
      ]
    },
  },
];
