import type { IconName } from "@/components/ui/Icon";

export type Indicator = { name: string; desc: string };

export type Goal = {
  name: string;
  icon: IconName;
  description: string;
  indicators: { strengths: Indicator[]; adversity: Indicator[] };
  howToImprove: string;
  workshops: { title: string; duration: string; type: "workshop" | "video" | "practice" }[];
};

export const GOAL_MAPPINGS: Record<string, Goal> = {
  rel: {
    name: "My relationship",
    icon: "heart",
    description: "Partner, dating, intimacy, or growing together as a couple",
    indicators: {
      strengths: [
        { name: "Positive Social Connections", desc: "Building healthy personal and environmental relationships" },
        { name: "Social Support", desc: "Creating reliable help and emotional connections" },
        { name: "Leadership", desc: "Developing ability to positively influence others" },
      ],
      adversity: [
        { name: "Social Exclusion", desc: "Addressing feelings of being excluded or ignored" },
        { name: "Intimate Partner Stress", desc: "Reducing conflict in close relationships" },
        { name: "Self-Criticism", desc: "Building self-worth to show up authentically" },
      ],
    },
    howToImprove:
      "Practice active listening, set healthy boundaries, develop emotional intelligence, and invest time in meaningful connections.",
    workshops: [
      { title: "Effective Communication in Relationships", duration: "15 min", type: "workshop" },
      { title: "Healthy Boundaries Workshop", duration: "10 min", type: "video" },
      { title: "Emotional Intelligence Practice", duration: "10 min", type: "practice" },
    ],
  },
  fam: {
    name: "My kids or family",
    icon: "users",
    description: "Parenting, school-age children, single parenting, or family life at home",
    indicators: {
      strengths: [
        { name: "Social Support", desc: "Creating reliable help and emotional connections" },
        { name: "Positive Social Connections", desc: "Building healthy family relationships" },
        { name: "Leadership", desc: "Developing confidence to guide and support others" },
      ],
      adversity: [
        { name: "Current Traumatic Stress", desc: "Managing family stress and difficult experiences" },
        { name: "Intimate Partner Stress", desc: "Reducing conflict in close relationships" },
        { name: "Social Exclusion", desc: "Addressing feelings of isolation within family" },
      ],
    },
    howToImprove:
      "Model resilience behaviors, create safe spaces for communication, understand developmental needs, and prioritize your own well-being.",
    workshops: [
      { title: "Resilient Parenting Strategies", duration: "15 min", type: "workshop" },
      { title: "Family Communication Skills", duration: "10 min", type: "video" },
      { title: "Supporting Your Child's Mental Health", duration: "15 min", type: "workshop" },
    ],
  },
  work: {
    name: "My career or work",
    icon: "briefcase",
    description: "Starting out, advancing, changing paths, or leading a team",
    indicators: {
      strengths: [
        { name: "Leadership", desc: "Building confidence in your professional abilities" },
        { name: "Grit", desc: "Developing commitment to achieve career goals" },
        { name: "Personal Standards", desc: "Setting healthy professional expectations" },
      ],
      adversity: [
        { name: "Anxiety", desc: "Managing workplace stress and uncertainty" },
        { name: "Self-Criticism", desc: "Reducing harsh self-judgment about performance" },
        { name: "Depression", desc: "Addressing burnout and loss of motivation" },
      ],
    },
    howToImprove:
      "Set clear boundaries between work and life, develop professional support networks, practice self-advocacy, and celebrate progress.",
    workshops: [
      { title: "Navigating Career Transitions", duration: "15 min", type: "workshop" },
      { title: "Leadership Under Pressure", duration: "10 min", type: "video" },
      { title: "Work-Life Balance Practice", duration: "10 min", type: "practice" },
    ],
  },
  school: {
    name: "School or my future",
    icon: "cap",
    description: "College life, academics, finding direction, or what comes next",
    indicators: {
      strengths: [
        { name: "Hope", desc: "Building belief in your ability to achieve academic goals" },
        { name: "Grit", desc: "Developing perseverance through challenges" },
        { name: "Personal Standards", desc: "Setting realistic expectations for yourself" },
      ],
      adversity: [
        { name: "Anxiety", desc: "Managing academic pressure and uncertainty about the future" },
        { name: "Self-Criticism", desc: "Reducing harsh self-judgment about performance" },
        { name: "Depression", desc: "Addressing feelings of hopelessness or overwhelm" },
      ],
    },
    howToImprove:
      "Break goals into manageable steps, build study routines, connect with mentors and peers, and practice self-compassion during setbacks.",
    workshops: [
      { title: "Managing Academic Pressure", duration: "10 min", type: "workshop" },
      { title: "Finding Your Direction", duration: "15 min", type: "video" },
      { title: "Study & Focus Techniques", duration: "10 min", type: "practice" },
    ],
  },
  goal: {
    name: "A goal I'm working toward",
    icon: "target",
    description: "Athletic performance, a personal milestone, health, or a big life goal",
    indicators: {
      strengths: [
        { name: "Grit", desc: "Strengthening commitment to achieve your goal" },
        { name: "Hope", desc: "Building belief in your ability to succeed" },
        { name: "Personal Standards", desc: "Setting healthy expectations for progress" },
      ],
      adversity: [
        { name: "Self-Criticism", desc: "Managing setbacks without harsh self-judgment" },
        { name: "Anxiety", desc: "Reducing worry about outcomes" },
        { name: "Depression", desc: "Maintaining motivation during challenges" },
      ],
    },
    howToImprove:
      "Create a clear action plan, track progress regularly, build accountability systems, and celebrate milestones along the way.",
    workshops: [
      { title: "Goal Setting & Achievement", duration: "15 min", type: "workshop" },
      { title: "Overcoming Obstacles", duration: "10 min", type: "video" },
      { title: "Progress Tracking Practice", duration: "5 min", type: "practice" },
    ],
  },
  day: {
    name: "Getting through the day",
    icon: "wind",
    description: "Stress, energy, focus, mental load, or just keeping up",
    indicators: {
      strengths: [
        { name: "Social Support", desc: "Building reliable help and emotional support from others" },
        { name: "Life Satisfaction", desc: "Developing overall contentment with daily life" },
        { name: "Hope", desc: "Strengthening belief in your ability to cope" },
      ],
      adversity: [
        { name: "Anxiety", desc: "Reducing persistent worry and nervousness" },
        { name: "Depression", desc: "Addressing sustained feelings of sadness" },
        { name: "Self-Criticism", desc: "Managing harsh self-judgment" },
      ],
    },
    howToImprove:
      "Practice mindfulness techniques, establish healthy routines, develop coping strategies for stress, and build a strong support network.",
    workshops: [
      { title: "Managing Daily Stress", duration: "10 min", type: "workshop" },
      { title: "Energy Management", duration: "10 min", type: "video" },
      { title: "Mindfulness Practice", duration: "5 min", type: "practice" },
    ],
  },
  change: {
    name: "A big change or transition",
    icon: "trend",
    description: "New chapter, loss, shift in role or identity, or starting over",
    indicators: {
      strengths: [
        { name: "Hope", desc: "Building belief in positive outcomes during change" },
        { name: "Grit", desc: "Developing resilience through uncertainty" },
        { name: "Social Support", desc: "Creating reliable help during transitions" },
      ],
      adversity: [
        { name: "Anxiety", desc: "Managing uncertainty and fear of the unknown" },
        { name: "Current Traumatic Stress", desc: "Processing difficult experiences" },
        { name: "Depression", desc: "Addressing grief or loss during change" },
      ],
    },
    howToImprove:
      "Accept that transitions take time, lean on your support network, maintain routines where possible, and practice self-compassion.",
    workshops: [
      { title: "Navigating Life Transitions", duration: "15 min", type: "workshop" },
      { title: "Building Resilience Through Change", duration: "15 min", type: "video" },
      { title: "Grounding Practice", duration: "5 min", type: "practice" },
    ],
  },
  self: {
    name: "Understanding myself better",
    icon: "compass",
    description: "Identity, values, patterns, or figuring out what I actually want",
    indicators: {
      strengths: [
        { name: "Life Satisfaction", desc: "Developing clarity about what brings fulfillment" },
        { name: "Personal Standards", desc: "Understanding your values and expectations" },
        { name: "Hope", desc: "Building belief in your ability to grow" },
      ],
      adversity: [
        { name: "Self-Criticism", desc: "Replacing harsh judgment with self-compassion" },
        { name: "Anxiety", desc: "Managing uncertainty about identity and direction" },
        { name: "Depression", desc: "Addressing disconnection from yourself" },
      ],
    },
    howToImprove:
      "Practice regular reflection, explore your values and patterns, seek feedback from trusted others, and give yourself permission to evolve.",
    workshops: [
      { title: "Self-Discovery Workshop", duration: "15 min", type: "workshop" },
      { title: "Understanding Your Values", duration: "10 min", type: "video" },
      { title: "Reflection Practice", duration: "10 min", type: "practice" },
    ],
  },
};

