// The 16 cannons (canon Part V/§4.1 + Addendum A). Each is a theater.
export interface Cannon {
  n: number
  id: string // ecosystem id
  name: string
  nickname: string // Addendum A stage identity
  icon: string
  kind: 'email' | 'sms' | 'mms' | 'voice' | 'call' | 'print' | 'social' | 'video' | 'ad' | 'broadcast' | 'event' | 'p2p' | 'directive' | 'reserved'
}

export const CANNONS: Cannon[] = [
  { n: 1, id: 'E30', name: 'Email', nickname: 'The Inbox', icon: '📧', kind: 'email' },
  { n: 2, id: 'E31', name: 'SMS', nickname: 'The Thread', icon: '💬', kind: 'sms' },
  { n: 3, id: 'E31·M', name: 'MMS', nickname: 'The Gallery', icon: '🖼️', kind: 'mms' },
  { n: 4, id: 'E17', name: 'RVM', nickname: 'The Voicemail', icon: '📮', kind: 'voice' },
  { n: 5, id: 'E32', name: 'Phone Bank', nickname: 'The Call Sheet', icon: '☎️', kind: 'call' },
  { n: 6, id: 'E33', name: 'Direct Mail', nickname: 'The Print Studio', icon: '✉️', kind: 'print' },
  { n: 7, id: 'E19', name: 'Social', nickname: 'The Feed', icon: '📣', kind: 'social' },
  { n: 8, id: 'E45', name: 'AI Video', nickname: 'The Studio', icon: '🎬', kind: 'video' },
  { n: 9, id: 'E46', name: 'Digital Ads', nickname: 'The Screening Room', icon: '🖥️', kind: 'ad' },
  { n: 10, id: 'E16', name: 'TV / Radio', nickname: 'The Broadcast Booth', icon: '📺', kind: 'broadcast' },
  { n: 11, id: 'E70', name: 'Ad Amplify', nickname: 'The Amplifier', icon: '📈', kind: 'ad' },
  { n: 12, id: 'E34', name: 'Events', nickname: 'The Marquee Board', icon: '🎟️', kind: 'event' },
  { n: 13, id: 'E37', name: 'VIP Events', nickname: 'The Gala Curtain', icon: '🥂', kind: 'event' },
  { n: 14, id: '#14', name: 'Candidate Directive', nickname: 'The Briefing Room', icon: '🎯', kind: 'directive' },
  { n: 15, id: '#15', name: 'Manager Directive', nickname: 'The Task Board', icon: '📋', kind: 'directive' },
  { n: 16, id: '—', name: 'Reserved', nickname: 'The Curtain', icon: '🎭', kind: 'reserved' },
]