export const GOAL_ORDER = ["rel", "fam", "work", "school", "goal", "day", "change", "self"];

export const ALL_STRENGTHS: Indicator[] = [
  { name: "Grit", desc: "One's commitment to achieve a long-term goal" },
  { name: "Hope", desc: "The belief in one's ability to set goals and the motivation to find pathways to achieve them" },
  { name: "Leadership", desc: "The confidence in one's abilities to influence others" },
  { name: "Personal Standards", desc: "The expectations of one's personal abilities" },
  { name: "Positive Social Connections", desc: "Personal and environmental resources needed to overcome adversity" },
  { name: "Social Support", desc: "The availability of reliable help and emotional support from others in times of need" },
  { name: "Life Satisfaction", desc: "Overall sense of contentment and fulfillment with one's life circumstances and experiences" },
];

export const ALL_ADVERSITY: Indicator[] = [
  { name: "Anxiety", desc: "A state of persistent, excessive worry or nervousness regarding everyday situations" },
  { name: "Depression", desc: "A mood disorder characterized by sustained feelings of sadness, hopelessness, and reduced interest in activities" },
  { name: "Current Traumatic Stress", desc: "Current distress associated with one or more previous, unexpected traumatic events" },
  { name: "Social Exclusion", desc: "The experience of being excluded or ignored by others, resulting in a lack of social belonging" },
  { name: "Drug/Alcohol Concerns", desc: "The psychological or physical distress and negative consequences resulting from substance use" },
  { name: "Self-Criticism", desc: "Harsh self-judgment and negative self-evaluation that undermines confidence and well-being" },
  { name: "Intimate Partner Stress", desc: "Tension, conflict, or distress within a romantic or intimate relationship" },
];
